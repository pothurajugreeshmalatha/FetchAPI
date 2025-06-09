const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');
const errorMessage = document.getElementById('errorMessage');

async function fetchUsers() {
  userContainer.innerHTML = '';
  errorMessage.textContent = '';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error("Failed to fetch user data");

    const users = await response.json();

    users.forEach(user => {
      const div = document.createElement('div');
      div.className = 'user-card';
      div.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      userContainer.appendChild(div);
    });
  } catch (err) {
    errorMessage.textContent = "Error loading user data. Please check your internet connection.";
    console.error(err);
  }
}

reloadBtn.addEventListener('click', fetchUsers);

// Fetch on initial load
fetchUsers();