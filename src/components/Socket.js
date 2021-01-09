import {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { io } from "socket.io-client";
import { updateSocketEvent } from "../reducers/socket";

const API_HOST = process.env.API_HOST;

const socketEvents = ["launch", "player_list_update"];

function Socket(props) {
    const [socket, createSocket] = useState(null);

    useEffect(() => {
        if(typeof props.token === "string") {
            let newSocket = io(API_HOST, { auth: { token: props.token } });

            socketEvents.forEach(eventName => {
                newSocket.on(eventName, (message) => props.updateSocketEvent(eventName, message));
            });
            createSocket(newSocket);
        }
    }, [props.token]);

    useEffect(() => {
        if(socket) {
            socket.emit(props.message.event, props.message.data);
        }
    }, [props.message]);

    return null;
}

Socket.propTypes = {
    token: PropTypes.any,
    events: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    message: PropTypes.any,
};

const mapStateToProps = state => ({
    token: state.user.token,
    message: state.socket.message,
});
const mapDispatchToProps = {
    updateSocketEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Socket);
