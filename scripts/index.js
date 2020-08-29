function switchMode() {
  document.querySelector('body').classList.toggle('night');
}
(() => {
  const currentTime = new Date().getHours();
  if (currentTime < 6 || currentTime > 21) document.querySelector('body').classList.toggle('night');
})();