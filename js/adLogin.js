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
        console.log("🍒for문 들어옴");
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
        console.log("🍒flag 들어옴");
        if(auth > 0){
            console.log("auth");
            window.location.href = "./adMain.html";
        }else{
            console.log("user");
            console.log("123444");
            //window.location.href = "../user/Main.html";
            window.location.href = "http://127.0.0.1:5500/lib-system-ui/admin/adMain.html";
            //window.location.href = "/";
            //page.setAttribute("href", "http://127.0.0.1:5500/lib-system-ui/admin/adMain.html")
            console.log(window.location.href);
            console.log("stop")
        }
    }else{
        alert("아이디, 패스워드가 틀렸습니다.");
    }
    console.log(userData);
};

/*
document.getElementById("loginbtn").addEventListener("click", function () {
    fetch("../db/login.json")
    .then((res) => res.json())
    .then((res)=>{
        console.log(res);
        let userId = document.getElementById("userId").value;
        let userPw =document.getElementById("userpwd").value;
        let flag = 0;
        let auth = 0;
        for (let i = 0; i < res.user.length; i++) {
            console.log("🍒for문 들어옴");
            if(res.user[i].id == userId){
                if(res.user[i].password == userPw){
                    flag++;
                    if(res.user[i].authYn == 1){
                        auth++;
                    }
                }
            }
        }
        if(flag > 0){
            let page = document.getElementById("pageGubun");
            console.log("🍒flag 들어옴");
            if(auth > 0){
                page.setAttribute("href", "./adMain.html");
                console.log("auth");
            }else{
                window.location.href = "../user/Main.html";
                console.log("user");
            }
        }else{
            alert("아이디, 패스워드가 틀렸습니다.");
        }
        console.log(res.user);
    })
    .catch(error => console.error("Error:", error));
});
*/