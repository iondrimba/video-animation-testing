var scrollY = 0;
var videoElement = null;

window.addEventListener('scroll', setScrollY);

function setScrollY() {
  scrollY = window.pageYOffset || window.scrollY;
}

function displayScrollPos() {
  var offsetElt = offset(videoElement);

  if (scrollY >= offsetElt.top) {
    window.removeEventListener('scroll', setScrollY);

    videoElement.play();

    return false;
  }
  requestAnimationFrame(displayScrollPos);
};


function offset(elt) {
  var rect = elt.getBoundingClientRect(), bodyElt = document.body;

  return {
    top: rect.top + bodyElt.scrollTop,
    left: rect.left + bodyElt.scrollLeft
  }
}

window.addEventListener('DOMContentLoaded', function () {

  videoElement = document.querySelector('video');

  requestAnimationFrame(displayScrollPos);

});
