async function fetchUser() {
  try {
    // Wait for the server to respond
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    // Check if the server returned a 200 OK
    if (!response.ok) throw new Error("User not found");
    else console.log(response);
    // Convert bits to JS Object
    const userData = await response.json();
    console.log(userData);
    console.log(userData.name);
  } catch (err) {
    console.log("Fetch Error:", err);
  }
}

async function createUser() {
  const newUser = { name: "Jane Doe", job: "Developer" };
  const response = await fetch("https://example.com/api/users", {
    method: "POST", // Specify the verb
    headers: {
      "Content-Type": "application/json", // Tell server we're sending JSON
    },
    body: JSON.stringify(newUser), // Turn the JS object into a string
  });

  const result = await response.json();
  // console.log("Success:", result);
}

//fetchUser();
createUser();
