let boxes = document.getElementsByClassName("box");
let resetBtn = document.querySelector(".reset-btn");

let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");

let turn = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,7],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame =() => {
    turn = true;
    enabledBoxes();
    msgContainer.classList.add("hide");

}
const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner =(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    // console.log(msgContainer.classList);
    msgContainer.classList.remove("hide");
    disabledBoxes();


}
Array.from(boxes).forEach((box) =>{
    box.addEventListener("click",() => {
        console.log("box clicked");
        if(turn){
            box.innerText = "O";
            turn = false;
        }
        else{
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;

        checkWinner();
        
    });

});

const checkWinner =() =>{
    for (let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos2Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);

            }
        }
        
        // console.log(pos1Val,pos2Val,pos3Val);

    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);