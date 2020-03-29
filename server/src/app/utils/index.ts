import request from 'request-promise'

export async function verifyURL (uri:string):Promise<boolean> {
  try {
    await request({ uri, method: 'HEAD' })
    return true
  } catch ({ name }) {
    if (name === 'RequestError') return false
    else return true
  }
}
