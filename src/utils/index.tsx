
export const str_encrypt = (str: string) => {
  let c = String.fromCharCode(str.charCodeAt(0) + str.length);
  for (let i = 1; i < str.length; i++) {
    c += String.fromCharCode(str.charCodeAt(i) + str.charCodeAt(i - 1));
  }
  return encodeURIComponent(c);
}

export const str_decrypt = (str: string) => {
  str = decodeURIComponent(str);
  let c = String.fromCharCode(str.charCodeAt(0) - str.length);

  for (let i = 1; i < str.length; i++) {
    c += String.fromCharCode(str.charCodeAt(i) - c.charCodeAt(i - 1));
  }
  return c;
}

// 用时计算
const _isZero = (time: any) => {
  if (time.toString().length < 2) {
    return `0${time}`
  }
  return time
}


export const formatDuring = (time: any) => {
  const hours = parseInt(`${time / (1000 * 60 * 60)}`, 10)
  const minutes = parseInt(`${(time % (1000 * 60 * 60)) / (1000 * 60)}`, 10)
  const seconds = parseInt(`${(time % (1000 * 60)) / 1000}`, 10)
  return `${_isZero(hours)}:${_isZero(minutes)}:${_isZero(seconds)}`
}

export const downloadFile = (str: any, name: string = 'result', type: string = 'zip') => {
  const blob = new Blob([str])
  const fileName = `${name}.${type}` || 'default.zip'
  const link = document.createElement('a')
  link.download = fileName
  link.style.display = 'none'
  link.href = URL.createObjectURL(blob)
  document.body.appendChild(link)
  link.click()
  URL.revokeObjectURL(link.href)
  document.body.removeChild(link)
}