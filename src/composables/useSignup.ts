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

    console.log('user ', res.user)
    console.log('current user', projectAuth.currentUser)
    error.value = null
    return res
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message)
      error.value = err.message
    } else {
      console.log(err)
      error.value = String(err)
    }
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
