module.exports = function(inElement){
  var elBound = inElement.getBoundingClientRect();
  var viewHeight = document.documentElement.clientHeight;
  return elBound.top <= viewHeight;
};
