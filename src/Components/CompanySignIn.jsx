import React from 'react'

export default function CompanySignIn({icon}) {
  return (
    <div className='w-[40px] h-[40px] rounded-xl border-2 border-black cursor-pointer flex items-center justify-center hover:h-[45px] hover:w-[45px] transition-all duration-150'>
        <img src={icon} alt={icon} className='' width={25} height={25}/>
    </div>
  )
}
