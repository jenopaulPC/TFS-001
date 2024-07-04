import React from 'react'

const Images = ({
    src= "",
    alt= ""
}) => {
  return (
    <div>
        <img src={src} alt={alt && alt} className='w-100' />
    </div>
  )
}

export default Images