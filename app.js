let arrowBtns = document.getElementsByClassName("fas");

function updateTitle() {
  let switchingOrder = document.getElementById("switching-order").value;
  document.title = switchingOrder;
}

for (let i = 0; i < arrowBtns.length; i++) {
  arrowBtns[i].addEventListener("click", function() {
    switch (arrowBtns[i].classList.value) {
      case "fas fa-arrow-left fa-lg dark-grey":
        arrowBtns[i].classList.value = "fas fa-arrow-left fa-lg green";
        break;
      case "fas fa-arrow-left fa-lg green":
        arrowBtns[i].classList.value = "fas fa-arrow-left fa-lg dark-grey";
        break;
      case "fas fa-arrow-right fa-lg dark-grey":
        arrowBtns[i].classList.value = "fas fa-arrow-right fa-lg green";
        break;
      case "fas fa-arrow-right fa-lg green":
        arrowBtns[i].classList.value = "fas fa-arrow-right fa-lg dark-grey";
        break;
      default:
        break;
    }
  });
}
