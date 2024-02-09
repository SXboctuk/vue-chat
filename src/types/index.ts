import type { Timestamp } from 'firebase/firestore'

export type chatMessageType = {
  name: string
  message: string
}
export type chatMessageWithCreatAt = chatMessageType & { creatAt: Timestamp }

export type chatMessageTypeWithCreatAtAndId = chatMessageWithCreatAt & { id: string }
