import { projectAuth } from '@/firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref } from 'vue'

const error = ref<null | string>(null)

const signup = async (email: string, password: string, displayName: string) => {
  error.value = null

  try {
    console.log(email)
    const res = await createUserWithEmailAndPassword(projectAuth, email, password)

    if (!res) {
      throw new Error('Could not complete the signup')
    }
    await updateProfile(res.user, { displayName: displayName })

    error.value = null
    return res
  } catch (err: unknown) {
    if (err instanceof Error && err.message) {
      if (err.message === 'auth/email-already-exists') {
        error.value = 'Email already exists'
      }
    }
    error.value = 'Registry error, please try again'
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
