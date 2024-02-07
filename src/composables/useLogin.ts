import { projectAuth } from '@/firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const error = ref<null | string>(null)

const login = async (email: string, password: string) => {
  error.value = null

  try {
    const res = await signInWithEmailAndPassword(projectAuth, email, password)
    error.value = null
    return res
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message)
    } else {
      console.log(err)
    }
    error.value = 'Incorrect login credentials'
  }
}

const useLogin = () => {
  return { error, login }
}

export default useLogin
