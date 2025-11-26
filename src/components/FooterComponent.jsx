import React from 'react'
import phoneIcon from '../assets/phone.svg'
import pinIcon from '../assets/pin.svg'
import nfiLogo from '../assets/nfilogo.png'

const FooterComponent = () => {
  return (
    <>
        <footer >

            {/* Footer Section 1 */}
            <div className='flex p-10 bg-gray-800 text-white'>

                {/* Location & Contact */}
                {/* <div className='flex justify-around text-center px-2 py-6 sm:p-6'>
                    <div>
                        <div className='flex justify-center gap-2'>
                            <img className='' src={pinIcon} alt="" />
                            <h1 className='font-bold text-xl'>Head Office</h1>
                        </div>
                        <p>Perumnas BLOK C No. 57</p>
                    </div>
                    <span className='border-l'></span>
                     <div>
                        <div className='flex justify-center gap-2'>
                            <img className='' src={phoneIcon} alt="" />
                            <h1 className='font-bold text-xl'>Call Us</h1>
                        </div>
                        <p>+62 856-9217-3125</p>
                    </div>
                </div> */}

                {/* Tagline */}
                <div className='flex flex-col text-xs gap-2 pr-32'>
                    <div className='bg-white pt-4 pl-10 pr-4 -translate-x-10 rounded-r-2xl'>
                        <img className='w-46 mb-4' src={nfiLogo} alt="" />
                    </div>
                    <div>
                        <h3 className='font-bold'>Email</h3>
                        <p>nocnfi@gmail.com</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Alamat</h3>
                        <p>Perumnas BLOK C No.57</p>
                    </div>

                </div>

                {/* Link */}
                <div className='w-full'>

                    <h2 className='text-start font-bold mb-4'>SITEMAP</h2>
                    <div className='flex gap-4 w-full text-xs'>
                        <div>
                            <h2 className='text-start font-bold'>Dapatkan Bantuan</h2>
                            <div className='text-start flex flex-col text-blue-400 text-sm'>
                                <a href="">Pemasangan Baru</a>
                                <a href="">Kendala Internet</a>
                                <a href="">Berhenti Langganan</a>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-start font-bold'>Tentang Kami</h2>
                            <div className='text-start flex flex-col text-blue-400 text-sm'>
                                <a href="">Profil Perusahaan</a>
                                <a href="">Hubungan Mitra</a>
                                <a href="">Layanan Kami</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
            {/* Copyright Setion */}
            <div className='w-full flex justify-center bg-gray-800 text-sm p-6'>
                <p className='bg-white text-gray-800 px-4 pt-2 pb-2 translate-y-6 rounded-t-2xl'>© 2025 PT Nada Freedom Indonesia - by NOC</p>
            </div>
        </footer>
    </>
  )
}

export default FooterComponent