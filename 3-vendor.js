window.addEventListener("load", function(){
  var prefix = (Array.prototype.slice
  .call(window.getComputedStyle(document.documentElement, ''))
  .join('') 
  .match(/-(moz|webkit|ms)-/))[1];

  // moz - Firefox (Gecko Engine)
  // webkit - Chrome, Safari, Opera (Webkit Engine)
  // ms - Internet Explorer & Edge (Trident Engine)
  // NOTE - Old Opera versions use Presto Engine. Prefix is -o
  console.log(prefix);
});