import React from 'react'
import nfilogo from '../assets/nfilogo.png'
import hamMenu from '../assets/ham-menu.svg'
import hamMenuClose from '../assets/ham-menu-close.svg'

const HeaderComponent = () => {
  return (
    <>
        <header className='flex px-4 sm:px-8 py-4 justify-between fixed w-full bg-white'>
            <div><img className='w-48 sm:w-64' src={nfilogo} alt="nfilogo" /></div>
            <nav className='sm:flex hidden'>
              <button className='w-20 cursor-pointer text-blue-400 font-bold'>BERANDA</button>
              <button className='w-20 cursor-pointer hover:font-bold'>PROFIL</button>
              <button className='w-20 cursor-pointer hover:font-bold'>LAYANAN</button>
              <button className='w-20 cursor-pointer hover:font-bold'>KONTAK</button>
            </nav>
            <button className='sm:hidden cursor-pointer'><img className='w-8' src={hamMenu} alt="" /></button>
        </header>
    </>
  )
}

export default HeaderComponent