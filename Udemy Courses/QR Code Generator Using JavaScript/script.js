// QR Code Generator
function generateQR() {
  let img = document.querySelector(".img-qr");
  let txt = document.querySelector(".text-box").value;
  let selected = document.getElementById("cht-select").value;
  if (txt === "") {
    alert("Please, Enter Text.");
    return;
  }
  // Set source of image
  img.src = `https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=${selected}x${selected}&chl=${txt}`;
  // https://chart.googleapis.com/chart? cht=qr chs=select chl=txt

}

let btn = document.querySelector(".generate");
// btn.onclick = showIt;
btn.addEventListener("click", generateQR);

