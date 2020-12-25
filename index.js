window.require = function (module) {
  if (module !== 'uiw' && module !== 'UIW') {
    throw new Error('this is a fake require only use for import fusion next');
  }
  return window.UIW || window.uiw;
}