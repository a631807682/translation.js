import md5 from '../../../utils/md5'

const client = 'fanyideskweb'
const sk = "1L5ja}w$puC.v_Kz3@yYn"

/**
 * 有道翻译接口的签名算法
 * @param {string} text
 * @return {{client: string, salt: number, sign: string}}
 */
export default function(text: string) {
  const salt = Date.now() + parseInt(String(10 * Math.random()), 10)
  return {
    client,
    salt,
    sign: md5(client + text + salt + sk)
  }
}
