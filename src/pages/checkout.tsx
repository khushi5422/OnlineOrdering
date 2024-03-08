import { useCart } from '@/components/CartContext';
import BillCard from '@/components/billcard';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartItem } from '@/components/CartContext';

interface CheckoutProps {
  clearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ clearCart }) => {
  const { cartItems } = useCart();
  
  console.log("Checkout page" ,cartItems);
  const [localCartItems, setLocalCartItems] = useState<CartItem[]>(cartItems);

  // const handleOrderNow = () => {
  //   // Do something when the "Order Now" button is clicked, e.g. send an order to the server
  //   // ...

  //   // Clear the cart after the order has been sent
  //   clearCart();
  // };

  useEffect(() => {
    setLocalCartItems(cartItems);
  }, [cartItems]);
  
  return (
    <>
      <Form className='container mt-3'>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Table Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Table Number" />
          <Form.Text className="text-muted">
            Find on Table Beside Scanner
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder=" Enter your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Add Note</Form.Label>
          <Form.Control type="text" placeholder="Enter some special note" />
        </Form.Group>

        <BillCard tableNumber ={1}  customerName = "khushi"  phoneNumber = "9999999999" orderItems = {cartItems} />
        <div className='text-center'>
        <Button variant="primary" type="submit">
          Order Now
        </Button>
        </div>
      </Form>
    </>
  )
}

export default Checkout;
