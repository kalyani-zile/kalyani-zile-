document.getElementById("studentForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const student = {
    name: document.getElementById("name").value,
    id: document.getElementById("studentId").value,
    branch: document.getElementById("branch").value,
    percentage: document.getElementById("percentage").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value
  };

  const response = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  });

  const data = await response.json();

  document.getElementById("message").innerText = data.message;
});
