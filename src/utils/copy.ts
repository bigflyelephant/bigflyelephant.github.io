export default async function copy(text: string) {
  if (navigator?.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  if (document?.execCommand) {
    const copyTempEle = document.createElement("input");
    copyTempEle.value = text;
    copyTempEle.style.display = "hidden";
    document.body.appendChild(copyTempEle);
    copyTempEle.select();
    const result = document.execCommand("Copy");
    copyTempEle.remove();
    if (result) return Promise.resolve();
    else return Promise.reject();
  }
  return Promise.reject();
}
