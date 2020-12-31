import {Card, Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function House(props) {
    return(<Card.Img variant="top"  src={props.House_src}  height={props.height} width={props.width}/>);
}