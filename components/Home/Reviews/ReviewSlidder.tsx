"use client"

import { userReviewData } from '@/Data/data';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from './ReviewCard';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 }, // Adjusted min to 1024 for wider screens
        items: 3, // Show 4 items
        slidesToSlide: 1, // Slide one item at a time
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 }, // Adjusted for better tablet responsiveness
        items: 2,
        slidesToSlide: 1, 
    },
    mobile: {
        breakpoint: { max: 768, min: 0 }, // Mobile view
        items: 1,
        slidesToSlide: 1,
    },
};

const ReviewSlidder = () => {
  return (
    <Carousel
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite
        responsive={responsive}
    >
        {userReviewData.map((Review) => {
            return <div key={Review.id}>
                <ReviewCard review={Review}/>
            </div>
        })}
    </Carousel>
  )
}

export default ReviewSlidder