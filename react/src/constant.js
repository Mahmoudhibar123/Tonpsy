import axios from "axios";

export const API_ENDPOINT = "http://localhost:3001";
export const IMAGE_ENDPOINT = API_ENDPOINT;
export const AppString = {
    ID: "id",
    PHOTO_URL: "photoUrl",
    NICKNAME: "nickname",
    ABOUT_ME: "aboutMe",
    NODE_MESSAGES: "messages",
    NODE_USERS: "users",
    UPLOAD_CHANGED: "state_changed",
    DOC_ADDED: "added",
    PREFIX_IMAGE: "image/",
    ROLE: "role",
};

export const API_WS_ROOT = 'ws://localhost:3001/cable';
export const JOIN_CALL = "JOIN_CALL";
export const EXCHANGE = "EXCHANGE";
export const LEAVE_CALL = "LEAVE_CALL";
export const ice = {
    iceServers: [{
        urls: "stun:stun2.l.google.com:19302"
    }]
};

export const broadcastData = data => {
    axios.post(`${API_ENDPOINT}/calls`, data)
};

export const peerIce = { 'iceServers': [{ 'urls': 'stun:stun.l.google.com:19302' }], 'sdpSemantics': 'unified-plan' }