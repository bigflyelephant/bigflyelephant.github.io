const inputRef = document.createElement("input");
inputRef.setAttribute("type", "file");
inputRef.style.display = "none";
const inputHandle = async (): Promise<FileList | null> => {
  return await new Promise((resolve, reject) => {
    const onChangeHandle = function (res: Event) {
      const ele = res.currentTarget as HTMLInputElement;
      const files = ele.files;
      if (files?.length) {
        resolve(files);
      } else {
        resolve(null);
      }
      inputRef.removeEventListener("change", onChangeHandle);
    };
    inputRef.addEventListener("change", onChangeHandle);
    
    inputRef.click();
  });
};

const selectFile = async (accept: string = ""): Promise<File | null> => {
  inputRef.setAttribute("accept", accept);
  inputRef.removeAttribute('multiple')
  inputRef.value = "";
  const result = await inputHandle();
  if(result?.length){
    return result[0]
  }else{
    return null;
  }
};
const selectFiles = async (accept: string = ""): Promise<FileList | null> => {
  inputRef.setAttribute("accept", accept);
  inputRef.setAttribute('multiple',"multiple")
  inputRef.value = "";
  return await inputHandle();
};

const handleReadTxt = async (file?: File|null): Promise<string> => {
  if (!file) return "";
  return new Promise<string>((resolve, reject) => {
    try {
      const fileReader = new FileReader();
      fileReader.onloadend = (ev) => {
        const str = ((ev.currentTarget as FileReader)?.result as string) || "";
        resolve(str);
      };
      fileReader.readAsText(file, "UTF-8");
    } catch (e) {
        reject(e);
    }
  });
};

export default selectFile;
export {
    handleReadTxt
}
