let userData;
fetch("../data/login.json")
.then((res) => res.json())
.then((res)=>{
    userData = res.user;
})
.catch(error => console.error("Error:", error));

function clickHandle() {
    let userId = document.getElementById("userId").value;
    let userPw = document.getElementById("userpwd").value;
    let flag = 0;
    let auth = 0;
    for (let i = 0; i < userData.length; i++) {
        if(userData[i].id == userId){
            if(userData[i].password == userPw){
                flag++;
                if(userData[i].authYn == 1){
                    auth++;
                }
            }
        }
    }
    if(flag > 0){
        if(auth > 0){
            window.location.href = "./adMain.html";
        }else{
            window.location.href = "../user/Main.html";
        }
    }else{
        alert("아이디, 패스워드가 틀렸습니다.");
    }
};