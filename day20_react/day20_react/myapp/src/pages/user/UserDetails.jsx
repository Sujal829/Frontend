import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const defaultValue ={
    address:{
        city:''
    },
    email:'',
    phone:'',
    name:{
        firstname:'',
        lastname:''
    }
  };

function UserDetails() {
  const [details, setDetials] = useState(defaultValue);
  const [cart, setCart] = useState({});
  const params = useParams();
  console.log(params);
  const { id, cart_id } = params;

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/users/${id}`);
        if(res.data) setDetials(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getDetails();
  }, [id]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/carts/${cart_id}`);
        if(res.data) setCart(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getDetails();
  }, [cart_id]);
  const { address, name, email, phone } = details;
  return (
    <div>
      <h2>{name?.firstname}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <span>Email: {email}</span>
        <span>Phone: {phone}</span>
        <span>City: {address?.city}</span>
      </div>
    </div>
  );
}

export default UserDetails;
