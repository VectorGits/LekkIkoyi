// import React from 'react'
// import { FaQuoteRight, FaStar } from 'react-icons/fa'

// type  Props = {
//     review: {
//         id: number;
//         name: string;
//         profession: string;
//         review:string
//     }

// }


// const ReviewCard = ({review}: Props) => {
//   return (
//     <div className='bg-white rounded-lg m-3 p-6 relative'>
//         <FaQuoteRight className='w-8 h-8 absolute top-4 right-4 text-red-600 opacity-20'/>
//         <div className='mt-6 flex items-center'>
//             <FaStar  className='w-4 h-4 text-yellow-500'/>
//             <FaStar  className='w-4 h-4 text-yellow-500'/>
//             <FaStar  className='w-4 h-4 text-yellow-500'/>
//             <FaStar  className='w-4 h-4 text-yellow-500'/>
//             <FaStar  className='w-4 h-4 text-yellow-500'/>
//             <FaStar  className='w-4 h-4 text-yellow-500'/>
//         </div>

//         <p className='mt-6 text-base text-gray-600 font-medium'>
//             {review.review}
//         </p>

//         <div className='w-full h-[1.2px] bg-gray-600 opacity-10 mt-6 mb-6'></div>
//         <div className='flex items-center space-x-4'>
//             {/* image - replace with icon of person */}
//             <div>
//                 <h1 className='font-bold text-gray-800'>{review.name}</h1>
//                 <p className='text-sm text-gray-500'>{review.profession}</p>
//             </div>
            
//         </div>
//     </div>
//   )
// }

// export default ReviewCard



import React from 'react'
import { FaQuoteRight, FaStar, FaUser } from 'react-icons/fa'

type Props = {
    review: {
        id: number;
        name: string;
        profession: string;
        review: string;
    }
}

const ReviewCard = ({ review }: Props) => {
    return (
        <div className='bg-white rounded-lg m-3 p-6 relative'>
            <FaQuoteRight className='w-8 h-8 absolute top-4 right-4 text-red-600 opacity-20' />
            <div className='mt-6 flex items-center'>
                <FaStar className='w-4 h-4 text-yellow-500' />
                <FaStar className='w-4 h-4 text-yellow-500' />
                <FaStar className='w-4 h-4 text-yellow-500' />
                <FaStar className='w-4 h-4 text-yellow-500' />
                <FaStar className='w-4 h-4 text-yellow-500' />
                <FaStar className='w-4 h-4 text-yellow-500' />
            </div>

            <p className='mt-6 text-base text-gray-600 font-medium'>
                {review.review}
            </p>

            <div className='w-full h-[1.2px] bg-gray-600 opacity-10 mt-6 mb-6'></div>
            <div className='flex items-center space-x-4'>
                {/* User Icon */}
                <div className='w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full'>
                    <FaUser className='text-gray-400 w-5 h-5' />
                </div>
                <div>
                    <h1 className='font-bold text-gray-800'>{review.name}</h1>
                    <p className='text-sm text-gray-500'>{review.profession}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
