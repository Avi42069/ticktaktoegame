let boxes= document.querySelectorAll(".button");
let resetButton= document.querySelector(".rst_btn");


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
    let turn0=true;
    if (turn0 === true)
{
        box.innerText="if";
        let turnX=true;
}
else{  
    box.innerText="else";
}
    });
});


