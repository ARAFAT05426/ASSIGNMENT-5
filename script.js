for (const seat of seats) {
  seat.addEventListener("click", function (event) {
    const seatBg = event.target.style.backgroundColor;
    let seatSelectCount = parseInt(seatSelected.innerText);
    const purchaseDetails = document.createElement("div");
    const seatName = event.target.innerText;
    purchaseDetails.innerHTML = `<h3>${seatName}</h3> Economoy <h3>550</h3>`;
    purchaseDetails.classList.add("flex", "justify-between");
    purchaseDetails.setAttribute("id", `${seatName}`);    const seatId = document.getElementById(`${seatName}`);
    if (seatBg == "rgb(29, 209, 0)") {
      seatLeft.innerText++;
      seatSelectCount--;
      changeColor("#FAFAFA", "#6D747D");
      changeOutput(seatSelected, seatSelectCount);
      seatId.parentNode.removeChild(seatId);
      totalprice = totalprice - 550;
      changeOutput(totalPrice, totalprice);
      changeOutput(grandPrice, totalprice);
      if(seatSelectCount <= 1){
        next.setAttribute("disabled", true)
      }
      if (seatSelectCount < 4) {
        cupponInput.setAttribute("disabled", "");
      }
    } else {
      seatSelectCount++;
      if(seatSelectCount >= 1 && cutomerNumber.value.length > 0 ){
        next.removeAttribute("disabled")
      }
      if (seatSelectCount >= 4) {
        cupponInput.removeAttribute("disabled");
      }
      if (seatSelectCount === 5) {
        return alert("Maximum Tickets Selected");
      }
      changeColor("#1DD100", "#fff");
      seatLeft.innerText--;
      seatSelected.innerText = seatSelectCount;
      seatDetails.appendChild(purchaseDetails);
      totalprice = totalprice + 550;
      changeOutput(totalPrice, totalprice);
      changeOutput(grandPrice, totalprice);
    }
  });
}

const cupponCode = cupponInput.value;

applyCuppon.addEventListener("click", function (event) {
  const disCountOutput = document.createElement("div");
  disCountOutput.classList.add("flex", "justify-between");
  disCount.appendChild(disCountOutput);
  if (cupponInput.value === "NEW15") {
    const new15discount = grandPrice.innerText * 0.15;
    disCountOutput.innerHTML = `<h1>Discount</h1> <h1>${new15discount}</h1>`;
    const paybleMoney = grandPrice.innerText - new15discount;
    grandPrice.innerText = paybleMoney;
    cupponArea.classList.add("hidden");
  } else if (cupponInput.value === "Couple 20") {
    const couple20Discount = grandPrice.innerText * 0.2;
    disCountOutput.innerHTML = `<h1>Discount</h1> <h1>${couple20Discount}</h1>`;
    const paybleMoney = grandPrice.innerText - couple20Discount;
    grandPrice.innerText = paybleMoney;
    cupponArea.classList.add("hidden");
  } else {
    cupponInput.value ="";
    alert("Invalid Cuppon");
  }
});

cutomerNumber.addEventListener("keyup", function(event) {
  const text = event.target.value;
  if(text === ""){
    next.setAttribute("disabled", true)
  }
  else{
    next.removeAttribute("disabled")
  }
})

next.addEventListener("click", function(){
  header.classList.add("hidden");
  main.classList.add("hidden");
  footer.classList.add("hidden");
  nextPage.classList.remove("hidden")
})