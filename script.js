function showMore() {
    let linkText = document.getElementById("showmore");
    let aboutMe2 = document.getElementById("aboutme-2");

    if(aboutMe2.classList.contains("hidden")){
        aboutMe2.classList.remove("hidden");
        linkText.innerHTML = "Show less..."
    } else{
        aboutMe2.classList.add("hidden");
        linkText.innerHTML = "Show more..."
    }
}

function showMore2() {
    let linkText2 = document.getElementById("showmore2");
    let description2 = document.getElementById("description2");

    if(description2.classList.contains("hidden")){
        description2.classList.remove("hidden");
        linkText2.innerHTML = "Show less..."
    } else {
        description2.classList.add("hidden");
        linkText2.innterHTML = "Show more..."
    }
}

function quizResults() {
    let resultP = document.getElementById("results");
    let q1 = document.getElementById("html").value;
    let q2 = document.getElementById("if").value;
    let score = document.getElementById("score");

    if (q1 == "Hyper Text Meta Language"){
        resultP.innerHTML = "<p>Question 1: correct</p>"
    }
    else {
        resultP.innerHTML = "<p>Question 1: incorrect</p>"
    }

    if (q2 =="Execute code if conditions are met"){
        resultP.innerHTML += "<p>Question 2: correct</p>"
    }
    else {
        resultP.innerHTML += "<p>Question 2: incorrect</p>"
    }

    if (resultP.innerHTML == "<p>Question 1: correct</p><p>Question 2: correct</p>"){
        score.innerHTML = "Score: 2/2"
    }
    else if (resultP.innerHTML == "<p>Question 1: incorrect</p><p>Question 2: correct</p>"){
        score.innerHTML = "Score: 1/2"
    }
    else if (resultP.innerHTML == "<p>Question 1: correct</p><p>Question 2: incorrect</p>"){
        score.innerHTML = "Score: 1/2"
    }
    else if (resultP.innerHTML == "<p>Question 1: incorrect</p><p>Question 2: incorrect</p>"){
        score.innerHTML = "Score: 0/2"
    }

}

setInterval(changeSlide, 10000);

function changeSlide(){
    let landscape = document.getElementById("landscape");
    let palmTree = document.getElementById("palm-tree");
    let plane = document.getElementById("plane");
    let sunrise = document.getElementById("sunrise");
    let slideshowDiv = document.getElementById("slideshow-div");
    let num = slideshowDiv.getAttribute("data-num");
    num = parseInt(num) + 1;

    if(num == 2){
        landscape.classList.add("hidden");
        palmTree.classList.remove("hidden");
    }
    else if (num == 3){
        palmTree.classList.add("hidden");
        plane.classList.remove("hidden");
    }
    else if (num == 4){
        plane.classList.add("hidden");
        sunrise.classList.remove("hidden");
    }
    else if (num > 4){
        sunrise.classList.add("hidden");
        landscape.classList.remove("hidden");
        num = 1;
    }

    slideshowDiv.setAttribute("data-num", num);
}