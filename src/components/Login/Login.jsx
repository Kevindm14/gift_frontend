import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
// import { setToken } from '../../helpers/authHelper'

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required()
})

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onHandleSubmit = async (data) => {
    const options = {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email, password: data.password })
    }

    // eslint-disable-next-line no-undef
    const res = await fetch('http://localhost:3000/auth/login', options)
    const dataRes = await res.json()
    console.log(dataRes)
  }

  return (
    <div className='flex'>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='mx-20'>
          <h1 className='text-center text-4xl font-extrabold mb-10'>Bienvenido a Live Gift</h1>
          <form onSubmit={handleSubmit(onHandleSubmit)}>

            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Correo Electronico</label>
              <input
                {...register('email')}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='pauljones@test.com'
              />
              <p className='mt-1 text-red-500 text-xs italic'>{errors.email?.message}</p>
            </div>

            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Contraseña</label>
              <input
                {...register('password')}
                type='password'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='***********'
              />
              <p className='mt-1 text-red-500 text-xs italic'>{errors.password?.message}</p>
            </div>

            <div className='flex justify-between space-x-2'>
              <input type='submit' value='Ir allá!' className='w-full py-2 px-4 bg-gray-800 hover:bg-gray-600 text-white cursor-pointer' />
              <Link className='rounded-none bg-gray-800 hover:bg-gray-600 w-full text-center text-white py-2 px-7' to='/signup'>Registrarse</Link>
            </div>
          </form>
        </div>
      </div>

      <div className='w-full h-screen bg-slate-800' />
    </div>
  )
}
