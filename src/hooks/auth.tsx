import { createContext, useContext, useState, useEffect, ReactNode } from "react"

import { api } from "../services/api"

export interface IUser {
  name?: string
  email: string
  password?: string
  old_password?: string
  avatar?: string
}

interface IData {
  user: IUser
  token: string
}

export interface IUpdateProfile {
  user: IUser
  avatarFile: string | null
}

interface AuthContextType {
  user: IUser
  loading: boolean
  updateProfile: ({ user, avatarFile }: IUpdateProfile) => Promise<void>
  signIn: ({ email, password }: IUser) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<IData>({} as IData)
  const [loading, setLoading] = useState(false)


  async function signIn({ email, password }: IUser) {

    try {
      setLoading(true)

      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data as IData

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setData({ user, token })

    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    } finally {
      setLoading(false)
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketnotes:token")
    localStorage.removeItem("@rocketnotes:user")

    setData({} as IData)
  }

  async function updateProfile({ user, avatarFile }: IUpdateProfile) {
    try {
      setLoading(true)

      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put("/users", user)
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

      setData({ user, token: data.token })
      alert("Perfil atualizado!")

    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil.")
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token")
    const user = localStorage.getItem("@rocketnotes:user")

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      user: data.user,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  )

}

function useAuth(): AuthContextType {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
