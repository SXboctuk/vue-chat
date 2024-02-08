import { projectAuth } from '@/firebase/config'
import type { User } from 'firebase/auth'
import { ref } from 'vue'

const user = ref<User | null>(projectAuth.currentUser)

projectAuth.onAuthStateChanged((_user) => {
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser
