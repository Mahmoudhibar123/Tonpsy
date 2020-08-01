
import React, { Component } from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

class Calender extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Kashif is here",
      next: "<",
      prv: ">",
      itemsToShow: 3,
    };
  }

  showMore = () =>{
    this.setState({itemsToShow: 12})
  }

  render() {
    const { value } = this.props;
    return (
        <div>
          <div className="c-title">
            <h5> Schedule your appointment online </h5>

            <div className="row top-margin">
                <div className="top-border"></div>
                <div className="col-sm-1 blue-color">
                   <FaAngleLeft />
                </div>

                    { value.available.map( (item, index) =>{
                        return(
                            <div key={index} className="col-sm-2 no-padding">
                              <div className="slot-day"> {item.name} </div>
                              <div className="slot-date">{item.date} </div>
                              <div className="slot-ac">
                                  { item.times.slice(0, this.state.itemsToShow).map( (time, tIndex) =>{
                                    return(
                                          <div key={tIndex} className="slot-time"> {time.time}</div>
                                      )
                                    }
                                  )}
                              </div>
                            </div>
                        )
                      })
                    }


                <div className="col-sm-1 blue-color">
                  <FaAngleRight />
                </div>

                <div className="col-sm-12 mt-top">
                  <div className="bottom-border"></div>
                  <p className="show-padding" onClick={() => this.showMore()}> Show more </p>
                </div>
            </div>
          </div>
        </div>
    );
  }
};
export default Calender;
