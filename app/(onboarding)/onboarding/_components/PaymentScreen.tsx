import React from 'react'
import PaymentAccordion from './PaymentAccordion'
import PaymentForm from './PaymentForm'
import Progressbar from '@/components/shared/Progressbar'
import ActionButton from './ActionButton'

const PaymentScreen = () => {
  return (
    <>
    <div className='wrapper flex gap-10 mb-10'>
      <div>
        <p className='text-2xl text-[#0156A8] font-medium'>Last Step</p>
        <h1 className='font-bold text-[2.375rem] text-nowrap mb-8'>Complete payment</h1>
        <PaymentAccordion />
      </div>
      <div className='flex-1'>
        <PaymentForm />
      </div>
    </div>
    <div className="mt-auto">
        <Progressbar current={0} next={95} />
        <ActionButton  />
      </div>
    </>
  )
}

export default PaymentScreen