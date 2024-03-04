import BillCard from '@/components/billcard';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const orderItems = [
  { name: 'Burger', price: 50, quantity: 1 },
  { name: 'Fries', price: 20, quantity: 2 },
  { name: 'Coke', price: 50, quantity: 1 },
];
export default function checkout() {
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
        <BillCard tableNumber ={1}  customerName = "khushi"  phoneNumber = "9999999999" orderItems = {orderItems} />
        <div className='text-center'>
        <Button variant="primary" type="submit" >
          Order Now
        </Button>
        </div>
      </Form>
    </>
  )
}
