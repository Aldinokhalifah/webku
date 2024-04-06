function login(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if (username === ("aldinokhalifah","Qich") && password === "siswa-nf23") {
        window.location.href = "#.html";  //kasih nama file yg mau dipake//

    } else {
     alert("Username dan password yang Anda masukkan tidak valid");
    }   
    
 }   
