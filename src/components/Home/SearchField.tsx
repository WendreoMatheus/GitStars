import { USERNAME_ATOM, GET_USER_ATOM } from "@/atoms/user.atom"
import { useForm } from 'react-hook-form'
import { useAtom, useSetAtom } from "jotai"
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from 'zod'

const searchFieldSchema = z.object({
    username: z.string()
    .min(1, { message: 'O nome de usuário deve ter pelo menos 1 caractere.' })
    .max(39, { message: 'O nome de usuário deve ter no máximo 39 caracteres.' })
})

const SearchField = () => {
  const [username, setUsername] = useAtom(USERNAME_ATOM)
  const searchUser = useSetAtom(GET_USER_ATOM)
  const {register, handleSubmit, formState: {errors}} = useForm<{username: string}>({
    resolver: zodResolver(searchFieldSchema)
  })
  const onSubmit = (data: {username: string}) => {
    setUsername(data.username)
    searchUser()
  }


  return (
    <div>
       <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <input
            placeholder='Digite seu nome de usuário'
            {...register('username')}
          />
        </div>
        {errors.username && (<p>{errors.username.message}</p>)}
        <button type="submit">Enviar</button>
      </form>
      <div>
        <h4>Nome de usuário armazenado no Jotai:</h4>
        <p>{username}</p>
      </div>
    </div>
    </div>
  )
}

export default SearchField

