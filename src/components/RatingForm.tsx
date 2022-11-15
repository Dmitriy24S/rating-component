import React, { FormEvent } from 'react'
import starSvg from '../assets/icon-star.svg'

interface Props {
  handleSubmit: (e: FormEvent) => void
  updateRating: (rating: number) => void
  selectedRating?: number
}

const RatingForm = ({ handleSubmit, updateRating, selectedRating }: Props) => {
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <div className='star bg-white/5 rounded-full p-3 self-start mb-2'>
        <img src={starSvg} alt='star' className='w-3.5' />
      </div>
      {/* // ! united @apply h2 class style? */}
      <h2>How did we do?</h2>
      <p className='text-gray-dark mb-2'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='rating-options flex gap-2 justify-between mb-3'>
        {[...Array(5)].map((_el, index) => {
          const rating = index + 1
          return (
            <button
              type='button'
              key={index}
              onClick={() => updateRating(rating)}
              className={`bg-white/5 rounded-full text-gray w-9 h-9 sm:w-11 sm:h-11 transition-colors duration-100 ease-out ${selectedRating === rating
                ? 'bg-orange text-white/80'
                : 'hover:bg-gray hover:text-white'
                }`}
            >
              {rating}
            </button>
          )
        })}
      </div>
      <button
        type='submit'
        className='bg-orange rounded-full py-3 pt-4 tracking-widest uppercase font-semibold text-white/80 hover:bg-orange-light transition-colors duration-100 ease-out'
      // ! text not center higher than middle? (font?) offset with pt4 vs py3?
      >
        Submit
      </button>
    </form>
  )
}

export default RatingForm
