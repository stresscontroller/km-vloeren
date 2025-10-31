import React from 'react'

type FormHeadTextProps = {
    headerText: string
    subText: string
}

const FormHeadText = ({headerText, subText}: FormHeadTextProps) => {
  return (
    <div>
        <h2 className='text-2xl font-semibold'>{headerText}</h2>
        <p className='text-grey text-sm max-w-[600px]'>{subText}</p>
    </div>
  )
}

export default FormHeadText