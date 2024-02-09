import { projectFirestore } from '@/firebase/config'
import type { chatMessageTypeWithCreatAtAndId } from '@/types'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { ref } from 'vue'

const getCollections = (collectionName: string) => {
  const documents = ref<chatMessageTypeWithCreatAtAndId[] | null>(null)
  const error = ref<string | null>(null)

  const collectionRef = collection(projectFirestore, collectionName)

  onSnapshot(
    query(collectionRef, orderBy('creatAt')),
    (snapshot) => {
      const result: chatMessageTypeWithCreatAtAndId[] = []
      snapshot.docs.forEach((doc) => {
        if (!doc.metadata.hasPendingWrites) {
          // doc.data().createdAt &&
          result.push({ ...doc.data(), id: doc.id } as chatMessageTypeWithCreatAtAndId)
        }
      })
      documents.value = result
      error.value = null
    },
    (e) => {
      documents.value = null
      error.value = 'Could not fetch data'
    }
  )

  return { error, documents }
}

export default getCollections
