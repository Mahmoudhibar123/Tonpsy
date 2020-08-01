import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Logo from "../../../assets/img/logo_2x.png";
import WelcomeBoard from "../WelcomeBoard/WelcomeBoard";
import classNames from 'classnames';
import AccCore from 'opentok-accelerator-core';
import 'opentok-solutions-css';
import './opentok/chat.css';
import Helmet from 'helmet';

import "./Main.css";
import { AppString, broadcastData, JOIN_CALL } from "./../../../constant";
import Spinner from 'react-spinner';


let apiKey;
let sessionId;
let token;
let otCore;

let otCoreOptions = {
  credentials: {
    apiKey: "46799264",
    sessionId: "1_MX40Njc5OTI2NH5-MTU5NTgwODI2NTE5Mn5KQ1lXamJYVnFCNlR4MGc5Zk9mTmp0aFV-fg",
    token: "T1==cGFydG5lcl9pZD00Njc5OTI2NCZzaWc9NTU3NWY0NTFlN2VhNWQ1MmJmOTQ5ZjYxNGZmODVkNGE1OTE4MWZkZTpzZXNzaW9uX2lkPTFfTVg0ME5qYzVPVEkyTkg1LU1UVTVOVGd3T0RJMk5URTVNbjVLUTFsWGFtSllWbkZDTmxSNE1HYzVaazltVG1wMGFGVi1mZyZjcmVhdGVfdGltZT0xNTk1ODA4MjY1JnJvbGU9bW9kZXJhdG9yJm5vbmNlPTE1OTU4MDgyNjUuMjI4MzMzNzYxNDM1Mg==",
  },
  // A container can either be a query selector or an HTML Element
  streamContainers(pubSub, type, data, stream) {
    return {
      publisher: {
        camera: '#cameraPublisherContainer',
        screen: '#screenPublisherContainer',
      },
      subscriber: {
        camera: '#cameraSubscriberContainer',
        screen: '#screenSubscriberContainer',
      },
    }[pubSub][type];
  },
  controlsContainer: '#controls',
  packages: ['textChat', 'screenSharing', 'annotation'],
  communication: {
    callProperties: null, // Using default
  },
  textChat: {
    name: ['Mahmoud', 'Anis', 'Mahmoud', 'Anis','Mahmoud'][Math.random() * 5 | 0], // eslint-disable-line no-bitwise
    waitingMessage: 'Messages will be delivered when other users arrive',
    container: '#chat',
  },
  screenSharing: {
    extensionID: 'plocfffmbcclpdifaikiikgplfnepkpo',
    annotation: true,
    externalWindow: false,
    dev: true,
    screenProperties: {
      insertMode: 'append',
      width: '100%',
      height: '100%',
      showControls: false,
      style: {
        buttonDisplayMode: 'off',
      },
      videoSource: 'window',
      fitMode: 'contain' // Using default
    },
  },
  annotation: {
    absoluteParent: {
      publisher: '.App-video-container',
      subscriber: '.App-video-container'
    }
  },
};

const containerClasses = (state) => {
  const { active, meta, localAudioEnabled, localVideoEnabled } = state;
  const sharingScreen = meta ? !!meta.publisher.screen : false;
  const viewingSharedScreen = meta ? meta.subscriber.screen : false;
  const activeCameraSubscribers = meta ? meta.subscriber.camera : 0;
  const activeCameraSubscribersGt2 = activeCameraSubscribers > 2;
  const activeCameraSubscribersOdd = activeCameraSubscribers % 2;
  const screenshareActive = viewingSharedScreen || sharingScreen;
  return {
    controlClass: classNames('App-control-container', { hidden: !active }),
    localAudioClass: classNames('ots-video-control circle audio', { hidden: !active, muted: !localAudioEnabled }),
    localVideoClass: classNames('ots-video-control circle video', { hidden: !active, muted: !localVideoEnabled }),
    localCallClass: classNames('ots-video-control circle end-call', { hidden: !active }),
    cameraPublisherClass: classNames('video-container', { hidden: !active, small: !!activeCameraSubscribers || screenshareActive, left: screenshareActive }),
    screenPublisherClass: classNames('video-container', { hidden: !active || !sharingScreen }),
    cameraSubscriberClass: classNames('video-container', { hidden: !active || !activeCameraSubscribers },
      { 'active-gt2': activeCameraSubscribersGt2 && !screenshareActive },
      { 'active-odd': activeCameraSubscribersOdd && !screenshareActive },
      { small: screenshareActive }
    ),
    screenSubscriberClass: classNames('video-container', { hidden: !viewingSharedScreen || !active }),
  };
};


