import React from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import BG from '../../assets/LoginBG.webp'

import loginService from '../../services/loginService'
import { useNavigate } from 'react-router-dom'
import piezasService from '../../services/piezasService'
import herramientasService from '../../services/herramientasService'
import ordenesService from '../../services/ordenesService'
const containerStyles = {
  backgroundImage: `url(${BG})`,
  backgroundSize: 'cover',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
}
interface loginProps {
  setUser: any
}

export default function Index ({ setUser }: loginProps): JSX.Element {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigator = useNavigate()
  const login = async (): Promise<void> => {
    try {
      const response = await loginService.loginUser({
        user: username,
        password
      })
      console.log(response)
      piezasService.setToken((response.token as string))
      herramientasService.setToken((response.token as string))
      ordenesService.setToken((response.token as string))
      window.localStorage.setItem('loggedUser', JSON.stringify(response))
      setUser(response)
      navigator('/piezas')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-center" style={containerStyles}>
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-4">
        <div className="text-center mb-5">
          <img src="/iusa-logo.webp" alt="hyper" height={50} className="mb-3" />
          <div className="text-900 text-3xl font-medium mb-3">Bienvenido</div>
        </div>

        <div>
          <label htmlFor="user" className="block text-900 font-medium mb-2">
            Usuario
          </label>
          <InputText
            id="user"
            type="text"
            placeholder="Usuario"
            className="w-full mb-3"
            onInput={(e) => {
              const target = e.target as HTMLInputElement
              setUsername(target.value)
            }}
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Contraseña
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="Contraseña"
            onInput={(e) => {
              const target = e.target as HTMLInputElement
              setPassword(target.value)
            }}
            className="w-full mb-3"
          />

          <div className="flex align-items-center justify-content-between mb-6">
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
              Forgot your password?
            </a>
          </div>

          <Button
            severity="danger"
            label="Sign In"
            icon="pi pi-user"
            className="w-full"
            onClick={login}
          />
        </div>
      </div>
    </div>
  )
}
