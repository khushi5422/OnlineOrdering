import React from 'react';

interface Props {
  tableNumber: number;
  customerName: string;
  phoneNumber: string;
  orderItems: { name: string; price: number ;quantity : number}[];
}

interface State {
  total: number;
}

class BillCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    this.calculateTotal();
  }

  calculateTotal() {
    const { orderItems } = this.props;
    let total = 0;
    orderItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    this.setState({ total });
  }

  render() {
    const { tableNumber, customerName, phoneNumber, orderItems } = this.props;
    const { total } = this.state;

    return (
      <>
      <style>{`
      .bill-card {
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
        padding: 16px;
        margin-bottom: 16px;
      }
      
      .bill-card-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
      }
      
      .bill-card-body {
        display: flex;
        height: 115px;
      }
      
      .order-item-column {
        display: flex;
        flex-direction: column;
        width: 50%;
      }
      
      .order-item-column-header {
        font-weight: bold;
        margin-bottom: 8px;
      }
      
      .order-item-name {
        margin-bottom: 8px;
      }
      
      .order-item-price {
        margin-bottom: 8px;
      }
      `}</style>
      <div className="bill-card">
        <div className="bill-card-header">
          <div>
            Table {tableNumber} - {customerName} - {phoneNumber}
          </div>
          <b>Total: ₹ {total}</b>
        </div>
        <div className="bill-card-body">
          <div className="order-item-column">
            <div className="order-item-column-header">Item</div>
            {orderItems.map((item, index) => (
              <div key={index} className="order-item-name">
                {item.quantity} x {item.name}
              </div>
            ))}
          </div>
          <div className="order-item-column">
            <div className="order-item-column-header">Price</div>
            {orderItems.map((item, index) => (
              <div key={index} className="order-item-price">
                ₹ {item.price * item.quantity}
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default BillCard;