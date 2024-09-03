const dialogBoss = document.querySelector("#initialAdd");
const newBtn = document.querySelector("#addNewMule");
const dialogCloseBoss = document.querySelector("#closeBtn");
const muleIGN = document.querySelector("#muleName");
const dialogCloseMule = document.querySelector("#closeMule");
const ignSubmit = document.querySelector("#ignSubmit");

newBtn.addEventListener("click", () => {
  muleIGN.show();
});

dialogCloseBoss.addEventListener("click", () => {
  dialogBoss.close();
});

dialogCloseMule.addEventListener("click", () => {
  muleName.close();
});

ignSubmit.addEventListener("click", () => {
  dialogBoss.show(), muleName.close();
});

const craBtn = document.querySelector('#craBtn')
const lomienBtn = document.querySelector("#lomienBtn");
const luwillBtn = document.querySelector("#luwillBtn");
const cteneBtn = document.querySelector("#cteneBtn");

asdf



