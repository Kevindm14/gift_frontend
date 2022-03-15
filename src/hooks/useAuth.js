import { getToken } from '../helpers/authHelper'

export function useAuth () {
  const token = getToken() && true
  const auth = false

  console.log(token)

  return auth
}
