document.getElementById("feedbackForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const res = await fetch("/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message })
  });

  if (res.ok) alert("Feedback sent!");
  else alert("Error sending feedback.");
});