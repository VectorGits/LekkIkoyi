import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ReviewSlidder from './ReviewSlidder'

const Reviews = () => {
  return (
    <div className='pt-16 pb-16 bg-[#fef7f6]'>
        <div className='w-[80%] mx-auto'>
            <SectionHeading heading='Our Clients Reviews' />
            <div className='mt-14'>
                {/* REVIEWS SLIDER */}
                <ReviewSlidder />
            </div>
        </div>
    </div>
  )
}

export default Reviews