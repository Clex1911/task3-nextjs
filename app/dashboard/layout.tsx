import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-black text-white p-[20px]'>
        <p>Ini layout khusus dashboard sdv</p>
        {children}
    </div>
  )
}
