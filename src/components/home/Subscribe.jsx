import React from 'react'

export default function Subscribe() {
  return (
    <div className=' max-w-[500px] w-full mx-auto text-center py-3 '>
        <h2 className='py-8  myclass font-montserrat text-[19px] '>Ready to watch ? Enter your Email to create restart your membership</h2>
        <div className="flex items-center justify-between ">
            <input type="text" className='w-[340px] font-montserrat  h-12 rounded-full px-4 border-white border-opacity-70 outline-none bg-gray-200 ' placeholder='Email Address' />
            <button className='h-12 font-montserrat  px-6 bg-red-600 rounded-full  '>Get Start →</button>
        </div>
    </div>
  )
}
