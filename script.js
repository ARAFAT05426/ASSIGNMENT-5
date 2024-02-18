const seatLeft = document.getElementById("seatLeft");
const seatSelected = document.getElementById("seatSelected");
const seatDetails = document.getElementById("seatDetails");
const cupponInput = document.getElementById("cupponInput");
const applyCuppon = document.getElementById("applyCuppon");
const seats = document.querySelectorAll("#seat");
let totalPrice = document.getElementById("totalPrice");
let totalprice = 0;
for (const seat of seats) {
  seat.addEventListener("click", function (event) {
    const seatBg = event.target.style.backgroundColor;
    let seatSelectCount = parseInt(seatSelected.innerText);
    const purchaseDetails = document.createElement("div");
    const seatName = event.target.innerText;
    purchaseDetails.innerHTML = `<h3>${seatName}</h3> Business <h3>550</h3>`;
    purchaseDetails.classList.add("flex", "justify-between");
    purchaseDetails.setAttribute("id", `${seatName}`);
    const seatId = document.getElementById(`${seatName}`);

    if (seatBg == "rgb(29, 209, 0)") {
      seatLeft.innerText++;
      seatSelectCount--;
      changeColor("#FAFAFA", "#6D747D");
      changeOutput(seatSelected, seatSelectCount);
      seatId.parentNode.removeChild(seatId);
      totalprice = totalprice - 550;
      changeOutput(totalPrice, totalprice);
    } else {
      seatSelectCount++;
      if (seatSelectCount === 5) {
        return alert("maximum");
      }
      changeColor("#1DD100", "#fff");
      seatLeft.innerText--;
      seatSelected.innerText = seatSelectCount;
      seatDetails.appendChild(purchaseDetails);
      totalprice = totalprice + 550;
      changeOutput(totalPrice, totalprice);
    }
  });
}

function changeOutput(variable, value) {
  variable.innerText = value;
}

function getInnerText(variable) {
  return variable.innerText;
}
function changeColor(bgcolor, textColor) {
  event.target.style.backgroundColor = bgcolor;
  event.target.style.color = textColor;
}
