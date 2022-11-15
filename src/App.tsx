import { FormEvent, useState } from 'react'
import CompletedFormMessage from './components/CompletedFormMessage'
import RatingForm from './components/RatingForm'

function App() {
  const [formData, setFormData] = useState<{ userRating: number } | null>(
    null
  )
  const [selectedRating, setSelectedRating] = useState<number>()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (selectedRating) {
      setFormData({
        userRating: selectedRating
      })
      // {userRating: 5}
    }
  }

  const updateRating = (rating: number) => {
    setSelectedRating(rating)
  }

  const backToStart = () => {
    setFormData(null)
  }

  return (
    <div className='App'>
      <div className='card max-w-sm min-w-[268px] px-7 py-6 pb-4 rounded-2xl bg-gradient-to-b from-[#252d37] via-[#1c232c] to-[#131b25] min-h-[410px]'>
        {/* If not rated -> show rating form / if rated -> show thank you message */}
        {!formData ? (
          <RatingForm
            handleSubmit={handleSubmit}
            updateRating={updateRating}
            selectedRating={selectedRating}
          />
        ) : (
          <CompletedFormMessage
            selectedRating={selectedRating}
            backToStart={backToStart}
          />
        )}
      </div>
    </div>
  )
}

export default App
