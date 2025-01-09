function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_a9urrbq", "template_g035g9f", parms).then(alert("send email"))
}