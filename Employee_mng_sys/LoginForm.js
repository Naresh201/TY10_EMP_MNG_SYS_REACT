import React, { Component } from 'react'

export default class LoginForm extends Component {
    state={
            username:"",
            useremail:"",
            pwd:"",
            phonenumber:"",
            screenname:""
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("handle Submit");
        console.log(this.state);
        localStorage.setItem(this.state.user , JSON.stringify(this.state));
        this.setState({
            username:"",
            useremail:"",
            pwd:"",
            phonenumber:"",
            screenname:"",

        })
    }

    handleChange =(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
   

  render() {
    return (
      <div className="container card mt-5 col-md-6">
        <form  className="card-body"  onSubmit={this.handleSubmit}  >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input
              type="username"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
            />
          
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.useremail}
              onChange={this.handleChange}
              name="useremail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Phone Number</label>
            <input
              type="phone number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.phonenumber}
              onChange={this.handleChange}
              name="phonenumber"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Screen Name</label>
            <input
              type="screenname"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.screenname}
              onChange={this.handleChange}
              name="screenname"
            />
          
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.pwd}
              onChange={this.handleChange}
              name="pwd"
            />
          </div>
         
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
