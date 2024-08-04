import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

const navigation = [
  { name: 'Produsele noastre', href: 'produse' },
  { name: 'Despre noi', href: 'despre' },
  { name: 'Contact', href: 'contact' },
];
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-yellow-50/95 inset-x-0 top-0 z-50 border border-orange-950/20  border-t-0 fixed px-10'>
      <div className=' flex justify-between mt-2 items-center px-10'>
        <img src='/logo.png' alt='' className=' size-20' />
        <div className=' flex justify-center items-center'>
          <p className=' text-end mr-10 bg-transparent'>
            Comenzi telefonice: 08575755885
          </p>
          <div className=' float-end flex gap-2'>
            <div className=' flex items-center justify-center p-4 rounded-full bg-orange-200 hover:bg-orange-300 transition-all shadow-lg text-xl'>
              <FaFacebookF />
            </div>
            <div className=' flex items-center justify-center p-4 rounded-full bg-orange-200  hover:bg-orange-300 transition-all shadow-lg text-xl'>
              <TfiEmail />
            </div>
          </div>
        </div>
      </div>

      <div className=' w-full border  border-orange-950/20  mt-2 self-end'></div>
      <nav
        aria-label='Global'
        className='flex items-center justify-between p-6 lg:px-8'
      >
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Miere Bio</span>
            <h1 className=' font-bold text-3xl text-orange-400'>
              Miere<span className=' text-green-600'>Bio</span>
            </h1>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='h-6 w-6' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-lg font-semibold leading-6 text-gray-900 hover:text-gray-500 transition-all'
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-50' />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <h1 className=' font-bold text-3xl text-orange-400'>
                Miere<span className=' text-green-600'>Bio</span>
              </h1>
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
