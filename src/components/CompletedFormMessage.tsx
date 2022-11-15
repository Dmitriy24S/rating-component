import React from 'react'
import BackIcon from '../assets/BackIcon'
import thankYouIllustration from '../assets/illustration-thank-you.svg'
// import backIconSvg from '../assets/back-icon.svg'
// import {ReactComponent as backIconSvg} from '../assets/back-icon.svg';
// Module '"*.svg"' has no exported member 'ReactComponent'. Did you mean to use 'import ReactComponent from "*.svg"' instead?

interface Props {
  selectedRating?: number
  backToStart: () => void
}

const CompletedFormMessage = ({ selectedRating, backToStart }: Props) => {
  return (
    <div className='grid text-center gap-6 place-items-center relative pt-10'>
      <button
        onClick={backToStart}
        className='absolute -left-0 -top-0 text-[#eb8d36] bg-white/5 rounded-full p-2 w-[38px] text-sm hover:bg-[#343c47] transition-colors duration-100 ease-out'
      >
        {/* &#60; */}
        {/* <img src={backIconSvg} alt='back' className='text-white' /> */}
        <BackIcon />
      </button>
      <img src={thankYouIllustration} alt='thank you' />

      <span className='bg-[#f0f1f110] rounded-full px-4 py-1.5 text-base text-[#ff8a1ed9]'>
        <p>You selected {selectedRating ? selectedRating : '?'} out of 5</p>
      </span>
      <div>
        {/* // ! united @apply h2 class style? */}
        {/* <h2 className='font-bold text-2xl mb-2.5'>Thank you!</h2> */}
        <h2 className='mb-2.5'>Thank you!</h2>
        <p className='text-gray-dark text-sm sm:text-base'>
          We appreciate you taking the time to give a rating. If you ever need more
          support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}

export default CompletedFormMessage
