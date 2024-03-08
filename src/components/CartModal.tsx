// // CartModal.tsx
// import React from 'react';
// import { Modal } from 'react-bootstrap';

// const CartModal: React.FC = () => {
//   const { cartItems } = useCart();

//   return (
//     <Modal show={/* condition to show modal */} onHide={/* handle modal close */} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Cart</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <ul>
//           {cartItems.map((item, index) => (
//             <li key={index}>{item.name} - Quantity: {item.quantity}</li>
//           ))}
//         </ul>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default CartModal;
