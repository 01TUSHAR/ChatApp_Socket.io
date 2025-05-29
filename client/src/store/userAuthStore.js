import { create } from 'zustand'
import { axiosInstance } from '../lib/axios'

export const useAuthStore = create((set) => ({
  authUser: null,
  isSignUp: false,
  isLoggin: false,
  isUpdateProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get('/check')
      set({ authUser: res.user })
    } catch (error) {
      console.log('error in check auth', error)

      set({ authUser: null })
    } finally {
      set({ isCheckingAuth: false })
    }
  },
}))
