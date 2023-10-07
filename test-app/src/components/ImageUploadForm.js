import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
  const [token, setToken] = useState(null);
  const [image, setImage] = useState(null);

  // Function to fetch authentication token from the server
  const getAuthToken = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/', {
        // Add any data required for authentication, e.g., username and password
        "email": "sam@gmail.com",
        "password": "cat&456"
      });

      // Assuming the server responds with the token in the 'token' field of the response
      const authToken = response.data.token;
      setToken(authToken);
      console.log(authToken);
    } catch (error) {
      console.error('Error fetching authentication token:', error);
    }
  };

  // Function to handle image input change
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Function to send the image when the user clicks submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      console.error('Authentication token is missing.');
      return;
    }

    if (!image) {
      console.error('Please select an image.');
      return;
    }

    try {
      // Use FormData to send the image file to the server
      const formData = new FormData();
      formData.append('picture', image);

      // Set the authentication token in the request headers
      const config = {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      // Send the image to the server using POST request
      await axios.patch('http://127.0.0.1:8000/executive/update/employee/5', formData, config);

      // Reset the form after successful submission
      setImage(null);
      console.log("Successful !")
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <button onClick={getAuthToken}>Get Authentication Token</button>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImageUploadForm;
