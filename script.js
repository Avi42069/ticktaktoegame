let boxes= document.querySelectorAll(".button");
let resetButton= document.querySelector(".rst_btn");
let newButton = document.querySelector("#reset");
let showButton=document.querySelector("#msgW");
let containerMsg=document.querySelector("#msg");
let turnO=true;
let turnX;
let count=0;
showButton.hidden=true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) =>{
     box.addEventListener("click", () =>
{  
    count++;
    console.log(count);
   if(turnO){
    box.innerText = "O";
    turnO= false;
   }
   else{
    box.innerText= "X";
    turnO=true;
   }
   box.disabled=true;
   checkWinner();
   if(count === 9){
    showButton.hidden=false;
    showButton.innerText = "DRAW";
    console.log("DRAW");
   }
    });
});
let resetGame = () =>{
    turnO=true;
    count=0;
    enableBox();
    showButton.hidden=true;
}
newButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
let enableBox= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
let disableBox= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkWinner = () => {
    for(let pattern of winPatterns){
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
      if(pos1Val != "" && pos2Val != "" && pos3Val != "")
      { 
        if( pos1Val === pos2Val && pos2Val === pos3Val){
            showButton.innerText=`Congratulations, winner is ${pos1Val}`;
            showButton.hidden=false;
            disableBox();
        }
      }
    }
};
