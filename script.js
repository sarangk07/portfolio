function sentmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_7hzvfax";
    const templateID = "template_5y0fgm8";

    emailjs.send(serviceID,templateID,params)
    .then(res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Message sented!");
        })
    .catch(err => console.log(err));
}


