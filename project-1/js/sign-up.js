let userList = JSON.parse(localStorage.getItem("userList")) || [];
console.log(userList);

let signupForm = document.getElementById("sign-up-form");

signupForm.onsubmit = function (event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const numberRegex = /[0-9]/;
  const capitalRegex = /[A-Z]/;
  const letterRegex = /[a-z]/;

  let emailError = "";
  let passwordError = "";
  let usernameError = "";

  if (email === "") {
    emailError = "Email khong duoc bo trong !!!";
  } else if (emailRegex.test(email) === false) {
    emailError = "Email khong dung dinh dang!!!";
  } else {
    emailError = "";
  }
  if (username === "") {
    usernameError = "User name ko duoc bo trong!!!";
  } else {
    usernameError = "";
  }

  if (password == "") {
    passwordError = "Password ko duoc bo trong";
  } else if (password.length < 8) {
    passwordError = "Password fai co do dai it nhat 8 ky tu";
  } else if (numberRegex.test(password) === false) {
    passwordError = "Password fai co it nhat 1 so trong do";
  } else if (capitalRegex.test(password) === false) {
    passwordError = "Password fai co it nhat 1 CHU IN HOA";
  } else if (letterRegex.test(password) === false) {
    passwordError = "Password fai co it nhat 1 chu in thuong";
  } else {
    passwordError = "";
  }
  if (emailError === "" && usernameError === "" && passwordError === "") {
    let newUser = {
      usercode: `U${userList.length + 1}`,
      username: username,
      email: email,
      password: password,
      role: "user",
      birthday: "2007-01-01",
      status: "Active",
      description: "",
    };

    userList.unshift(newUser);
    localStorage.setItem("userList", JSON.stringify(userList));
    Swal.fire({
      title: "ĐĂNG KÝ THÀNH CÔNG!",
      icon: "success",
      draggable: true,
    }).then(
      () => (window.location.href = "http://127.0.0.1:5500/pages/sign-in.html ")
    );
  } else {
    Swal.fire({
      icon: "error",
      title: "Hình như có j đó sai sai...",
      html: `
      <div> ${emailError}</div>
      <div>${passwordError} </div>
      <div> ${usernameError}</div> `,
    });
  }
};
