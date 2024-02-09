import { projectFirestore, timestamp } from '@/firebase/config'
import type { chatMessageType } from '@/types'
import { addDoc, collection } from 'firebase/firestore'
import { ref } from 'vue'

const useCollections = (collectionName: string) => {
  const error = ref<null | string>(null)

  const addMessage = async (doc: chatMessageType) => {
    error.value = null

    try {
      await addDoc(collection(projectFirestore, collectionName), { ...doc, creatAt: timestamp() })
    } catch (e: unknown) {
      error.value = 'could not send message'
      console.log(e)
    }
  }

  return { error, addMessage }
}

export default useCollections
