import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Checkout from './checkout';
function Transaction(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" className='float-right' onClick={toggle}>
        New Transaction
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>New Transcation</ModalHeader>
        <ModalBody>
          <Checkout/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Transaction;
