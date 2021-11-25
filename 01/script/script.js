id = prompt("ID :");
if (id == "admin") {
  password = prompt("Password");
  if (password == "123456") {
    location.href = "20_login.html";
  } else {
    location.href = "20_error.html";
  }
} else {
  location.href = "20_error.html";
}
