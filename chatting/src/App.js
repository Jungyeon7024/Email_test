import React, { Component } from "react";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "", // 입력받은 email state 값
    };

    this.sendEmail = this.sendEmail.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  sendEmail(e) {
    e.preventDefault();
    console.log(this.state.email);

    const data = {
      email: this.state.email,
    };

    fetch("http://localhost:8080/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
       
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendEmail}>
          <label>
            Email:
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label>
          <button type="submit">Send Email</button>
        </form>
      </div>
    );
  }
}

export default SignupPage;
