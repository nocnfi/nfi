import React from 'react'
import nfilogo from '../assets/nfilogo.png'
import hamMenu from '../assets/ham-menu.svg'
import hamMenuClose from '../assets/ham-menu-close.svg'

const HeaderComponent = () => {
  return (
    <>
        <header className='z-50 flex my-4 mx-12 fixed w-full'>
            <div className='backdrop-blur-md rounded-xl p-2 bg-white/60'><img className='w-40' src={nfilogo} alt="nfilogo" /></div>
            <div className='flex justify-center w-full'>
              <nav className='flex backdrop-blur-md rounded-full p-2 bg-white/60 text-sm text-gray-600'>
                <button className='w-30 rounded-full p-2 bg-white/50 cursor-pointer font-bold'>BERANDA</button>
                <button className='w-30 cursor-pointer hover:font-bold'>PROFIL</button>
                <button className='w-30 cursor-pointer hover:font-bold'>LAYANAN</button>
                <button className='w-30 cursor-pointer hover:font-bold'>KONTAK</button>
              </nav>
            </div>
            <button className='sm:hidden cursor-pointer'><img className='w-8' src={hamMenu} alt="" /></button>
        </header>
    </>
  )
}

export default HeaderComponent