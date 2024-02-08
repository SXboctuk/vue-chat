import { projectAuth } from '@/firebase/config'
import { ref } from 'vue'

const error = ref<null | string>(null)

const loguot = async () => {
  error.value = null
  try {
    await projectAuth.signOut()
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
      error.value = err.message
    } else {
      console.log(err)
    }
  }
}

const useLogout = () => {
  return { error, loguot }
}

export default useLogout
