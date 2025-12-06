//validate gia tri nguoi dung
// 1. dien thong tin
//  ko hop le- > thong bao
// hơp le -> thong bao thanh cong
// chuyen sag trang dang nhap -> neu co tai khoan cho sang dang
//2. xu ly thong tin nguoi dung
//validate du lieu
//neu thanh cong thi sang dang nhap
// neu ko thah cong thi bao loi

// console.log("hello");

//B1:truy van the html sang js va gan su kien
let form = document.getElementById("sign-up-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("ha ha");// CHO NAY KO AN ????////
  //B2: validate du lieu
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  //   console.log(email, username, password);
  //validate email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   debugger;
  if (emailRegex.test(email)) {
    console.log("email hop le");
  } else {
    alert("email ko hop le");
  }
  const usernameRegex = /^[a-zA-Z0-9_]{5,20}$/;

  const passReg =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,15}$";

  //B3: neu ko thanh cong thi bao loi
  //B4:neu thanh cong thi sang dang nhap
});
