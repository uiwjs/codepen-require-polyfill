window.require = function(module) {
  if (window[module]) {
    return window[module];
  }
}
