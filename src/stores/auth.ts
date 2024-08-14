import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import { axios } from '@/lib/Axios'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()

  const username = ref('')
  const password = ref('')
  const iat = ref(0)
  const exp = ref(0)
  const isAuthenticated = ref(false)
  let iID: number = 0

  // restore from localStorage
  if (localStorage.getItem('auth')) {
    const jsonLsData = localStorage.getItem('auth')
    if (typeof jsonLsData === 'string') {
      const lsData = JSON.parse(jsonLsData)
      axios.defaults.headers['Authorization'] = 'Bearer ' + lsData.access_token
      username.value = lsData.username
      iat.value = lsData.iat
      exp.value = lsData.exp
      isAuthenticated.value = lsData.isAuthenticated
    }
  }

  async function signIn() {
    // sign-in
    const signinData = {
      username: username.value,
      password: password.value
    }
    const res = await axios.post('/api/auth/signin', signinData)
    axios.defaults.headers['Authorization'] = 'Bearer ' + res.data.access_token

    // get profle
    const res2 = await getProfile()
    username.value = res2.data.username
    iat.value = res2.data.iat * 1000
    exp.value = res2.data.exp * 1000
    isAuthenticated.value = dayjs().isBefore(dayjs(exp.value))

    // save to localStorage
    const lsData = {
      access_token: res.data.access_token,
      username: username.value,
      iat: iat.value,
      exp: exp.value,
      isAuthenticated: isAuthenticated.value
    }
    localStorage.setItem('auth', JSON.stringify(lsData))

    // 時間切れ処理
    iID = window.setInterval(() => {
      isAuthenticated.value = dayjs().isBefore(dayjs(exp.value))
      if (!isAuthenticated.value) {
        // reset values
        axios.defaults.headers['Authorization'] = null
        username.value = ''
        iat.value = dayjs().valueOf()
        exp.value = 0
        isAuthenticated.value = false

        clearInterval(iID)
        localStorage.removeItem('auth')

        router.push({ name: 'sign-out' })
      }
    }, 1000)
  }

  async function signOut() {
    // sign-out
    await axios.post('/api/auth/signout', {})
    // reset values
    axios.defaults.headers['Authorization'] = null
    username.value = ''
    iat.value = dayjs().valueOf()
    exp.value = 0
    isAuthenticated.value = false

    clearInterval(iID)
    localStorage.removeItem('auth')
  }

  async function getProfile() {
    return await axios.get('/api/auth/profile')
  }

  function getExpiredTime(): string {
    return dayjs(exp.value).format('YYYY-MM-DD HH:mm:ss')
  }

  return {
    username,
    password,
    signIn,
    signOut,
    getProfile,
    isAuthenticated,
    getExpiredTime
  }
})
