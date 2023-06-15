let userData;
fetch("user.json")
.then((res) => res.json())
.then((res)=>{
    userData = res.user;
})
.catch(error => console.error("Error:", error));

function init(){
    
    //존재하는 아이디인지 체크
    document.getElementsByName("id")[0].addEventListener("change", function(e){
        let inId = document.getElementsByName("id")[0];
        let inChk = document.getElementsByName("validatChk")[0];
        let flag = false;
        for (let i = 0; i < userData.length; i++) {
            if(userData[i].id == inId.value){
                flag = true;
            }
        }
        if(inId.value != ""){
            if(flag){
                inId.style.cssText = "border: 1px solid red;";
                inChk.style.cssText = "visibility: visible;";
            }else{
                inId.style.cssText = "border: 1px solid green;";
                inChk.style.cssText = "visibility: hidden;";
            }
        }else{
            inId.style.cssText = "border: 1px solid lightgray;";
            inChk.style.cssText = "visibility: hidden;";
        }
    });

    //비밀번호 체크
    document.getElementsByName("passwordCk")[0].addEventListener("input", function(e){
        let inPw = document.getElementsByName("password")[0].value;
        let inPwChk = document.getElementsByName("passwordCk")[0];
        let validatChk = document.getElementsByName("validatChk")[1];
        console.log("1231");
        console.log(inPw);

        if(inPw != ""){
            if(inPw != e.target.value){
                inPwChk.style.cssText = "border: 1px solid red;";
                validatChk.style.cssText = "visibility: visible;";
            }else{
                inPwChk.style.cssText = "border: 1px solid green;";
                validatChk.style.cssText = "visibility: hidden;";
            }
        }else{
            inPwChk.style.cssText = "border: 1px solid lightgray;";
            validatChk.style.cssText = "visibility: hidden;";
        }
    });

    //이메일 체크
    document.getElementsByName("email")[0].addEventListener("change", function(e){
        let inEmail = document.getElementsByName("email")[0];
        let validatChk = document.getElementsByName("validatChk")[2];
        const emailchk = /^[0-9a-zA-Z]([-_.@]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(inEmail.value != ""){
            if(emailchk.test(inEmail.value)){
                inEmail.style.cssText = "border: 1px solid green;";
                validatChk.style.cssText = "visibility: hidden;"  
            }else{
                inEmail.style.cssText = "border: 1px solid red;";
                validatChk.style.cssText = "visibility: visible;"
            }
        }else{
            inEmail.style.cssText = "border: 1px solid lightgray;";
                validatChk.style.cssText = "visibility: hidden;"
        }
    });

   
    //전화번호 체크
    document.getElementsByName("phone")[0].addEventListener("input", function () {
        const phoneNumber = this.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
        const formattedPhoneNumber = formatPhoneNumber(phoneNumber); // 전화번호에 - 추가
      
        this.value = formattedPhoneNumber;
      });
      
      function formatPhoneNumber(phoneNumber) {
        if (phoneNumber.length < 4) {
          return phoneNumber;
        } else if (phoneNumber.length < 8) {
          return phoneNumber.slice(0, 3) + "-" + phoneNumber.slice(3);
        } else if (phoneNumber.length < 11) {
          return (
            phoneNumber.slice(0, 3) +
            "-" +
            phoneNumber.slice(3, 7) +
            "-" +
            phoneNumber.slice(7)
          );
        } else {
          return (
            phoneNumber.slice(0, 3) +
            "-" +
            phoneNumber.slice(3, 7) +
            "-" +
            phoneNumber.slice(7, 11)
          );
        }
      }

      //td눌렀을때 select 핸들링
      document.getElementsByName("chTd")[0].addEventListener("click", function(e){
        if(document.getElementById("chk1").checked){
            document.getElementById("chk1").checked = false;
            document.getElementById("chk2").checked = false;
            document.getElementById("chk3").checked = false;
        }else{
            document.getElementById("chk1").checked = true;
            document.getElementById("chk2").checked = true;
            document.getElementById("chk3").checked = true;
        }
      });
      document.getElementById("chkLabel").addEventListener("click", function(e){
        if(document.getElementById("chk1").checked){
            document.getElementById("chk2").checked = false;
            document.getElementById("chk3").checked = false;
        }else{
            document.getElementById("chk2").checked = true;
            document.getElementById("chk3").checked = true;
        }
      });
      document.getElementsByName("chTd")[1].addEventListener("click", function(e){
        if(document.getElementById("chk2").checked){
            document.getElementById("chk2").checked = false;
        }else{
            document.getElementById("chk2").checked = true;
        }
      });
      document.getElementsByName("chTd")[2].addEventListener("click", function(e){
        if(document.getElementById("chk3").checked){
            document.getElementById("chk3").checked = false;
        }else{
            document.getElementById("chk3").checked = true;
        }
      });
      
      document.getElementById("subBtn").addEventListener("submit", function(e){
        e.preventDefault();
        validation();
      });

      function manualValidate(ev) {
        ev.target.checkValidity();
        return false;
    }
    function validation(){
        if(document.getElementsByName("id")[0].trim() == ""){
            alert("아이디를 입력하세요");
            return;
        }else if(document.getElementsByName("password")[0].trim() == ""){
            alert("패스워드를 입력하세요");
            return;
        }
    }
}