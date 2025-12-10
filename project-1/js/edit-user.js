//Validate họ và tên không được để trống (Trang edit user)
//Validate email không được để trống (Trang edit user)
//Validate email phải đúng định dạng (Trang edit user)
//Validate mật khẩu không được để trống (Trang edit user)
//Validate mật khẩu tối thiểu 8 ký tự (Trang edit user)
//User code phải được tự động sinh ra là một đại lượng unique (độc nhất) (Trang edit user)
//Validate username không được để trống (Trang edit user)
//Tính năng save thông tin cập nhật của user (Trang edit user)
//Tính năng điều hướng quay lại trang user management (Trang edit user)
let userList = JSON.parse(localStorage.getItem("userList")) || [];
console.log(userList);

let editUserForm = document.getElementById("edit-user-form");
let indexUpdate = JSON.parse(localStorage.getItem("indexUpdate"));
document.getElementById("email").value = userList[indexUpdate].email || "";
document.getElementById("password").value =
  userList[indexUpdate].password || "";
document.getElementById("username").value =
  userList[indexUpdate].username || "";
document.getElementById("user-code").value =
  userList[indexUpdate].userCode || "";
document.getElementById("dob").value = userList[indexUpdate].dob || "";
editUserForm.onsubmit = function (event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let save = document.getElementsByClassName("form-btn save-btn").value;
  let back = document.getElementsByClassName("form-btn back-btn").value;
  let emailInput = document.getElementsByClassName("input-element").value;
  let role = document.getElementById("role").value;
  let dob = document.getElementById("dob").value;
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
    emailError = "Email phai dung dinh dang!!!";
  } else {
    emailError = "";
  }
  if (username === "") {
    usernameError = "user name ko duoc bo trong!!!";
  } else {
    usernameError = "";
  }

  if (password == "") {
    passwordError = "password ko duoc bo trong";
  } else if (password.length < 8) {
    passwordError = "password fai co do dai it nhat 8 ky tu";
    //   } else if (numberRegex.test(password) === false) {
    //     passwordError = "password fai co it nhat 1 so trong do";
    //   } else if (capitalRegex.test(password) === false) {
    //     passwordError = "password fai co it nhat 1 CHU IN HOA";
    //   } else if (letterRegex.test(password) === false) {
    //     passwordError = "password fai co it nhat 1 chu in thuong";
  } else {
    passwordError = "";
  }
  if (emailError === "" && usernameError === "" && passwordError === "") {
    // let newUser = {
    //   userCode: `U${userList.length + 1}`,
    //   username: username,
    //   email: email,
    //   password: password,
    // };

    // userList.unshift(newUser);
    userList[indexUpdate].email = email;
    userList[indexUpdate].username = username;
    userList[indexUpdate].password = password;
    userList[indexUpdate].dob = dob;
    userList[indexUpdate].role = role;

    localStorage.setItem("userList", JSON.stringify(userList));
    Swal.fire({
      title: "Cập nhật thành công!",
      icon: "success",
      draggable: true,
    }).then(
      () =>
        (window.location.href = "http://127.0.0.1:5500/pages/dashboard.html ")
    );
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      html: `
      <div> ${emailError}</div>
      <div>${passwordError} </div>
      <div> ${usernameError}</div> `,
    });
  }
};
