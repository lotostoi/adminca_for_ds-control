import http from '@/api/http'

export const importFile = async (body) => {
  let data  = await http.post('add/objects', body)
  return data
}