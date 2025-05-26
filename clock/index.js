function updateClock() {
  const now = new Date();
  let hour = now.getHours().toString().padStart(2, 0);
  const meridian = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const soconds = now.getSeconds().toString().padStart(2, 0);

  const fulltime = `${hour}:${minutes}:${soconds}  ${meridian}`;
  document.getElementById("clock").textContent = fulltime;
}
updateClock();
setInterval(updateClock, 1000);
