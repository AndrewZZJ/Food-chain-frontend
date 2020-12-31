import { Card, Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


function EmployeeCard(props) {
    return(<Card.Img variant="top" src={props.imgsrc}  height={props.imgheight} width={props.imgwidth}/>)
}

export default EmployeeCard;