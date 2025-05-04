const firstButton = document.getElementById("firstButton");
const firstText = document.getElementById("firstText");
const secondButton = document.getElementById("secondButton");
const secondText = document.getElementById("secondText");
const thirdButton = document.getElementById("thirdButton");
const thirdText = document.getElementById("thirdText");
const fourthButton = document.getElementById("fourthButton");
const fourthText = document.getElementById("fourthText");
const fifthButton = document.getElementById("fifthButton");
const fifthText = document.getElementById("fifthText");
const sixthButton = document.getElementById("sixthButton");
const sixthText = document.getElementById("sixthText");
const seventhButton = document.getElementById("seventhButton");
const seventhText = document.getElementById("seventhText");
const eightButton = document.getElementById("eightButton");
const eightText = document.getElementById("eightText");
const ninthButton = document.getElementById("ninthButton");
const ninthText = document.getElementById("ninthText");

secondText.style.display = "none";
thirdText.style.display = "none";
fourthText.style.display = "none";
fifthText.style.display = "none";
sixthText.style.display = "none";
seventhText.style.display = "none";
eightText.style.display = "none";
ninthText.style.display = "none";

firstButton.addEventListener("click", event => {
   
    // ----- DISPLAY -----
    if(firstText.style.display === "none"){
        firstText.style.display = "block";
        secondText.style.display = "none";
        thirdText.style.display = "none";
        fourthText.style.display = "none";
        fifthText.style.display = "none";
        sixthText.style.display = "none";
        seventhText.style.display = "none";
        eightText.style.display = "none";
        ninthText.style.display = "none";
    }
    // else{
    //     firstText.style.display = "none";
    // }
});

secondButton.addEventListener("click", event => {
   
    // ----- DISPLAY -----
    if(secondText.style.display === "none"){
        firstText.style.display = "none";
        secondText.style.display = "block";
        thirdText.style.display = "none";
        fourthText.style.display = "none";
        fifthText.style.display = "none";
        sixthText.style.display = "none";
        seventhText.style.display = "none";
        eightText.style.display = "none";
        ninthText.style.display = "none";
    }
    // else{
    //     firstText.style.display = "none";
    // }
});

thirdButton.addEventListener("click", event => {
   
    // ----- DISPLAY -----
    if(thirdText.style.display === "none"){
        firstText.style.display = "none";
        secondText.style.display = "none";
        thirdText.style.display = "block";
        fourthText.style.display = "none";
        fifthText.style.display = "none";
        sixthText.style.display = "none";
        seventhText.style.display = "none";
        eightText.style.display = "none";
        ninthText.style.display = "none";
    }
    // else{
    //     firstText.style.display = "none";
    // }
});

fourthButton.addEventListener("click", event => {
   
    // ----- DISPLAY -----
    if(fourthText.style.display === "none"){
        firstText.style.display = "none";
        secondText.style.display = "none";
        thirdText.style.display = "none";
        fourthText.style.display = "block";
        fifthText.style.display = "none";
        sixthText.style.display = "none";
        seventhText.style.display = "none";
        eightText.style.display = "none";
        ninthText.style.display = "none";
    }
    // else{
    //     firstText.style.display = "none";
    // }
});

fifthButton.addEventListener("click", event => {
   
    // ----- DISPLAY -----
    if(fifthText.style.display === "none"){
        firstText.style.display = "none";
        secondText.style.display = "none";
        thirdText.style.display = "none";
        fourthText.style.display = "none";
        fifthText.style.display = "block";
        sixthText.style.display = "none";
        seventhText.style.display = "none";
        eightText.style.display = "none";
        ninthText.style.display = "none";
    }
    // else{
    //     firstText.style.display = "none";
    // }
});

sixthButton.addEventListener("click", event => {
   
    // ----- DISPLAY -----
    if(sixthText.style.display === "none"){
        firstText.style.display = "none";
        secondText.style.display = "none";
        thirdText.style.display = "none";
        fourthText.style.display = "none";
        fifthText.style.display = "none";
        sixthText.style.display = "block";
        seventhText.style.display = "none";
        eightText.style.display = "none";
        ninthText.style.display = "none";
    }
    // else{
    //     firstText.style.display = "none";
    // }
});

seventhButton.addEventListener("click", event => {
   
    // ----- DISPLAY -----
    if(seventhText.style.display === "none"){
        firstText.style.display = "none";
        secondText.style.display = "none";
        thirdText.style.display = "none";
        fourthText.style.display = "none";
        fifthText.style.display = "none";
        sixthText.style.display = "none";
        seventhText.style.display = "block";
        eightText.style.display = "none";
        ninthText.style.display = "none";
    }
    // else{
    //     firstText.style.display = "none";
    // }
});

eightButton.addEventListener("click", event => {
   
    // ----- DISPLAY -----
    if(eightText.style.display === "none"){
        firstText.style.display = "none";
        secondText.style.display = "none";
        thirdText.style.display = "none";
        fourthText.style.display = "none";
        fifthText.style.display = "none";
        sixthText.style.display = "none";
        seventhText.style.display = "none";
        eightText.style.display = "block";
        ninthText.style.display = "none";
    }
    // else{
    //     firstText.style.display = "none";
    // }
});

ninthButton.addEventListener("click", event => {
   
    // ----- DISPLAY -----
    if(ninthText.style.display === "none"){
        firstText.style.display = "none";
        secondText.style.display = "none";
        thirdText.style.display = "none";
        fourthText.style.display = "none";
        fifthText.style.display = "none";
        sixthText.style.display = "none";
        seventhText.style.display = "none";
        eightText.style.display = "none";
        ninthText.style.display = "block";
    }
    // else{
    //     firstText.style.display = "none";
    // }
});

