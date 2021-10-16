import "./vzome-viewer.js";

document.querySelector("select").addEventListener("input", (e) => {
  document.querySelector("vzome-viewer").src = e.target.value;
})
