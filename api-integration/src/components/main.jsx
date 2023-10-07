import React from "react";
import axios from "axios";


export default function Main() {
    return (
        <div>
        <p>React App</p>
        <button onClick={BasicCall}>Basic Call</button>
        </div>
    );
}

function BasicCall() {
    axios.get('http://localhost:5000/api/get/airplanes')
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}