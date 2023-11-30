import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
    return (
        <nav className="">
            <div className="h-10 left-[120px] top-[42px] absolute">
                <Image className="left-0 top-0 absolute" src="/" alt="Logo" width={40} height={40}/>
                <div className="left-[48px] top-0 absolute text-white text-3xl font-bold font-['Montserrat'] leading-10">STELLAX</div>
            </div>
            <div className="left-[523px] top-[50px] right-[507px] absolute justify-end items-start gap-10 inline-flex">
                <div className="text-right"><span className="text-indigo-600 text-lg font-semibold font-['Nunito Sans']"><p>Home</p></span></div>
                <div className="text-right text-white text-opacity-70 text-lg font-normal font-['Nunito Sans']">Services</div>
                <div className="text-right text-white text-opacity-70 text-lg font-normal font-['Nunito Sans'] overflow-visible w-auto"><p>Our Project</p></div>
                <div className="text-right text-white text-opacity-70 text-lg font-normal font-['Nunito Sans'] overflow-visible w-auto"><p>About us</p></div>
            </div>
            <div className="w-40 h-11 left-[1163px] top-[40px] absolute">
                <div className="w-40 h-11 left-0 top-0 absolute rounded border border-white backdrop-blur-none" />
                <div className="w-36 left-[8px] top-[12px] absolute text-center text-white text-base font-normal font-['Nunito Sans']"><p>Contact us</p></div>
            </div>
        </nav>
        
    )
}
