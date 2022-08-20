// function show() {
//   const x = document.querySelector("#table");
//   if (x.style.display === "none") {
//     x.style.display = "table";
//   } else {
//     x.style.display = "none";
//   }
// }
(() => {
  const button = document.getElementById("specBtn");
  const table = document.getElementById("table");

  button.addEventListener("click", toggle);

  function toggle() {
    if (table.style.display === "none") {
      table.style.display = "table";
    } else {
      table.style.display = "none";
    }
  }
})();

(() => {
  const dataName = document.querySelector("[data-name]");
  const qStr = window.location.search;
  const urlParams = new URLSearchParams(qStr);
  const name = urlParams.get("name");

  dataName.textContent = `Hello! ${name}`;
})();
