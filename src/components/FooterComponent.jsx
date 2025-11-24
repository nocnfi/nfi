import React from 'react'
import phoneIcon from '../assets/phone.svg'
import pinIcon from '../assets/pin.svg'
import nfiLogo from '../assets/nfilogo.png'

const FooterComponent = () => {
  return (
    <>
        <footer >

            {/* Footer Section 1 */}
            <div className='p-2 sm:p-10 bg-blue-100 xl:mx-64'>

                {/* Location & Contact */}
                <div className='flex justify-around text-center px-2 py-6 sm:p-6'>
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
                </div>

                {/* Tagline */}
                <div className='flex flex-col items-center p-6 text-center gap-4'>
                    <img className='w-32' src={nfiLogo} alt="" />
                    <p>Kami selalu mengedepankan Kepuasan dan Kenyamanan Pelanggan dengan Rekomendasi Terbaik.</p>
                </div>

                {/* Link */}
                <div className='flex justify-around text-center p-6'>
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
            
            {/* Copyright Setion */}
            <div className='w-full flex justify-center bg-gray-800 text-white p-6'>
                <p>© 2025 PT Nada Freedom Indonesia - by NOC</p>
            </div>
        </footer>
    </>
  )
}

export default FooterComponent