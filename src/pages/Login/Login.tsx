import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-24 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm'>
              <div className='text-2xl'>Đăng Nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='w-full border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email '
                />
                <div className='mt-1 min-h-[1rem] text-red-500'></div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  className='w-full border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password '
                />
                <div className='mt-1 min-h-[1rem] text-red-500'></div>
              </div>
              <div className='mt-3 w-full cursor-pointer bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:bg-red-600'>
                Đăng nhập
              </div>
              <div className='mt-8 flex justify-center'>
                <span className='mr-1 text-gray-400'>Bạn mới biết đến Shopee?</span>
                <Link to='/register' className='text-red-500'>
                  Đăng kí
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
