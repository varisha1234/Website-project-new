//Button event Listener
document.getElementById("check-btn").addEventListener("click", btnClicked);

function btnClicked(){
    //Input
    let ans1 = document.getElementById("ans1").value.toLowercase();
    console.log(ans1);
    let ans2 = document.getElementById("ans2").value.toLowercase();
    console.log(ans2);
    let ans3 = document.getElementById("ans3").value.toLowercase();
    console.log(ans3);
    let ans4 = document.getElementById("ans4").value.toLowercase();
    console.log(ans4);
    let ans5 = document.getElementById("ans5").value.toLowercase();
    console.log(ans5);
    let correct=0;
    //Check Answer
    
     {
        document.getElementById("name-in").style.bordercolor = "green";
    }

    if (ans1 === "5") {
        correct++;
        document.getElementById("ans1").style.bordercolor = "green";
        document.getElementById("quote1").innerHTML = "Correct. Nice Job!"
    } else {
        document.getElementById("ans1").style.bordercolor = "red";
        document.getElementById("ans1").innerHTML = "Incorrect. The Correct Answer is 5"
    }
    if (ans2 === "When you carry the ball and don't dribble in a game") {
        correct++;
        document.getElementById("ans2").style.bordercolor = "green";
        document.getElementById("quote2").innerHTML = "Correct. Good job!"
    } else {
        document.getElementById("ans2").style.bordercolor = "red";
        document.getElementById("ans2").innerHTML = "Incorrect. The Correct Answer is When you carry the ball and don't dribble in a game"
    }
    if (ans3 === "5") {
        correct++;
        document.getElementById("ans3").style.bordercolor = "green";
        document.getElementById("quote3").innerHTML = "Correct. Nice!"
    } else {
        document.getElementById("ans3").style.bordercolor = "red";
        document.getElementById("ans3").innerHTML = "Incorrect. The Correct Answer is 5"
    }
    if (ans4 === "no") {
        correct++;
        document.getElementById("ans4").style.bordercolor = "green";
        document.getElementById("quote4").innerHTML = "Correct. Great!"
    } else {
        document.getElementById("ans4").style.bordercolor = "red";
        document.getElementById("ans4").innerHTML = "Incorrect. The Correct Answer is no"
    }
    if (ans5 === "3") {
        correct++;
        document.getElementById("ans5").style.bordercolor = "green";
        document.getElementById("quote5").innerHTML = "Correct. Wow!"
    } else {
        document.getElementById("ans5").style.bordercolor = "red";
        document.getElementById("ans5").innerHTML = "Incorrect. The Correct Answer is 3"
    }
document.getElementById("out-score").innerHTML = correct;
document.getElementById("percent-score").innerHTML = (correct / 4) * 100;

if (correct <= 2) {
    document.getElementsById("output"); 
}
if (correcct > 2 && correct <3) {
    document.getElementsById("output");
}
if (correct === 4) {
    document.getElementsById("output");
}
}






