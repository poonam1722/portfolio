import React, { Component } from 'react';
import axios from 'axios';
require('dotenv').config();

export default class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.onChangename = this.onChangename.bind(this);
    this.onChangephone = this.onChangephone.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangemsg = this.onChangemsg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      phone: '',
      email: '',
      msg: '',
    };
  }

  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangephone(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangemsg(e) {
    this.setState({
      msg: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const form = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      msg: this.state.msg,
    };
    console.log(form);
    axios.post('/contact/add', form).then((res) => console.log(res.data));
    window.location = '/';
  }

  render() {
    return (
      <>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
          <div className="container contact_div">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="fullname"
                      value={this.state.name}
                      onChange={this.onChangename}
                      placeholder="Enter your name"
                    />

                    <label for="exampleFormControlInput1">Phone</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.onChangephone}
                      placeholder="Mobile Number"
                    />

                    <label for="exampleFormControlInput1">Email Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeemail}
                      placeholder="abc@example.com"
                    />
                    <label for="exampleFormControlInput1">Message</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="msg"
                      value={this.state.msg}
                      onChange={this.onChangemsg}
                    ></textarea>

                    <div className="col-12 my-3">
                      <button className="btn btn-outline-primary" type="submit">
                        Submit form
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
