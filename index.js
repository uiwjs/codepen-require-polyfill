window.require = function (module) {
  if (!/(uiw|UIW)/.test(module)) {
    throw new Error('this is a fake require only use for import fusion next');
  }
  return window.UIW || window.uiw;
}
