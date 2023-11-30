import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from './footer'
import NavBar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <main className="bg-zinc-900 h-full">
    <div className="w-96 h-96 left-[1000.24px] top-[3230.31px] absolute origin-top-left rotate-[-125.63deg] bg-gradient-to-b from-indigo-600 to-indigo-600 rounded-full blur-3xl bg-opacity-10" />
    <div className="w-96 h-96 left-[998.44px] top-[305px] absolute origin-top-left rotate-[65.71deg] bg-gradient-to-b from-amber-500 to-pink-500 rounded-full blur-3xl bg-opacity-10" />
    <div className="w-96 h-96 left-[1663.79px] top-[1759px] absolute origin-top-left rotate-[65.71deg] bg-gradient-to-b from-amber-500 to-pink-500 rounded-full blur-3xl bg-opacity-10" />
    <div className="w-96 h-96 right-[401.52px] top-[231.97px] absolute origin-top-left rotate-[-54.37deg] bg-gradient-to-b from-indigo-600 to-indigo-600 rounded-full blur-3xl bg-opacity-10" />
    <NavBar/>
    <div className="w-96 h-96 left-[120px] top-[230px] absolute">
        <p className="w-96 left-0 top-0 absolute text-white text-7xl font-normal font-['Denk One'] leading-12">Build Your Awesome Platform</p>
        <p className="w-96 left-[3px] top-[276px] absolute text-white text-opacity-70 text-xl font-normal font-['Nunito Sans'] leading-12">StellaX Technologies is an agency that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
    </div>
    <div className="w-96 h-96 left-[952.50px] top-[259px] absolute origin-top-left rotate-[23.64deg] rounded-3xl border-2 border-white" />
    <div className="w-96 h-96 left-[750px] top-[107px] absolute">
        <div className="w-96 h-96 left-[151px] top-0 absolute origin-top-left rotate-[23.64deg] bg-indigo-600 rounded-3xl border-4 border-white" />
        <div className="w-96 h-96 left-0 top-0 absolute">
            <Image className="" src="/stellax-website\public\young-attractive-handsome-guy-feels-delighted-gladden-amazed-min_ccexpress1.jpg" alt="Handsome-Guy" width={908} height={813}/>
        </div>
    </div>
    
    <div className="h-96 left-[120px] top-[971px] absolute">
        <div className="w-96 h-96 left-0 top-[190px] absolute">
            <Image className="left-0 top-0 absolute" src="/stellax-website\public\meeting.png" alt="Video PlaceHolder" width={384} height={384}/>
            <div className="w-32 h-32 left-[538px] top-[273px] absolute">
            </div>
        </div>
        <div className="w-96 h-36 left-0 top-0 absolute">
            <div className="w-96 left-[612px] top-0 absolute text-white text-opacity-70 text-xl font-normal font-['Nunito Sans'] leading-10">Watch this one minute video so you understand why you should use our services!</div>
            <div className="w-96 left-0 top-0 absolute text-white text-6xl font-normal font-['Denk One'] leading-12">Why StellaX Is The Best Choice?</div>
        </div>
    </div>
    <div className="w-96 h-96 left-0 top-[3737px] absolute">
        <div className="w-96 h-96 left-0 top-0 absolute bg-zinc-900 bg-opacity-50" />
        <div className="w-96 left-[120px] top-[187px] absolute text-white text-6xl font-normal font-['Denk One']">Contact us for the service you want to use</div>
        <div className="w-52 h-14 left-[1119px] top-[223px] absolute rounded">
            <div className="w-52 h-14 left-0 top-0 absolute bg-indigo-600 rounded" />
            <div className="w-52 left-0 top-[17px] absolute text-center text-white text-xl font-bold font-['Nunito Sans']">Contact us</div>
        </div>
    </div>
    
    <div className="w-52 h-14 left-[123px] top-[673px] absolute">
        <div className="w-52 h-14 left-0 top-0 absolute bg-indigo-600 rounded" />
        <div className="w-36 h-7 left-[27px] top-[16px] absolute justify-center items-center gap-2 inline-flex">
            <div className="text-white text-xl font-bold font-['Nunito Sans']">Our Services</div>
        </div>
    </div>
    <div className="w-96 left-[120px] top-[1981px] absolute">
        <div className="w-96 h-96 left-0 top-[190px] absolute">
            <div className="w-96 h-72 left-0 top-0 absolute">
                <div className="w-96 h-72 left-[408px] top-0 absolute">
                    <div className="w-96 h-72 left-0 top-0 absolute" />
                    <div className="w-72 h-52 left-[43px] top-[48px] absolute">
                        <div className="w-72 h-28 left-0 top-[89px] absolute">
                            <div className="w-48 left-[50px] top-0 absolute text-center"><span className="text-white text-3xl font-semibold font-['Nunito Sans']">UI/UX D</span><span className="text-white text-3xl font-semibold font-['Nunito Sans']">e</span><span className="text-white text-3xl font-semibold font-['Nunito Sans']">signer</span></div>
                            <div className="w-72 left-0 top-[58px] absolute text-center text-white text-opacity-70 text-xl font-normal font-['Nunito Sans'] leading-7">We provide UI/UX Design services, and of course with the best quality</div>
                        </div>
                        <div className="w-16 h-16 left-[115px] top-0 absolute">
                            <div className="w-8 h-8 left-[19px] top-[18px] absolute justify-center items-center inline-flex">
                                <div className="w-8 h-8 relative">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-96 h-72 left-[816px] top-0 absolute">
                    <div className="w-96 h-72 left-0 top-0 absolute" />
                    <div className="w-72 h-52 left-[43px] top-[48px] absolute">
                        <div className="w-72 h-28 left-0 top-[89px] absolute">
                            <div className="left-[44px] top-0 absolute text-center"><span className="text-white text-3xl font-semibold font-['Nunito Sans']">Graphic Designe</span><span className="text-white text-3xl font-semibold font-['Nunito Sans']">r</span></div>
                            <div className="w-72 left-0 top-[58px] absolute text-center text-white text-opacity-70 text-xl font-normal font-['Nunito Sans'] leading-7">We provide Graphic Design services, with the best designers</div>
                        </div>
                        <div className="w-16 h-16 left-[115px] top-0 absolute">
                            <div className="w-8 h-8 left-[19px] top-[18px] absolute justify-center items-center inline-flex">
                                <div className="w-8 h-8 relative">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-96 h-72 left-0 top-0 absolute">
                    <div className="w-96 h-72 left-0 top-0 absolute" />
                    <div className="w-72 h-52 left-[43px] top-[48px] absolute">
                        <div className="w-72 h-28 left-0 top-[89px] absolute">
                            <div className="w-48 left-[50px] top-0 absolute text-center"><span className="text-white text-3xl font-semibold font-['Nunito Sans']">Developm</span><span className="text-white text-3xl font-semibold font-['Nunito Sans']">e</span><span className="text-white text-3xl font-semibold font-['Nunito Sans']">nt</span></div>
                            <div className="w-72 left-0 top-[58px] absolute text-center text-white text-opacity-70 text-xl font-normal font-['Nunito Sans'] leading-7">Create a platform with the best and coolest quality from us.</div>
                        </div>
                        <div className="w-16 h-16 left-[115px] top-0 absolute">
                            <div className="w-8 h-8 left-[19px] top-[18px] absolute justify-center items-center inline-flex">
                                <div className="w-8 h-8 relative">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-96 h-72 left-0 top-[324px] absolute">
                <div className="w-96 h-72 left-[816px] top-0 absolute">
                    <div className="w-96 h-72 left-0 top-0 absolute" />
                    <div className="w-72 h-52 left-[43px] top-[48px] absolute">
                        <div className="w-72 h-28 left-0 top-[89px] absolute">
                            <div className="left-[68px] top-0 absolute text-center text-white text-3xl font-semibold font-['Nunito Sans']">Videography</div>
                            <div className="w-72 left-0 top-[58px] absolute text-center text-white text-opacity-70 text-xl font-normal font-['Nunito Sans'] leading-7">Create a platform with the best and coolest quality from us.</div>
                        </div>
                        <div className="w-16 h-16 left-[115px] top-0 absolute">
                            <div className="w-8 h-8 left-[19px] top-[18px] absolute justify-center items-center inline-flex">
                                <div className="w-8 h-8 relative">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-96 h-72 left-0 top-0 absolute">
                    <div className="w-96 h-72 left-0 top-0 absolute" />
                    <div className="w-72 h-52 left-[43px] top-[48px] absolute">
                        <div className="w-72 h-28 left-0 top-[89px] absolute">
                            <div className="left-[52px] top-0 absolute text-center text-white text-3xl font-semibold font-['Nunito Sans']">Motion Graphic</div>
                            <div className="w-72 left-0 top-[58px] absolute text-center text-white text-opacity-70 text-xl font-normal font-['Nunito Sans'] leading-7">Create a platform with the best and coolest quality from us.</div>
                        </div>
                        <div className="w-16 h-16 left-[115px] top-0 absolute">
                            <div className="w-8 h-8 left-[19px] top-[18px] absolute justify-center items-center inline-flex">
                                <div className="w-8 h-8 relative">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-96 h-72 left-[408px] top-0 absolute">
                    <div className="w-96 h-72 left-0 top-0 absolute" />
                    <div className="w-72 h-52 left-[43px] top-[48px] absolute">
                        <div className="w-72 h-28 left-0 top-[89px] absolute">
                            <div className="w-48 left-[50px] top-0 absolute text-center text-white text-3xl font-semibold font-['Nunito Sans']">Photography</div>
                            <div className="w-72 left-0 top-[58px] absolute text-center text-white text-opacity-70 text-xl font-normal font-['Nunito Sans'] leading-7">We provide Photography services, and of course with the best quality</div>
                        </div>
                        <div className="w-16 h-16 left-[115px] top-0 absolute">
                            <div className="w-8 h-8 left-[19px] top-[18px] absolute justify-center items-center inline-flex">
                                <div className="w-8 h-8 relative">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-96 left-[253px] top-0 absolute text-center text-white text-6xl font-normal font-['Denk One'] leading-12">The Service We Provide For You</div>
    </div>
    <div className="w-96 h-96 left-[120px] top-[2945px] absolute">
        <div className="w-96 h-96 left-0 top-[149px] absolute">
            <div className="w-96 h-72 left-0 top-0 absolute">
                <div className="w-96 h-72 left-0 top-0 absolute bg-zinc-900 rounded-2xl" />
                <Image className="left-[24px] top-[24px] absolute rounded-xl" src="/" alt="" width={320} height={256}/>
            </div>
            <div className="w-96 h-72 left-[408px] top-[58px] absolute">
                <div className="w-96 h-72 left-0 top-0 absolute bg-zinc-900 rounded-2xl" />
                <Image className="left-[24px] top-[24px] absolute rounded-xl" src="/" alt="" width={320} height={256}/>
            </div>
            <div className="w-96 h-72 left-[816px] top-[116px] absolute">
                <div className="w-96 h-72 left-0 top-0 absolute bg-zinc-900 rounded-2xl" />
                <Image className="left-[24px] top-[24px] absolute rounded-xl" src="/" alt="" width={320} height={256}/>
            </div>
        </div>
        <div className="left-0 top-0 absolute text-white text-6xl font-extrabold font-['Nunito Sans'] line">Our Awesome Portofolio</div>
        <div className="w-12 h-2 left-[576px] top-[616px] absolute">
            <div className="w-4 h-2 left-0 top-0 absolute bg-indigo-600 rounded-lg" />
            <div className="w-2 h-2 left-[24px] top-0 absolute bg-neutral-900 rounded-full" />
            <div className="w-2 h-2 left-[40px] top-0 absolute bg-neutral-900 rounded-full" />
        </div>
    </div>
    <div className="w-96 h-96 left-[-312px] top-[2049.59px] absolute origin-top-left rotate-[-54.37deg] bg-gradient-to-b from-indigo-600 to-indigo-600 rounded-full blur-3xl" />
    <div className="w-28 h-32 left-[618.40px] top-[666px] absolute">
    </div>
    <div className="w-28 h-32 left-[184px] top-[1948px] absolute">
    </div>
    <div className="origin-top-left rotate-[-27.37deg] w-16 h-20 left-[1190px] top-[3003.50px] absolute">
        <div className="w-12 h-12 left-0 top-0 absolute origin-top-left rotate-[-27.37deg] rounded-full border-4 border-white" />
        <div className="w-12 h-12 left-[23.05px] top-[15.44px] absolute origin-top-left rotate-[-27.37deg] rounded-full border border-white" />
    </div>
    <div className="left-[1260.13px] top-[2084.03px] absolute origin-top-left rotate-[-31.42deg]"><Image 
    src="add.svg"
    alt=""
    width={40}
    height={40}
    /></div>
    <div className="w-10 h-10 left-[1268px] top-[3806px] absolute"><Image 
    src="Group1.svg"
    alt=""
    width={40}
    height={40}
    /></div>
    <div className="w-10 h-10 left-[110.01px] top-[2788.03px] absolute origin-top-left rotate-[25.34deg]"><Image 
    src=".svg"
    alt=""
    width={40}
    height={40}
    /></div>
    <div className="w-12 h-14 left-[1269px] top-[184px] absolute">
        <div className="w-10 h-10 left-0 top-0 absolute rounded-full border-2 border-white" />
        <div className="w-10 h-10 left-[11px] top-[20px] absolute rounded-full border border-white" />
    </div>
    <div className="w-12 h-14 left-[159px] top-[4119px] absolute">
        <div className="w-10 h-10 left-0 top-0 absolute rounded-full border-2 border-white" />
        <div className="w-10 h-10 left-[11px] top-[20px] absolute rounded-full border border-white" />
    </div>

    <Footer/>
</main>
  )
}
