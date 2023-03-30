let roundEl = document.getElementById("round-el")
let is5round = false
let is10round = false
let counter = 0
let myScore = 0
let compScore = 0
let messageEl = document.getElementById("message-el")

function winner(){
    if(myScore > compScore){
        messageEl.textContent = "You won!"
    }
    else if(myScore < compScore){
        messageEl.textContent = "Computer won!"
    }
    else{
        messageEl.textContent = "Draw!"
    }
    changeColor()
    
}

function changeColor(){
    document.getElementById("message-el").style.color="goldenrod";
    document.getElementById("message-el").style.fontWeight="bold";
    document.getElementById("message-el").style.fontSize="50px";
    document.getElementById("message-el").style.textShadow="2px 2px 5px black"
}

function rock(){
    if(is5round == true){
        if(counter<=5){
            document.getElementById("mychoice").src="images/rock.png"
            roundEl.textContent = "Round: " +counter
            counter++;
            let x = computersChoice()
            if(x==2){
                document.getElementById("scoreCard").textContent = myScore + " - " + (++compScore)
            }
            if(x==3){
                document.getElementById("scoreCard").textContent = ++myScore + " - " + compScore
            }
        }
        if(counter === 6){
            winner()
        }
    }
    else if(is10round == true){
        if(counter<=10){
            document.getElementById("mychoice").src="images/rock.png"
            roundEl.textContent = "Round: " +counter
            counter++;
            let x = computersChoice()
            if(x==2){
                document.getElementById("scoreCard").textContent = myScore + " - " + (++compScore)
            }
            if(x==3){
                document.getElementById("scoreCard").textContent = ++myScore + " - " + compScore
            }
        }
        if(counter === 6){
            winner()
        }
    }
}


function paper(){
    if(is5round == true){
        if(counter<=5){
            document.getElementById("mychoice").src="images/paper.png"
            roundEl.textContent = "Round: " +counter
            counter++;
            let x = computersChoice()
            if(x==1){
                document.getElementById("scoreCard").textContent = ++myScore + " - " + (compScore)
            }
            if(x==3){
                document.getElementById("scoreCard").textContent = myScore + " - " + (++compScore)
            }
        }
        if(counter === 6){
            winner()
        }
    }
    else if(is10round == true){
        if(counter<=10){
            document.getElementById("mychoice").src="images/paper.png"
            roundEl.textContent = "Round: " +counter
            counter++;
            let x = computersChoice()
            if(x==1){
                document.getElementById("scoreCard").textContent = ++myScore + " - " + (compScore)
            }
            if(x==3){
                document.getElementById("scoreCard").textContent = myScore + " - " + (++compScore)
            }
        }
        if(counter === 6){
            winner()
        }
    }
}

function scissor(){
    if(is5round == true){
        if(counter<=5){
            document.getElementById("mychoice").src="images/scissor.png"
            roundEl.textContent = "Round: " +counter
            counter++;
            let x = computersChoice()
            if(x==1){
                document.getElementById("scoreCard").textContent = myScore + " - " + (++compScore)
            }
            if(x==2){
                document.getElementById("scoreCard").textContent = ++myScore + " - " + (compScore)
            }
        }
        if(counter === 6){
            winner()
        }
    }
    if(is10round == true){
        if(counter<=10){
            document.getElementById("mychoice").src="images/scissor.png"
            roundEl.textContent = "Round: " +counter
            counter++;
            let x = computersChoice()
            if(x==1){
                document.getElementById("scoreCard").textContent = myScore + " - " + (++compScore)
            }
            if(x==2){
                document.getElementById("scoreCard").textContent = ++myScore + " - " + (compScore)
            }
        }
        if(counter === 6){
            winner()
        }
    }
}

function computersChoice(){
    let c = Math.ceil(Math.random() * 3)
    if(c === 1){
        document.getElementById("comp-choice").src = "images/rock_comp.png"
        return 1
    }
    else if(c === 2){
        document.getElementById("comp-choice").src = "images/paper_comp.png"
        return 2
    }
    else{
        document.getElementById("comp-choice").src = "images/scissor_comp.png"
        return 3
    }
}


function fiveRounds(){
        counter = 1
        is5round = true 
}

function tenRounds(){
    counter = 1
    is10round = true
}

function reset(){
    document.getElementById("scoreCard").textContent = "0 - 0"
    document.getElementById("round-el").textContent = "Round: 0"
    myScore = 0
    compScore = 0
    counter = 1
    is10round = false
    is5round = false
    document.getElementById("message-el").style.color="palegreen";
    document.getElementById("message-el").style.textShadow="none";
}
