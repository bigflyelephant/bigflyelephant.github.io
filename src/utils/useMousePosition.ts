import { useEffect, useState } from 'react'
import genKey from '@/utils/genKey'
import throttle from '@/utils/throttle'

const callbackMap: Record<string, ((x: number, y: number) => void) | undefined> = {}

window.addEventListener('mousemove', throttle((ev: MouseEvent) => {
  for (let key in callbackMap) {
    if (callbackMap.hasOwnProperty(key)) {
      callbackMap?.[key]?.(ev.x, ev.y)
    }
  }
},30))

export default function useMousePosition () {
  const [key, setKey] = useState<string>();
  const [[x,y],setXY] = useState<[number|undefined,number|undefined]>([undefined,undefined]);
  useEffect(() => {
    setKey(genKey)
  }, [])
  useEffect(() => {
    if (key !== undefined) {
      callbackMap[key] = (x,y)=>{
        setXY([x,y]);
      }
    }
    return () => {
      if (key !== undefined) {
        delete callbackMap[key]
      }
    }
  }, [key]);
  return [x,y];
}
