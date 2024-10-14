import SectionHeading from '@/components/Helper/SectionHeading'
import { appartmentTypeData } from '@/Data/data'
import React from 'react'
import AppartmentTypeCard from './AppartmentTypeCard'

const AppartmentTypes = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto '>
        <SectionHeading heading='Appartments Types'/>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xs:grid-cols-5 mt-mt-10 md:mt-20 gap-8 items-center'>
            {appartmentTypeData.map((type)=> {
                return <div key={type.id}>
                    <AppartmentTypeCard type={type}/>
                </div>
            })}
        </div>
      </div>

    </div>
  )
}

export default AppartmentTypes
