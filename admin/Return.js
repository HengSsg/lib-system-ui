document.getElementById("searchBtn").addEventListener("click", function() {
    fetch("../data/return.json")
        .then((response)=> response.json())
        .then((data) => {
            var searchID = document.querySelector(".searchBook").value;

            for(let i=0; i<data.userData.length; i++) {
                var user = data.userData[i];
                if(user.id === searchID) {
                    var userName = user.name;
                    var userID = user.id;
                    var userRentNum = user.rentNum;
                    var userStatus = user.status;

                    document.getElementById("name").textContent = userName;
                    document.getElementById("ID").textContent = userID;
                    document.getElementById("returnNum").textContent = userRentNum;
                    document.getElementById("status").textContent = userStatus;

                    break;
                }
            }

            for(let i=0; i<data.bookData.length; i++) {
                var bookContainer = document.getElementById("bookData");

                var divRbookContents = document.createElement("div");
                divRbookContents.classList.add("RbookContents");
        
                var divCheckbox = document.createElement("div");
                var checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("name", "color");
                checkbox.setAttribute("value", "blue");
                divCheckbox.appendChild(checkbox);
        
                var divImage = document.createElement("div");
                var image = document.createElement("img");
                image.setAttribute("src", "../image/img0" + ((i % 3) + 1) + ".jpg");
                image.classList.add("Imageclass");
                divImage.appendChild(image);
        
                var divRbookInfo = document.createElement("div");
                divRbookInfo.classList.add("RbookInfo");
                var divInfoInner = document.createElement("div");
                var p1 = document.createElement("p");
                p1.textContent = "도서명: " + data.bookData[i].name;
                var p2 = document.createElement("p");
                p2.textContent = `저자명: ${data.bookData[i].author}`;
                var p3 = document.createElement("p");
                p3.textContent = `출판사: ${data.bookData[i].publisher}`;
                divInfoInner.appendChild(p1);
                divInfoInner.appendChild(p2);
                divInfoInner.appendChild(p3);
                divRbookInfo.appendChild(divInfoInner);
        
                var divRbookInfo2 = document.createElement("div");
                divRbookInfo2.classList.add("RbookInfo2");
                var divInfo2Inner = document.createElement("div");
                var p4 = document.createElement("p");
                p4.textContent = `대출 일자: ${data.bookData[i % 10].rentDate}`;
                var p5 = document.createElement("p");
                p5.textContent = `반납예정일: ${data.bookData[i % 10].returnDate}`;
                divInfo2Inner.appendChild(p4);
                divInfo2Inner.appendChild(p5);
                divRbookInfo2.appendChild(divInfo2Inner);
        
                divRbookContents.appendChild(divCheckbox);
                divRbookContents.appendChild(divImage);
                divRbookContents.appendChild(divRbookInfo);
                divRbookContents.appendChild(divRbookInfo2);
        
                bookContainer.appendChild(divRbookContents);
              }
            })
            .catch((error) => console.log(error));
        });
        