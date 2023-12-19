const display = document.getElementById("_status");
const body = document.body;
const submit = document.getElementById("_submit");
const refresh = document.getElementById("_refresh");
const char = "sidou";
let captcha = "";

body.onload = function generateCaptcha() {
  const captchalength = 6;
  for (let i = 0; i < captchalength; i++) {
    const randomIndex = Math.floor(Math.random() * char.length);
    captcha += char.substring(randomIndex, randomIndex + 1);
  }
  document.getElementById("_generator").value = captcha;
  display.innerText = "Captcha Generator";
};

submit.onclick = function checkinput() {
    const input = document.getElementById("_client-text").value;
    if(input === ""){
        display.innerText = "Please enter the text shoxn below";
    }else if(input=== captcha){
        display.innerText = "Matched";
    }else{
        display.innerText = "Not Matched";
    }
};

refresh.onclick = function refreshcaptcha() {
    let newCaptcha = "";
    for(let i = 0 ; i< captcha.length;i++){
        const randomChar = char[Math.floor(Math.random() * char.length)];
        newCaptcha += randomChar;
    }
    captcha = newCaptcha;
    document.getElementById("_generator").value = captcha;
  display.innerText = "Captcha Generator";
};
