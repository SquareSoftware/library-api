import mongoose from 'mongoose'
import { UserType } from '../../../entities/user-type'

export interface UserDocument {
  id: string

  name: string

  birth: Date

  email: string

  password: string

  phone: string

  type: UserType
}

export const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true
  },

  birth: {
    type: Date,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true
  }
})

export const UserMongoDBDocument = mongoose.model<UserDocument>('User', userSchema)
