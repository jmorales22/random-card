import React, { Component } from "react";

class Card extends Component {
    state = {
        image: "",
        firstName: "",
        lastName: "",
        email: "",
        birthday: "",
        addressNumber: "",
        addressStreet: "",
        addressCity: "",
        addressCountry: "",
        phone: "",
    }
   async componentDidMount() {
     try {
       const response = await fetch("https://randomuser.me/api/?results=1");
       const data = await response.json();
       this.setState({ image: data.results[0].picture.large });
       this.setState({ firstName: data.results[0].name.first });
       this.setState({ lastName: data.results[0].name.last });
       this.setState({ email: data.results[0].email });
       this.setState({ addressNumber: data.results[0].location.street.number });
       this.setState({ addressStreet: data.results[0].location.street.name});
       this.setState({ addressCity: data.results[0].location.city});
       this.setState({ addressCountry: data.results[0].location.country});
       this.setState({ phone: data.results[0].phone});
     } catch(error) {
       return error;
     }

    }
  render() {
    const { image, firstName, lastName, email, addressNumber, addressStreet, addressCity, addressCountry, phone} = this.state
    return (
      <div>
        <img src = { image } alt="person" />
        <p>NAME: { firstName} {lastName}</p>
        <p>EMAIL: { email }</p>
        <p> ADDRESS: { addressNumber } {addressStreet} </p>
        <p>{ addressCity }, {addressCountry} </p>
        <p> PHONE: { phone }</p>
      </div>
    );
  }
}

export default Card;