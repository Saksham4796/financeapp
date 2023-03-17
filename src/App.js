import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income: 0,
      expenses: 0,
      savings: 0,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { income, expenses } = this.state;
    const savings = income - expenses;

    this.setState({
      savings: savings,
    });
  };

  render() {
    return (
      <div>
        <h1>My Finances</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Income:
            <input
              name="income"
              type="number"
              value={this.state.income}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Expenses:
            <input
              name="expenses"
              type="number"
              value={this.state.expenses}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Calculate Savings</button>
        </form>
        <h2>Monthly Savings: {this.state.savings}</h2>
      </div>
    );
  }
}

export default App;