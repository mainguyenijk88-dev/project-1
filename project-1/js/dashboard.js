let userList = JSON.parse(localStorage.getItem("userList")) || [];
console.log(userList);

function renderUser() {
  let tbody = document.getElementById("table-body");

  tbody.innerHTML = "";

  userList.forEach((user) => {
    //tao the tr
    let tr = document.createElement("tr");
    // them du lieu cho the tr
    tr.innerHTML = `
                <td>${user.usercode}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>${user.birthday}</td>
                <td>
                <div class= "status-option  
                ${user.status === "Active" ? "active" : "deactive"}">${
      user.status
    }</div> 
                </td>
                <td><div class="action-buttons">
                <button id= ${user.userCode} class="btn-edit">Sửa</button>
                <button id= ${user.userCode} class="btn-delete">Xóa</button>
              </div></td>`;
    tbody.appendChild(tr);
  });
}
renderUser();

let tbody = document.getElementById("table-body");

const btn = document.querySelector(".btn-delete");

tbody.addEventListener("click", function (e) {
  // B4 Xóa

  if (e.target.classList.contains("btn-delete")) {
    let deleteID = e.target.id;
    console.log(deleteID);

    let index = userList.findIndex((user) => deleteID === user.usercode);

    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa ko ?",
      text: "Bạn sẽ không thể hoàn tác nếu xóa!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vâng, xóa đi!",
    }).then((result) => {
      if (result.isConfirmed && index >= 0) {
        userList.splice(index, 1);

        localStorage.setItem("userList", JSON.stringify(userList));
        renderUser();
        Swal.fire({
          title: "Xóa!",
          text: "Tệp đã được xóa",
          icon: "success",
        });
      }
    });
  }
  //B5 : sua

  if (e.target.classList.contains("btn-edit")) {
    let editID = e.target.id;
    console.log(editID);

    let editIndex = userList.findIndex((user) => editID === user.usercode);
    console.log(editIndex);

    localStorage.setItem("indexUpdate", JSON.stringify(editIndex));
    // userList.splice(index, 1);
    // window.location.href = "http://127.0.0.1:5500/pages/edit-user.html";
  }
});

// localStorage.email = "mainguyenijk88@gmail.com";
// localStorage.password = "123123Mai";
// localStorage.username = "mainguyen";
// localStorage.emailUser = JSON.stringify([
//   {
//     email: "mainguyenijk88@gmail.com",
//     username: "mainguyen",
//     password: "123123Mai",
//   },
// ]);
// console.log(JSON.parse(localStorage.emailUser));
// let emailUser = localStorage.getItem;
// ("emailUser");
// let email = localStorage.getItem;
// ("email");
// let username = localStorage.getItem;
// ("username");
// let password = localStorage.getItem;
// ("password");
// console.log(emailUser);
// console.log(email);
// console.log(username);
// console.log(password);
