import selectFile, { handleReadTxt } from "@/utils/selectFIle";
import { useRef } from "react"



export default function TxtViewer() {
    const preRef = useRef<HTMLPreElement>(null);
    const handleLoad = async () => {
        const file = await selectFile();
        const text = await handleReadTxt(file);
        if (preRef.current) {
            preRef.current.innerHTML = text;
        }
    }
    return <>
        <button onClick={handleLoad}>点击加载文件</button>
        <pre ref={preRef}></pre>
    </>
}