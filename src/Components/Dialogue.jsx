import React from 'react';
import Modal from 'react-bootstrap/Modal';
import QR from '../Images/khalti.jpeg';
import Button from 'react-bootstrap/Button';

export default function Dialogue(props) {
return (
<>
  <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body>
      <h4 className='text-center'>KHALTI Payments</h4>
      <div className="text-center py-2">
        <img src={QR} alt="QR-scanner" width={"100%"} height={"auto"} />
      </div>
      <p className='text-center fs-3 fw-light'>
        Due to government policy we only accept Khalti payment at the moment.
        <br /> please scan and pay.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
</>
)
}