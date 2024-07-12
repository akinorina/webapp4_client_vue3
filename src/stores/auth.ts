import { ref } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import { axios } from '@/lib/Axios'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()

  const email = ref('akinori.na@gmail.com')
  const password = ref('abcde')
  const name = ref('')
  const iat = ref(0)
  const exp = ref(0)
  const isAuthenticated = ref(false)
  let iID: NodeJS.Timeout | undefined = undefined

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
    isAuthenticated.value = dayjs().isBefore(dayjs(exp.value))

    // 時間切れ処理
    iID = setInterval(() => {
      isAuthenticated.value = dayjs().isBefore(dayjs(exp.value))
      if (!isAuthenticated.value) {
        clearInterval(iID)
        router.push({ name: 'admin_login' })
      }
    }, 1000)
  }

  async function logout() {
    // logout
    await axios.post('/api/auth/logout', {})
    // reset values
    axios.defaults.headers['Authorization'] = null
    isAuthenticated.value = false
    name.value = ''
    iat.value = dayjs().valueOf()
    exp.value = 0
    clearInterval(iID)
    router.push({ name: 'admin_login' })
  }

  async function getProfile() {
    return await axios.get('/api/auth/profile')
  }

  function getExpiredTime(): string {
    console.log('exp', exp.value)
    const exptime = dayjs(exp.value).format('YYYY-MM-DD HH:mm:ss')
    console.log('exp time', exptime)
    return exptime
  }

  return { email, password, name, login, logout, getProfile, isAuthenticated, getExpiredTime }
})
