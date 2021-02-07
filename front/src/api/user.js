import http from '@/api/http'

export const auth = async (auth) => {
  let data  = await http.post('auth', auth)
  return data
}
export const check  = async (token) => {
  let data  = await http.get(`auth/${token}`, auth)
  return data
}
