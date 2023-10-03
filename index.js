// Add your code here
/*function submitData(userName, userEmail) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: userName,
      email: userEmail
    };
  
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, config)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        return error.message;
      });
  }
  submitData('John Doe', 'john@example.com')
  .then(responseData => {
    console.log(responseData); // This will log the response from the server
  })
  .catch(error => {
    console.error(error); // This will log any errors that occur during the request
  });*/


  function submitData(userName, userEmail) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: userName,
      email: userEmail
    };
  
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, config)
      .then(response => response.json())
      .then(data => {
        // Append the new id to the DOM
        document.body.innerHTML += `<p>${data.id}</p>`;
      })
      .catch(error => {
        // Append the error message to the DOM
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }
  
  // Test the submitData function
  submitData('John Doe', 'john@example.com');
  


  