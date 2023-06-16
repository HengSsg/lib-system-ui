// script.js 파일의 내용
let user;
document.getElementById("searchBtn").addEventListener("click", fetchJquery);

document.getElementById("ReturnBtn").addEventListener("click", function () {
  let checkedData = [];
  console.log("hwllo");

  let checks = document.querySelectorAll("input[type='checkbox']:checked");
  checks.forEach(function (check) {
    checkedData.push(check.value);
  });

  // 처리된 출력
  console.log(checkedData);
  alert("선택한 데이터: " + checkedData.join(", "));
});

function fetchLocal() {
  fetch("../data/rent.json")
    .then((response) => response.json())
    .then((data) => {
      let id = document.getElementById("searchID").value;

      for (let i = 0; i < data.userData.length; i++) {
        let userInfo = data.userData[i];
        if (userInfo.id == parseInt(id)) {
          user = userInfo;
        }
      }

      if (user != undefined) {
        // id값이 해당하는 것이 있으면 실행
        document.getElementById("name").textContent = user.name;
        document.getElementById("ID").textContent = user.id;
        document.getElementById("rentNum").textContent = user.rentNum;
        document.getElementById("status").textContent = user.status;
        document.querySelector(".searchBook").value = "";

        var bookContainer = document.getElementById("bookData");

        for (let i = 0; i < user.bookData.length; i++) {
          // innerHtml로 바꾸기
          let name = user.bookData[i].name;
          let author = user.bookData[i].author;
          let publisher = user.bookData[i].publisher;
          let rentDate = user.bookData[i].rentDate;
          let returnDate = user.bookData[i].returnDate;

          bookContainer.innerHTML += `
          <div>
            <div class="RbookContents">
              <div>
                <input type="checkbox" name="color" value="${name}" class="check"/>
              </div>
              <div>
                <img src="../image/img0${i + 1}.jpg" class="Imageclass" />
              </div>
              <div class="RbookInfo">
                <div>
                  <p>도서명: ${name}</p>
                  <p>저자명: ${author}</p>
                  <p>출판사: ${publisher}</p>
                </div>
              </div>
              <div class="RbookInfo2">
                <div>
                  <p>대출 일자: ${rentDate}</p>
                  <p>반납예정일: ${returnDate}</p>
                </div>
              </div>
            </div>
          </div>`;
        }
      }
    })
    .catch((error) => console.log(error));
}

function fetchJquery() {
  $(document).ready(function () {
    $("#searchBtn").click(function () {
      $.getJSON("rent.json", function (data) {
        let id = document.getElementById("searchID").value;

        console.log(user);
        for (let i = 0; i < data.userData.length; i++) {
          let userInfo = data.userData[i];
          if (userInfo.id == parseInt(id)) {
            user = userInfo;
          }
        }

        if (user != undefined) {
          // id값이 해당하는 것이 있으면 실행
          document.getElementById("name").textContent = user.name;
          document.getElementById("ID").textContent = user.id;
          document.getElementById("rentNum").textContent = user.rentNum;
          document.getElementById("status").textContent = user.status;
          document.querySelector(".searchBook").value = "";

          var bookContainer = document.getElementById("bookData");

          bookContainer.innerHTML = ""; // 초기화
          for (let i = 0; i < user.bookData.length; i++) {
            // innerHtml로 바꾸기
            let name = user.bookData[i].name;
            let author = user.bookData[i].author;
            let publisher = user.bookData[i].publisher;
            let rentDate = user.bookData[i].rentDate;
            let returnDate = user.bookData[i].returnDate;

            bookContainer.innerHTML += `
            <div>
              <div class="RbookContents">
                <div>
                  <input type="checkbox" name="color" value="${name}" class="check"/>
                </div>
                <div>
                  <img src="../image/img0${i + 1}.jpg" class="Imageclass" />
                </div>
                <div class="RbookInfo">
                  <div>
                    <p>도서명: ${name}</p>
                    <p>저자명: ${author}</p>
                    <p>출판사: ${publisher}</p>
                  </div>
                </div>
                <div class="RbookInfo2">
                  <div>
                    <p>대출 일자: ${rentDate}</p>
                    <p>반납예정일: ${returnDate}</p>
                  </div>
                </div>
              </div>
            </div>`;
          }
        }
      });
    });
  });
}
