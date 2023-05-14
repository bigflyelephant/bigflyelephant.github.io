export default function genKey(pre:string='', len?:number) {
  len = len || 32;
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; //排除了一些混淆随机字符
  let maxPos = chars.length;
  let rand = '';
  for (let i = 0; i < len; i++) {
    rand += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pre+rand;
}
