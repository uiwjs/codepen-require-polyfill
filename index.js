window.require = function (module) {
  if (module === 'uiw') {
    if (window.UIW || window.uiw) {
      return window.UIW || window.uiw;
    }
    throw new Error('this is a fake require only use for import fusion next');
  }
}
