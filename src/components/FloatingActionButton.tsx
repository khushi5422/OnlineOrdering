import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useCart } from './CartContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiSolidCartAlt } from "react-icons/bi";

const FloatingActionButton: React.FC = () => {
  const { cartItems } = useCart();
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleFinalizeOrder = () => {
    router.push('/checkout');
  };

console.log("Cart Items in Cart floating button", cartItems);

  return (
    <>
      <button className="btn btn-primary fab" onClick={handleModalOpen}>
        <i className="bi bi-plus"><BiSolidCartAlt /></i>
      </button>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name} - Quantity: {item.quantity}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Link href="/checkout">
            <button className='btn btn-outline-success'> Finalizing Your Order</button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FloatingActionButton;
