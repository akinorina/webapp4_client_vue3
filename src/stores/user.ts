import { ref } from 'vue'
import { defineStore } from 'pinia'
import { axios } from '@/lib/Axios'
import User from '@/lib/User'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>(new User())
  const users = ref<User[]>([])

  async function getUsers() {
    try {
      users.value = []
      const options = {}
      const response = await axios.get('/api/users', options)
      users.value = response.data
    } catch (err: any) {
      console.error(err.message)
    }
  }

  async function newUser() {
    try {
      user.value = new User()
    } catch (err: any) {
      console.error(err.message)
    }
  }

  async function createUser() {
    try {
      const options = user.value
      await axios.post('/api/users', options)
    } catch (err: any) {
      console.error(err.message)
    }
  }

  async function getUser(id: number) {
    try {
      user.value = new User()
      const options = {}
      const response = await axios.get('/api/users/' + id, options)
      user.value = new User(response.data)
    } catch (err: any) {
      console.error(err.message)
    }
  }

  async function updateUser(id: number) {
    try {
      const options = user.value
      await axios.put('/api/users/' + id, options)
    } catch (err: any) {
      console.error(err.message)
    }
  }

  async function deleteUser(id: number) {
    try {
      const options = {}
      await axios.delete('/api/users/' + id, options)
    } catch (err: any) {
      console.error(err.message)
    }
  }

  return { user, users, getUsers, getUser, newUser, createUser, updateUser, deleteUser }
})
