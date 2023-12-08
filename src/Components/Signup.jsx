import React, { Component } from "react";
import { registerData } from "../Data/registerData";
import axios from "axios";
import { APIVariables } from "../Data/APIEndPoints";
import { Form } from "./Form";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: {
        name: "",
        email: "",
        password: "",
        address: "",
        gender: "",
        hobbies: [],
        country: "",
      },
      submit: false,
      hobbiesAvailable: [],
    };
  }

  componentDidMount() {
    axios
      .get(APIVariables.API_URL + "Registration/availableHobby", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((data) => {
        this.setState({ hobbiesAvailable: data.data });
        console.log(this.state.hobbiesAvailable);
      });
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    let details = this.state.students;
    details[name] = value;
    this.setState({ students: { ...details } });
  };

  handleCheckbox = (e) => {
    const { name, checked, id } = e.target;
    let tempHobby = this.state.students.hobbies;
    if (checked) {
      tempHobby.push(id);
    } else if (!checked) {
      tempHobby.splice(tempHobby.indexOf(name), 1);
    }
    let details = this.state.students;
    details.hobbies = tempHobby;
    this.setState({ students: { ...details } });
  };

  handleSubmit = () => {
    const isValid =
      this.state.students.name !== "" &&
      this.state.students.email !== "" &&
      this.state.students.password !== "" &&
      this.state.students.gender !== "" &&
      this.state.students.country !== "";

    if (!isValid) {
      window.alert("Fill all fields");
    } else {
      registerData.push(this.state.students);

      window.alert("Sumbit Successfull");

      const data = this.state.students;
      data.hobbies = this.state.students.hobbies.toString();
      console.log(data);
      axios
        .post(APIVariables.API_URL + "Registration/Register", data)
        .then((result) => {
          if (result.status === 200) {
            this.setState({ submit: true });
            return alert(result);
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  render() {
    const { students, submit, hobbiesAvailable } = this.state;
    return (
      <div>
        {this.props.login || submit ? (
          <h1>You Are Registered</h1>
        ) : (
          <Form
            students={students}
            handleChange={this.handleChange.bind(this)}
            handleCheckbox={this.handleCheckbox.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            hobbiesAvailable={hobbiesAvailable}
          />
        )}
      </div>
    );
  }
}
