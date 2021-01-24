import http from '@/api/http'

export const auth = async (auth) => {
  let { data } = await http.post('/auth', auth)
  return data
}
