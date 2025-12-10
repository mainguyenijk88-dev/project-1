let userList = JSON.parse(localStorage.getItem("userList")) || [];
let form = document.getElementById("add-new-user-form");
form.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let userCode = document.getElementById("user-code").value;
    console.log(username);
    let form = document.getElementById("add-new-user-form");

    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;
    let dob = document.getElementById("dob").value;
    let description = document.getElementById("description");

    let active = document.getElementById("status-active");
    let deactive = document.getElementById("status-deactive");
    let userError = document.getElementById("input-elementError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let dobError = document.getElementById("dobError");
    let statusError = document.getElementById("statusError");
    let addError = document.getElementById("add-errorError");
    let inputElementError = document.getElementById("input-elementError");
    let addBtn = document.getElementById("add-btn");

    form.onsubmit = function (event) {
      event.preventDefault();
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    emailError.innerText = "";
    passwordError.innerText = "";
    userCode.innerText = "";
    dobError.innerText = "";
    userError.innerText = "";

    let isValid = true;
    if (email === "") {
      emailError.innerText = "Email khong duoc bo trong !!!";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      isValid = false;
      emailError.innerText = "Email khong dung dinh dang!";
    }
    const usernameRegex = /^[a-zA-Z0-9._-]{3,30}$/;

    // validate username
    if (username === "") {
      userError.innerText = "Username khong duoc bo trong !!!";
      isValid = false;
    } else if (!usernameRegex.test(username)) {
      userError.innerText = "Username khong dung dinh dang!";
      isValid = false;
    }
    // validate password
    const passReg1 = /^.{8,}$/; // mat khau co toi thieu 8ky tu
    // const passReg2 = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/; // mat khau co it nat 8 ky tu va chu thuong va so
    // const passReg3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // mat khau 8 ky tu, chu in hoa + chu thuong va so
    if (password === "") {
      passwordError.innerText = "Password khong duoc bo trong !!!";
      isValid = false;
    } else if (!passReg1.test(password)) {
      passwordError.innerText = " Password phai co it nhat 8 ky tu!";
      isValid = false;
    }
    if (dob.trim() === "") {
      dobError.innerText = "Date of birth khong duoc bo trong !!!";
      isValid = false;
      console.log(dobError.innerText);
    }

    //B3: neu ko thanh cong thi bao loi
    if (isValid) {
      //tk dang ky thanh cong
      //1. tao bien luu tru cac gia tri ma ng dung dang ky

      let newUser = {
        userCode: `U${userList.length + 1}`,
        username: username,
        email: email,
        password: password,
        role: role,
        birthday: dob,
        status: active.value ? active.value : deactive.value,
        description: description.value,
      };
      console.log(newUser);
      userList.unshift(newUser);

      //2. them no vao trong mang chua cac user da dawng ky

      // dua du lieu len local truoc khi lay ve o dong 1
      localStorage.setItem("userList", JSON.stringify(userList));

      //3.thong bao va chuyen sag trang dang nhap
      Swal.fire({
        title: "ĐĂNG KÝ THÀNH CÔNG!",
        icon: "success",
        draggable: true,
      }).then(() => {
        window.location.href = "http://127.0.0.1:5500/pages/dashboard.html ";
      });
    }
  }

  //B4:neu thanh cong thi sang dang nhap
);
