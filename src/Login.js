import React, { Component } from "react";
//import { Dimmer, Loader } from "semantic-ui-react";

import axios from "axios";
import "./Login.css";
import "./App.css";

import { setUserSession } from "./Common";


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      .post("https://tathayafoods.herokuapp.com/api/admin/signin", this.state, {
        credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": "*",

          token: localStorage.getItem("token"),
        },
      })

      .then((response) => {
        console.log(response);
        setUserSession(response.data.token, response.data.user.role);
        console.log(response.data.token);

        window.location.pathname = "/productadd/";

        // var accessTokenObj = JSON.parse(localStorage.getItem('token'));
        //console.log(accessTokenObj);
      }
      )
      .catch(() => {
        alert('Please check your data!');
      });
  };

  render() {
    const { email, password } = this.state;
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
                  <div >
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <h3 className="display-4">Admin Console</h3>
                      <br />
                      <form onSubmit={this.submitHandler}>
                        <div className="form-group mb-3">
                          <input
                            type="text"
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
                        <button type="submit" 
                                  className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm black"

                        >
                          SignIn
                        </button>
        <p>If you are new to this portal</p>  
                       
                        <button
                          onClick={() => (window.location.pathname = "/signup")}
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm black"
                          >
                          SignUp
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
export default Login;
