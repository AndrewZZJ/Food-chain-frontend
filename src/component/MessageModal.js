import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function MessageModal(props) {
    return (
      <Modal.Dialog>
      <Modal.Header style={{backgroundColor:"#262727", paddingLeft: '2rem'}}>
        <Modal.Title style={{color: "white", fontFamily: "VTC"}}>{props.title}</Modal.Title>
      </Modal.Header>
    
      <Modal.Body style={{justifyContent: 'center'}}>
    <p>{props.text}</p>
    
      </Modal.Body>
    <Button variant="primary" style={{alignSelf: 'center', marginBottom: '1rem', fontFamily: "VTC", paddingLeft: '2rem', paddingRight: '2rem'}}>{props.buttonTitle}</Button>
    </Modal.Dialog>
    )
}