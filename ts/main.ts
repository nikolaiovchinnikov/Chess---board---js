const getElement = (name:string, wid:string, heig:string, color:string = "white"):HTMLElement =>{
    let newElemets:HTMLElement = document.createElement(name);
    newElemets.style.width = wid;
    newElemets.style.height = heig;
    newElemets.style.backgroundColor = color;
    return newElemets;
}

let bigSaize = 160 * 2
let minSaize = 20
let amount:number = bigSaize / minSaize
let staticAmount:number = amount
let body:HTMLBodyElement|null = document.querySelector("body");
let newElemets:HTMLElement = getElement("div", `${bigSaize}px`, `${bigSaize}px`);
newElemets.style.display = "flex";
newElemets.style.flexWrap = "wrap";
body?.appendChild(newElemets);


let zero:number = 0;
let one:number = 1;
let notZero:number = 1;
let notOne:number = 0;

for (let i = 1; i <= staticAmount * staticAmount; i++) {
    if(one === i % 2){
        let newBlock:HTMLElement = getElement("div", `${minSaize}px`, `${minSaize}px` ,"black");
        newElemets.appendChild(newBlock);
    }if(zero === i % 2){
        let newBlock:HTMLElement = getElement("div", `${minSaize}px`, `${minSaize}px`);
        newElemets.appendChild(newBlock);
    }if (i === amount){
        amount += staticAmount;
        zero = notZero;
        one = notOne;
        notOne = zero;
        notZero = one;
    }
}
