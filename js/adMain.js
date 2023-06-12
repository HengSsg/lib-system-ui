
fetch("../data/status.json")
  .then(response => response.json())
  .then(data => {
    document.getElementsByClassName("nowValue")[0].innerText = data.now;
    document.getElementsByClassName("readyValue")[0].innerText = data.ready;
    document.getElementsByClassName("rentValue")[0].innerText = data.rent;
    document.getElementsByClassName("reserveValue")[0].innerText = data.reserve;
    document.getElementsByClassName("returnValue")[0].innerText = data.return
    document.getElementsByClassName("notreturnValue")[0].innerText = data.notreturn;        
  })
  .catch(error => console.error("Error:", error));