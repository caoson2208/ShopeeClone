import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import { getRules } from 'src/utils/rule'

interface FormData {
  email: string
  password: string
  confirm_password: string
}
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules(getValues)
  const onSubmit = handleSubmit(
    (data) => {
      // console.log(data)
    },
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )
  /**
   * In ra dữ liệu nhập vào
   */
  // const value = watch()
  // console.log(value)

  /**
   * In ra lỗi
   */
  // console.log('error', errors)
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div
          className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-24
         lg:pr-10'
        >
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Kí</div>
              <Input
                className='mt-8'
                type='email'
                name='email'
                placeholder='Email'
                register={register}
                rules={rules.email}
                errorMessage={errors.email?.message}
              />
              <Input
                className='mt-2'
                type='password'
                name='password'
                placeholder='Password'
                autoComplete='on'
                register={register}
                rules={rules.password}
                errorMessage={errors.password?.message}
              />
              <Input
                className='mt-2'
                type='password'
                name='confirm_password'
                placeholder='Password'
                autoComplete='on'
                register={register}
                rules={rules.confirm_password}
                errorMessage={errors.confirm_password?.message}
              />

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
