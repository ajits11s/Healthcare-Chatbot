const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Switch to sign-up mode
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

// Switch to sign-in mode
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Signup form logic
document.querySelector(".sign-up-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.querySelector(".sign-up-form input[placeholder='Username']").value.trim();
  const password = document.querySelector(".sign-up-form input[placeholder='Password']").value.trim();

  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  if (localStorage.getItem(username)) {
    alert("Username already exists!");
    return;
  }

  localStorage.setItem(username, password);
  alert("Signup successful! Please log in.");
  container.classList.remove("sign-up-mode"); // Go back to sign-in mode
});

// Login form logic
document.querySelector(".sign-in-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.querySelector(".sign-in-form input[placeholder='Username']").value.trim();
  const password = document.querySelector(".sign-in-form input[placeholder='Password']").value.trim();
  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    alert("Login successful!");
    
    // Optionally save login session
    localStorage.setItem("loggedInUser", username);

    // Redirect to Main.html
    window.location.href = "Main.html";
  } else {
    alert("Invalid username or password.");
  }
});
