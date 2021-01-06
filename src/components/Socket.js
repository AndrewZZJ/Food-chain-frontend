import {useState, useEffect} from "react";
import { connect } from "react-redux";
import {io} from "socket.io-client";

// eslint-disable-next-line no-undef
const API_HOST = process.env.API_HOST;

function Socket(props){
    const [socket, createSocket] = useState(null);
    useEffect(() => {
        if(typeof props.token === "string"){
            createSocket(io(API_HOST, {auth: {token: props.token}}));
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

export default connect(mapStateToProps, null)(Socket);