import {useState, useEffect} from "react";
import { connect } from "react-redux";
import {io} from "socket.io-client";

// eslint-disable-next-line no-undef
const API_HOST = process.env.API_HOST;

function Socket(props){
    const [socket, createSocket] = useState(null);
    useEffect(() => {
        if(typeof props.token === "string"){
            let newSocket = io(API_HOST, {auth: {token: props.token}});
            props.events.forEach(events => Object.keys(events).forEach(key => {
                newSocket.on(key, (...args) => {
                    events[key](props.dispatch, ...args);
                });
            }));
            createSocket(newSocket);
        }
    }, [props.token]);
    useEffect(() => {
        if(socket){
            socket.emit(props.message.event, props.message.data);
        }
    }, [props.message]);
    return null;
}

const mapStateToProps = state => ({
    token: state.user.token,
    message: state.socket.message,
});
const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Socket);