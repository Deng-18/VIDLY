import React, { Component } from 'react'
import { getCustomers } from '../../services/fakeCustomerService';

class Customers extends Component {
    state = {
        customers: []
    }

    componentDidMount() {
        this.setState({customers: getCustomers()})
    }

    handleLike = customer => {
        const customers = [...this.state.customers];
        const index = customers.indexOf(customer)
        customers[index] = { ...customers[index] }
        customers[index].isGold = !customers[index].isGold
        this.setState({ customers: customers })
    }

    render() {
        return (
        <div>
            <h1>Customers</h1>
                <table className="table">
            <thead className="table-dark m-5">
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>IsGold</th>
              </tr>
            </thead>
            <tbody>
                {this.state.customers.map(customer => (
                  <tr className="text-align-center"  key={customer._id} id={customer._id}>
                    <td>{customer.name}</td>
                    <td>{customer.phone}</td>
                    <td><i className={customer.isGold === true ? 'fa fa-heart' : 'fa fa-heart-o'}
                    style={{ cursor: 'pointer' }} 
                    onClick={this.handleLike.bind(this, customer)} >
                    </i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        )
    }
}

export default Customers;