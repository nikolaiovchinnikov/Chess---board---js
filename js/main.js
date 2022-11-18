"use strict";
const getElement = (name, wid, heig, color = "white") => {
    let newElemets = document.createElement(name);
    newElemets.style.width = wid;
    newElemets.style.height = heig;
    newElemets.style.backgroundColor = color;
    return newElemets;
};
let bigSaize = 160 * 2;
let minSaize = 20;
let amount = bigSaize / minSaize;
let staticAmount = amount;
let body = document.querySelector("body");
let newElemets = getElement("div", `${bigSaize}px`, `${bigSaize}px`);
newElemets.style.display = "flex";
newElemets.style.flexWrap = "wrap";
body === null || body === void 0 ? void 0 : body.appendChild(newElemets);
let zero = 0;
let one = 1;
let notZero = 1;
let notOne = 0;
for (let i = 1; i <= staticAmount * staticAmount; i++) {
    if (one === i % 2) {
        let newBlock = getElement("div", `${minSaize}px`, `${minSaize}px`, "black");
        newElemets.appendChild(newBlock);
    }
    if (zero === i % 2) {
        let newBlock = getElement("div", `${minSaize}px`, `${minSaize}px`);
        newElemets.appendChild(newBlock);
    }
    if (i === amount) {
        amount += staticAmount;
        zero = notZero;
        one = notOne;
        notOne = zero;
        notZero = one;
    }
}
//# sourceMappingURL=main.js.map