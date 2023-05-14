export default function throttle (fun:Function, delay: number = 100) {
  let last: number, deferTimer: number;
  return function (...args:any[]) {
    // @ts-ignore
    let that = this
    let _args = arguments
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      // @ts-ignore
      deferTimer = setTimeout(function () {
        last = now
        fun.apply(that, _args)
      }, delay)
    } else {
      last = now
      fun.apply(that, _args)
    }
  }
}