const connectingMask = () =>
  <div className="App-mask">
    <Spinner />
    <div className="message with-spinner">Connecting</div>
  </div>;

const startCallMask = start =>
  <div className="App-mask">
    <button className="message button clickable" onClick={start}>Click to Start Call </button>
  </div>;


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      connected: false,
      active: false,
      publishers: null,
      subscribers: null,
      meta: null,
      localAudioEnabled: true,
      localVideoEnabled: true,
      openPage: false,
    };
    this.currentUserId = localStorage.getItem(AppString.ID);
    this.currentUserAvatar = localStorage.getItem(AppString.PHOTO_URL);
    this.currentUserNickname = localStorage.getItem(AppString.NICKNAME);
    this.startCall = this.startCall.bind(this);
    // this.openPage = this.openPage.bind(this);
    this.endCall = this.endCall.bind(this);
    this.toggleLocalAudio = this.toggleLocalAudio.bind(this);
    this.toggleLocalVideo = this.toggleLocalVideo.bind(this);
  }

  componentDidMount() {
    otCore = new AccCore(otCoreOptions);
    otCore.connect().then(() => this.setState({ connected: true }));
    const events = [
      'subscribeToCamera',
      'unsubscribeFromCamera',
      'subscribeToScreen',
      'unsubscribeFromScreen',
      'startScreenShare',
      'endScreenShare',
    ];
    events.forEach(event => otCore.on(event, ({ publishers, subscribers, meta }) => {
      this.setState({ publishers, subscribers, meta });
    }));
  }

  // startCall = () => {
  //   const {  user } = this.props;
  //   const { rmUser } = this.props.location.state
  //   let data = { from: user.id, to: rmUser.id, type: JOIN_CALL}
  //   broadcastData(data)
  // }

  // openPage() {
  //   this.setState({openPage: true});
  // }

  startCall() {
    otCore.startCall()
      .then(({ publishers, subscribers, meta }) => {
        this.setState({ publishers, subscribers, meta, active: true });
      }).catch(error => console.log(error));
  }

  endCall() {
    otCore.endCall();
    this.setState({ active: false });
  }

  toggleLocalAudio() {
    otCore.toggleLocalAudio(!this.state.localAudioEnabled);
    this.setState({ localAudioEnabled: !this.state.localAudioEnabled });
  }

  toggleLocalVideo() {
    otCore.toggleLocalVideo(!this.state.localVideoEnabled);
    this.setState({ localVideoEnabled: !this.state.localVideoEnabled });
  }

  render() {
    const { connected, active, openPage } = this.state;
    const {
      localAudioClass,
      localVideoClass,
      localCallClass,
      controlClass,
      cameraPublisherClass,
      screenPublisherClass,
      cameraSubscriberClass,
      screenSubscriberClass,
    } = containerClasses(this.state);
    return (
      <div className="chat__root">
        <div className="chat__header">
          <img src={Logo} alt="logo" />
        </div>
        { !openPage ? (
              <div className="chat_body">
                <div className="row" style={{padding: '20px'}}>
                  <div className="col-6">
                      <div id="chat" className="App-chat-container"  style={{padding: '20px'}}/>
                  </div>
                  <div className="col-6">
                      <div className="App-main">
                        {/* <Helmet>
                            <script src="https://static.opentok.com/v2/js/opentok.min.js" type="text/javascript" />
                        </Helmet> */}
                        <div className="App-video-container">
                          { !connected && connectingMask() }
                          { connected && !active && startCallMask(this.startCall)}
                          <div id="cameraPublisherContainer" className={cameraPublisherClass} />
                          <div id="screenPublisherContainer" className={screenPublisherClass} />
                          <div id="cameraSubscriberContainer" className={cameraSubscriberClass} />
                          <div id="screenSubscriberContainer" className={screenSubscriberClass} />
                        </div>
                        <div id="controls" className={controlClass}>
                          <div className={localAudioClass} onClick={this.toggleLocalAudio} />
                          <div className={localVideoClass} onClick={this.toggleLocalVideo} />
                          <div className={localCallClass} onClick={this.endCall} />
                        </div>
                      </div>
                  </div>
                </div>
              </div> ) : (
                <div className="chat_body">
                    <div className="viewBoard">
                      <WelcomeBoard
                        currentUserNickname={this.currentUserNickname}
                        currentUserAvatar={this.currentUserAvatar}
                      />
                    </div>
                    <div className="col-md-12" style={{ position: 'absolute', bottom: 10}}>
                        <button
                          className="btn btn-primary btn-sm w-auto" style={{ marginLeft: '10px'}}
                          onClick={this.openPage}  >
                            Start Video Call
                        </button>
                    </div>
                </div> )}
      </div>
    );
  }
}

export default withRouter(Main);
