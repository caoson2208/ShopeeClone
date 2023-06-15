import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { rules } from 'src/utils/rule'

interface FormData {
  email: string
  password: string
  confirm_password: string
}
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  console.log('error', errors)
  return (
    <div className='bg-orange'>
      <div className='mx-auto max-w-7xl px-4'>
        <div
          className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-24
         lg:pr-10'
        >
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Kí</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='w-full border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email '
                  {...register('email', rules.email)}
                />
                <div className='mt-1 min-h-[1.25rem] text-red-500'>{errors.email?.message}</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  className='w-full border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password '
                  {...register('password', rules.password)}
                />
                <div className='mt-1 min-h-[1.25rem] text-red-500'>{errors.password?.message}</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  className='w-full border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Confirm Password '
                  {...register('confirm_password', rules.confirm_password)}
                />
                <div className='mt-1 min-h-[1.25rem] text-red-500'>{errors.confirm_password?.message}</div>
              </div>

              <button className='mt-3 w-full cursor-pointer bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:bg-red-600'>
                Đăng kí
              </button>
              <div className='mt-8 flex justify-center'>
                <span className='mr-1 text-gray-400'>Bạn đã có tài khoản chưa?</span>
                <Link to='/login' className='text-red-500'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
