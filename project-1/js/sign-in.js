let userList = JSON.parse(localStorage.getItem("userList")) || [];
let form = document.getElementById("sign-in-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  emailError = "";
  passwordError = "";
  if (email === "") {
    emailError = "Email khong duoc bo trong !!!";
  }
  if (password === "") {
    passwordError = "Password khong duoc bo trong !!!";
  }
  // console.log(password);

  let result = userList.find(
    (user) => email === user.email && password === user.password
  );

  console.log(result);
  if (!result) {
    Swal.fire({
      icon: "error",
      title: "Hình như có j đó sai sai...",
      html: `
      <div> ${emailError}</div>
      <div>${passwordError} </div>
      `,
    });
  } else {
    Swal.fire({
      title: "ĐĂNG NHẬP THÀNH CÔNG",
      icon: "success",
      draggable: true,
    }).then(() => {
      window.location.href = "http://127.0.0.1:5500/pages/dashboard.html ";
    });
  }
});
