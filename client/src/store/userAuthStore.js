import axios from 'axios'
import { create } from 'zustand'
import { axiosInstance } from '../lib/axios.js'

export const useAuthStore = create((set)=>({
    authUser: null,
    isSignup: false,
    isLoggingIn: false,
    isUpdateProfile: false,

    isCheckingAuth: true,

    checkAuth: async() =>{
        try {
            const res = await axiosInstance.get('/auth/check');
            
            set({authUser: res.user})
        } catch (error) {
            console.log("Error Zustand: ",error)
          set({authUser: null})
        }
        finally{
            set({isCheckingAuth: false})
        }
    } 
}))