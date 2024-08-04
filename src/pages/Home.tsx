'use client';

import Detalii from '../components/Detalii';

export default function Home() {
  return (
    <div className='bg-yellow-200/20 min-h-screen'>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#af27dd] to-[#fcf689] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          />
        </div>
        <div className='mx-auto max-w-7xl py-32 sm:py-48 lg:py-56'>
          <div className='flex flex-col items-center lg:flex-row lg:items-center lg:justify-between'>
            <div className='text-center lg:text-left lg:w-1/2'>
              <h1 className='text-2xl mt-10  font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Miere Organică Pură de la Fermele Noastre
              </h1>
              <p className='mt-6 text-sm sm:text-lg leading-8 text-gray-600'>
                Experimentează gustul naturii cu mierea noastră 100% organică,
                recoltată din cele mai fine flori. Perfectă pentru sănătatea și
                bunăstarea ta.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
                <a
                  href='#'
                  className='rounded-md bg-[#FCA311] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#f2b655] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FCA311]'
                >
                  Comandă Acum
                </a>
                <a
                  href='#detalii'
                  className='text-sm font-semibold leading-6 text-gray-900'
                >
                  Află Mai Multe <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
            <div className='relative mt-10 lg:mt-0 lg:w-1/2 lg:flex lg:justify-center overflow-hidden rounded-lg'>
              <img
                src='/images/borcan-miere.png'
                alt='Borcan de Miere Organică'
                className='w-full max-w-md rounded-lg shadow-md h-[450px] object-cover  hover:opacity-80 transition-transform'
              />
            </div>
          </div>
        </div>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#89fcb1] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          />
        </div>
      </div>
      <div className=' '>
        <video
          src='/videos/miere-video-2.mp4'
          className='inset-0 w-full h-[350px] object-cover'
          style={{
            clipPath:
              'polygon(0 10%, 50% 0, 100% 10%, 100% 90%, 50% 100%, 0 90%)',
          }}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <Detalii />
    </div>
  );
}
