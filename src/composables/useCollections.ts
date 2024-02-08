import { projectFirestore } from '@/firebase/config'
import { FieldValue, addDoc, collection } from 'firebase/firestore'
import { ref } from 'vue'

export type chatMessageType = {
  name: string
  message: string
  creatAt: FieldValue
}
const useCollections = (collectionName: string) => {
  const error = ref<null | string>(null)

  const addMessage = async (doc: chatMessageType) => {
    error.value = null

    try {
      await addDoc(collection(projectFirestore, collectionName), doc)
    } catch (e: unknown) {
      error.value = 'could not send message'
      console.log(e)
    }
  }

  return { error, addMessage }
}

export default useCollections
