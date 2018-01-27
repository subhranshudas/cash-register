import React, { Component } from 'react';
import InputField from '../components/input-field';
import ChangeDue from '../features/change-due';
import {Button, Form} from 'reactstrap';



class CashRegister extends Component {
  state = {
    price: 0,
    received: 0,
    changeDue: null
  };

  getInputValue = ({field, val}) => {
    this.setState({
      [field]: val
    });
  }

  calculateChangeDue = () => {
    this.setState(prevState => {
      return {
        changeDue: prevState.received - prevState.price
      }
    });
  }

  render() {
    return (
      <div className="cash-register">
          <Form>
            <InputField type="text" model="price" label="Price" handleOnChange={this.getInputValue} />
            <InputField type="text" model="received" label="Received" handleOnChange={this.getInputValue} />
            <Button block color="success" onClick={this.calculateChangeDue}>Pay</Button>
          </Form>
          <ChangeDue changeDue={this.state.changeDue}/>
      </div>
    );
  }
}

export default CashRegister;
