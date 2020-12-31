import {Card, Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Marketingtile(props) {
return(<Card.Img variant="top" src={props.marketingtile_src} 
style = {{transform: `rotate(${(props.rotate%4) * 90}deg)`}} height={props.height} 
width={props.width} />);
}