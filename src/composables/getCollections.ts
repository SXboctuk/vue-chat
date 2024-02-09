import { projectFirestore } from '@/firebase/config'
import type { chatMessageTypeWithCreatAtAndId } from '@/types'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { ref, watchEffect } from 'vue'

const getCollections = (collectionName: string) => {
  const documents = ref<chatMessageTypeWithCreatAtAndId[] | null>(null)
  const error = ref<string | null>(null)

  const collectionRef = collection(projectFirestore, collectionName)

  const snapshot = onSnapshot(
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
    (_e) => {
      documents.value = null
      error.value = 'Could not fetch data'
    }
  )
  watchEffect((onInvalidate) => {
    onInvalidate(() => {
      snapshot()
    })
  })

  return { error, documents }
}

export default getCollections
