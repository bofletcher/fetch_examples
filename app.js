
// // Basic blueprint
// fecth(url)
//   .then(response.something) // Define response type (JSON, Headers, Status codes)
//   .then(data) // get the response type 

// // Practical example
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(data => console.log(JSON.stringify(data)))




// Get user with id 2
fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(response => response.json())
  .then(data => console.log(data))



  
// Get all users
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data))



// Create a new user
fetch('https://jsonplaceholder.typicode.com/users', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
    username: 'Elon Musk',
    email: 'elonmusk@gmail.com',
  })
})


// Delete user
fetch('https://jsonplaceholder.typicode.com/users/1', { 
  method: 'DELETE' 
}); 


// Update user with id 3
fetch('https://jsonplaceholder.typicode.com/users/3', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'PUT',
  body: JSON.stringify({
    username: 'Elon Musk',
    email: 'elonmusk@gmail.com',
  })
})