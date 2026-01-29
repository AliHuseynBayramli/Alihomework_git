// first
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("Enter");
  }
});
// second
document.getElementById("btn").addEventListener("click", function () {
  const name = document.getElementById("username").value;
  const comment = document.getElementById("comment").value;

  console.log("Имя пользователя:", name);
  console.log("Комментарий:", comment);
});
// third
document.getElementById("loginBtn").addEventListener("click", function () {
  const password = document.getElementById("password").value;

  if (password.length > 5) {
    console.log("login successful");
  } else {
    console.log("login failed");
  }
});
