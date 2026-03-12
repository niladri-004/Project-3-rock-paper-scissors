const options = document.querySelector('.options').children
Array.from(options).forEach(element => {
    element.addEventListener('click',rps);
});

let rockurl ="assets/rock.png";
let paperurl ="assets/paper.png";
let scissorsurl ="assets/scissors.png";

// function rps(e) {
//     // console.log(e.target);
//     let a = yours_call(e.currentTarget)
//     let b = computers_call();
//     message(a,b);
// }
let playing = false;

function rps(e) {
    if (playing) {
        return;
    }
    playing = true;

    
    let you = document.querySelector(".you");
    let comp = document.querySelector(".comp");
    let choice = e.currentTarget;

    document.getElementsByClassName('comp')[0].innerHTML = `<img src="${rockurl}" alt="rock"></img>`;
    document.getElementsByClassName('you')[0].innerHTML = `<img src="${rockurl}" alt="rock"></img>`;

    you.classList.add("shake");
    comp.classList.add("shake");

    setTimeout(() => {
        you.classList.remove("shake");
        comp.classList.remove("shake");

        let a = yours_call(choice);
        let b = computers_call();
        message(a,b);
        
        playing = false;
    }, 1500); // animation time

}


function computers_call() {
    let n = Math.floor(Math.random() * 3) + 1
    // console.log(n)
    let call
    prestr = "Computer's call is :"
    if (n == 1) {
        call = "rock"
        console.log(prestr,"rock");
    } else if (n == 2) {
        call = "paper"
        console.log(prestr,"paper");
    } else {
        call = "scissors"
        console.log(prestr,"scissors");
    }

    rockurl ="assets/rock.png";
    paperurl ="assets/paper.png";
    scissorsurl ="assets/scissors.png";
    
    
    if (call === "rock") {
        document.getElementsByClassName('comp')[0].innerHTML = `<img src="${rockurl}" alt="rock"></img>`;
    }
    if (call === "paper") {
        document.getElementsByClassName('comp')[0].innerHTML = `<img src="${paperurl}" alt="rock"></img>`;
    }
    if (call === "scissors") {
        document.getElementsByClassName('comp')[0].innerHTML = `<img src="${scissorsurl}" alt="rock"></img>`;
    }

    return call;
}
function yours_call(e) {
    prestr = "Your's call is :"
    console.log(prestr,e.id);

    rockurl ="assets/rock.png";
    paperurl ="assets/paper.png";
    scissorsurl ="assets/scissors.png";

    if (e.id === "rock") {
        document.getElementsByClassName('you')[0].innerHTML = `<img src="${rockurl}" alt="rock"></img>`;
    }
    if (e.id === "paper") {
        document.getElementsByClassName('you')[0].innerHTML = `<img src="${paperurl}" alt="rock"></img>`;
    }
    if (e.id === "scissors") {
        document.getElementsByClassName('you')[0].innerHTML = `<img src="${scissorsurl}" alt="rock"></img>`;
    }
    
    return e.id;
}

function message(yours_call,computers_call){

    let zero = 0;
    let one = 1;

    if (yours_call === 10 && computers_call === 10) {
        document.getElementsByClassName('msg')[0].innerHTML=`<h2>Let's play</h2>`;
    }
    else if (computers_call === yours_call) {
        console.log("Draw");
        document.getElementsByClassName('msg')[0].innerHTML=`<h2>It's a DRAW!</h2>`;
    }
    else if(
        (yours_call==="rock" && computers_call==="scissors") || (yours_call==="paper" && computers_call==="rock") || (yours_call==="scissors" && computers_call==="paper")
    ) {
        console.log("You WIN!");
        document.getElementsByClassName('msg')[0].innerHTML=`<h2>You WIN!</h2>`;
        scoreupdate(one,zero)

    }
    else{
        console.log("You LOST!");
        document.getElementsByClassName('msg')[0].innerHTML=`<h2>You LOST!</h2>`;
        scoreupdate(zero,one)

    }
}

let yourscore=0;
let compscore=0;

function scoreupdate(your, comp){
    yourscore = yourscore + your;
    compscore = compscore + comp;

    console.log(yourscore);
    console.log(compscore);

    document.querySelector('.yourscore').innerHTML= `Your's Score : ${yourscore}`
    document.querySelector('.compscore').innerHTML= `Computer's Score : ${compscore}`
    
}

const resetbutton = document.querySelector('.resetbutton');
resetbutton.addEventListener('click',reset);

function reset(e){
    yourscore = 0;
    compscore = 0;
    playing = false;
    scoreupdate(0,0);
    message(10,10);
    document.getElementsByClassName('comp')[0].innerHTML = `<img src="${rockurl}" alt="rock"></img>`;
    document.getElementsByClassName('you')[0].innerHTML = `<img src="${rockurl}" alt="rock"></img>`;
}