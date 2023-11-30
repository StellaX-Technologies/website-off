import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
    return (
        <div className="w-96 h-10 left-[120px] top-[4293px] absolute">
        <div className="w-44 h-10 left-0 top-0 absolute">
            <Link href="/index"><div className="left-[48px] top-0 absolute text-white text-3xl font-bold font-['Montserrat'] leading-12">STELLAX</div></Link>
            <Image className="w-10 h-10 left-0 top-0 absolute" src="/" alt="" width={40} height={40}/>
        </div>
        <div className="w-96 h-6 left-[384px] top-[7px] absolute">
            <div className="left-0 top-0 absolute text-center text-white text-opacity-70 text-lg font-normal font-['Nunito Sans']">Support</div>
            <div className="left-[106px] top-0 absolute text-center text-white text-opacity-70 text-lg font-normal font-['Nunito Sans']">Privacy Policy</div>
            <div className="left-[257px] top-0 absolute text-center text-white text-opacity-70 text-lg font-normal font-['Nunito Sans']">Terms and Conditions</div>
        </div>
        <div className="w-72 left-[915px] top-[1px] absolute text-right text-white text-opacity-70 text-base font-normal font-['Nunito Sans'] leading-9">© 2023 StellaX, All Rights Reserved</div>
    </div>
    )
}