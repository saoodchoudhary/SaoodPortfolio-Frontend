import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa";
const clientFeedback = [
    {
        name: "Mohammad Alzayed",
        rating: 5,
        where: "on Upwork",
        feedback: "Saood is a brilliant website developer! He turned my vision into a reality with a stunning website. Exceptional creativity, attention to detail, and a seamless process. Highly recommend Saood for anyone seeking a top-notch website. Thank you for your amazing talent.",
        image: "/images/person3.jpg"
    },
    {
        name: "Usman",
        rating: 5,
        where: "on Upwork",
        feedback: "Saud is a very professional and expert developer in tailwind CSS and Next JS. want to work with him in the future.",
        image: "/images/person1.jpg"
    },

]

const ClientFeedback = () => {
    return (
        <div className='bg-green-100 shadow border max-w-[1200px] mx-3 xl:mx-auto rounded-md py-10'>
            <div>
                <div>
                    {/* <h2 className='text-center text-green-700 text-2xl font-medium'>Client Feedback</h2> */}
                    <h2 className='text-center text-green-700 text-2xl font-medium'>What Our Clients Say</h2>
                </div>
                <div className='flex gap-5 mt-3 justify-center flex-wrap'>

                    {clientFeedback.map((val, idx) => {
                        return (
                            <div key={idx} className='bg-green-600 relative mt-14 text-white shadow border rounded-xl px-5 flex flex-col w-[330px]'>
                                    <Image src={"/images/profile.png"} className='absolute -top-14 border-4 border-white rounded-full left-1/2 -translate-x-[50%]' width={90} height={90} alt='profile'/>
                                <div className='flex mt-8 flex-col justify-center items-center'>
                                    <div className='text-lg font-medium mt-2'>{val.name}</div>
                                    <div className='text-[11px] text-center'><a className='text-white hover:underline italic' href='https://www.upwork.com/freelancers/~01165a0bcf8202bb22' target='_blank'>{val.where}</a></div>
                                    <div className='flex justify-center gap-1 mt-2'>
                                    {[1,2,3,4,5].map((val,i)=>{
                                    console.log("hel")
                                    return <FaStar key={i} className='text-yellow-400 text-sm'/>
                                })}
                                </div>
                                </div>  
                                <div className='mt-2 mb-3 text-sm text-center'>&quot;{val.feedback}&quot;</div>
                              
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default ClientFeedback
