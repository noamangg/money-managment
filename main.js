let rightContainer = document.querySelector(".right");
let icons = ['fa-clock', 'fa-sack-dollar', 'fa-code', 'fa-coins', 'fa-quote-left', 'fa-coins'];
let h3Title = ['Hours Number', 'Total Amount', 'Coding Hours', 'Amount', 'Iqtibasy Project', 'Amount'];
createBox();

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

      upSpanSpan.textContent = getInfoFromLocal(i);
    rightContainer.appendChild(div.cloneNode(true));

    h3Icon.className = "fa-solid";
    upSpanIcon.className = "fa-solid text-lg"
  }

}

function getInfoFromLocal(index) {
  
  return "1000"
}

