function greet(){
    console.log("app.js just started");
    alert("It's working");
    let userName = prompt("Enter your name");
    alert("Hello " + userName + "!")
    let pickANum = prompt("Pick a number");
    const numConvert = parseInt(pickANum);
    alert(`Your number squared equals: ${(numConvert**2)}`);
};

greet()



