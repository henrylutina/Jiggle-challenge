AOS.init();
window.onscroll = function() {animate()};

function animate() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").classList.add("sticky");
  }else {
    document.getElementById("nav").classList.remove("sticky");
  }
}