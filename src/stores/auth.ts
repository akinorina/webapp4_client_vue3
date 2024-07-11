import { ref } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import { axios } from '@/lib/Axios'

export const useAuthStore = defineStore('auth', () => {
  const email = ref('akinori.na@gmail.com')
  const password = ref('abcde')
  const name = ref('')
  const iat = ref(0)
  const exp = ref(0)

  async function login() {
    // login
    const loginData = {
      email: email.value,
      password: password.value
    }
    const res = await axios.post('/api/auth/login', loginData)
    axios.defaults.headers['Authorization'] = 'Bearer ' + res.data.access_token

    // get profle
    const res2 = await getProfile()
    name.value = res2.data.name
    iat.value = res2.data.iat * 1000
    exp.value = res2.data.exp * 1000
  }

  async function logout() {
    // logout
    await axios.post('/api/auth/logout', {})
    // reset values
    axios.defaults.headers['Authorization'] = null
    name.value = ''
    iat.value = 0
    exp.value = 0
  }

  function isLoggedin() {
    return dayjs().isBefore(dayjs(exp.value))
  }

  async function getProfile() {
    return await axios.get('/api/auth/profile')
  }

  return { email, password, name, login, logout, getProfile, isLoggedin }
})
