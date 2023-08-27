let rightContainer = document.querySelector(".right");
let icons = ['fa-clock', 'fa-sack-dollar', 'fa-code', 'fa-coins', 'fa-quote-left', 'fa-coins'];
let h3Title = ['Hours Number', 'Total Amount', 'Coding Hours', 'Amount', 'Iqtibasy Project', 'Amount'];
let jsonSt = '{"infoArray": [0,0,0,0,0,0]}';
// localStorage.ProInfo = '{"infoArray": [0,0,0,0,0,0]}';
let jsonOb = checkLocal();
createBox();
function checkLocal() {
  if (!localStorage.ProInfo)
    localStorage.ProInfo = jsonSt;

  return JSON.parse(localStorage.ProInfo);
}
function createBox() {
  let div = document.createElement("div");
  div.classList.add('deatils-box');

  let h3 = document.createElement("h3");
  let h3Span = document.createElement("span");
  let h3Icon = document.createElement("i");
  h3Icon.classList.add("fa-solid");
  h3.append(h3Icon);
  h3.append(h3Span);
  div.appendChild(h3);


  let upSpan = document.createElement("span");
  let upSpanSpan = document.createElement("span");
  let upSpanIcon = document.createElement("i");
  upSpanIcon.classList.add("fa-solid", "text-lg");
  upSpan.append(upSpanSpan)
  upSpan.append(upSpanIcon)
  div.appendChild(upSpan);

  for (let i = 0; i < h3Title.length; i++) {
    h3Span.textContent = ` ${h3Title[i]}: `;
    h3Icon.classList.add(icons[i]);
    if (i % 2 === 0)
      upSpanIcon.classList.add("fa-hourglass-half");
    else
      upSpanIcon.classList.add("fa-dollar-sign");

    upSpanSpan.textContent = getInfoFromLocal(i).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    rightContainer.appendChild(div.cloneNode(true));

    h3Icon.className = "fa-solid";
    upSpanIcon.className = "fa-solid text-lg"
  }

}
function getInfoFromLocal(index) {
  return jsonOb["infoArray"][index];
}

let inputFiled = document.querySelector("#record-inp");
let selectCh = document.querySelector("#select-ob");
let btn = document.querySelector("#add-btn");
inputFiled.addEventListener("keypress", function(e) {
  if(e.keyCode === 13) {
    onclickBtn(e);
  }
})

function onclickBtn(e) {

  if (typeof +inputFiled.value === 'number' && selectCh.value !== '0') {
    jsonOb["infoArray"][0] += +inputFiled.value;
    jsonOb["infoArray"][1] = +jsonOb["infoArray"][0] * 3500;
    if (selectCh.value === "coding") {
      jsonOb["infoArray"][2] += +inputFiled.value;
    }
    else if (selectCh.value === "iqtibasy") {
      jsonOb["infoArray"][4] += +inputFiled.value;

    }
    inputFiled.value = "";
    jsonOb["infoArray"][3] = +jsonOb["infoArray"][2] * 3500;
    jsonOb["infoArray"][5] = +jsonOb["infoArray"][4] * 3500;

  }
  updateLocal();
}

function updateLocal() {
  localStorage.ProInfo = JSON.stringify(jsonOb);
  location.reload();
}
