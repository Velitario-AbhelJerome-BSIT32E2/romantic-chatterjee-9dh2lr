document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
  });

document.getElementById("hobbiesButton").addEventListener("click", function () {
  alert(
    "My hobbies include:\n- Playing MobileGames\n- Playing Basketball\n- Listening to Music\n- Sleeping"
  );
});
