const seatLeft = document.getElementById("seatLeft");
const seatSelected = document.getElementById("seatSelected");
const seatDetails = document.getElementById("seatDetails");
const applyCuppon = document.getElementById("applyCuppon");
const cupponInput = document.getElementById("cupponInput");             
const disCount = document.getElementById("disCount");             
const cupponArea = document.getElementById("cupponArea");                        
const header = document.getElementById("header");                        
const main = document.getElementById("main");                        
const footer = document.getElementById("footer");                        
const nextPage = document.getElementById("nextPage");                                 
const cutomerNumber = document.getElementById("cutomerNumber");                                 
const next = document.getElementById("next");             
const seats = document.querySelectorAll("#seat");
let totalPrice = document.getElementById("totalPrice");
let grandPrice = document.getElementById("grandTotal");
let totalprice = 0;
function changeOutput(variable, value) {
  variable.innerText = value;
}
function changeColor(bgcolor, textColor) {
  event.target.style.backgroundColor = bgcolor;
  event.target.style.color = textColor;
}


