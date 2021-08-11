import React, { Component } from "react";
import axios from "axios";
//import { useHistory } from "react-router-dom";
//import { Dimmer, Loader } from "semantic-ui-react";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
//const history = useHistory();

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }
  changeHandler = async (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = async (e) => {
    this.serverRequest = axios;

    e.preventDefault();
    axios
      .post("https://tathayafoods.herokuapp.com/api/admin/signup", this.state, {})

      .then((response) => {
        console.log(response);
        window.location.pathname = "/";

      }
      )
      .catch(() => {
        alert('Please check your data!');
      });
  };
  render() {
    const { firstName, lastName, email, password } = this.state;
    // if (!this.state) 
    //    return (
    //       <div className="Loader">
    //          <Dimmer active inverted size="massive">
    //             <Loader inverted>Loading</Loader>
    //          </Dimmer>
    //       </div>
    //     );
    return (

      <div className="maincontainer">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 d-none d-md-flex bg-image"></div>

            <div className="col-md-6 bg-light">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <h3 className="display-4">Admin Console</h3>
                      <br />
                      <form onSubmit={this.submitHandler}>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="firstName"
                            required
                            onChange={this.changeHandler}
                            value={firstName}
                            placeholder="Enter firstName"
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="lastName"
                            required
                            onChange={this.changeHandler}
                            value={lastName}
                            placeholder="Enter lastName"
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="email"
                            name="email"
                            onChange={this.changeHandler}
                            value={email}
                            placeholder="Enter EmailId"
                            required
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                        </div>
                        <div div className="form-group mb-3">
                          <input
                            type="password"
                            name="password"
                            onChange={this.changeHandler}
                            value={password}
                            placeholder="Enter Password"
                            required
                            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          />
                        </div>
                        <br />
                        <button
                          type="submit"
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm black"
                          >
                          Register
                        </button>
                      <p>Already have an account</p>  
                        <button
                          onClick={() => (window.location.pathname = "/")}
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm black"

                          >
                          Login  
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
