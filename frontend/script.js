fetch("http://localhost:3000/test")
  .then(res => res.json())
  .then(data => {
    console.log("TEST endpoint:", data);
  })
  .catch(err => console.error(err));

  fetch("http://localhost:3000/users")
  .then(res => res.json())
  .then(data => {
    console.log("Users:", data);
    // If you want to display them on the page:
    const container = document.getElementById("users");
    container.innerHTML = "";
    data.forEach(user => {
      const item = document.createElement("div");
      item.textContent = `${user.id} – ${JSON.stringify(user)}`;
      container.appendChild(item);
    });
  })
  .catch(err => console.error(err));
