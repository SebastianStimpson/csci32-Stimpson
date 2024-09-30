'use client'

import React, { useState, useEffect } from 'react'
import { getRandomInt } from '@repo/math/getRandomInt'
import classNames from 'classnames'

interface Props {
  settings: {
    min: number
    max: number
    maxGuesses: number
  }
  onGameOver: () => void
}

export default function RandomNumberGame({ settings, onGameOver }: Props) {
  const { min, max, maxGuesses } = settings
  const [targetNumber] = useState(getRandomInt(min, max))
  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState('')
  const [guessesLeft, setGuessesLeft] = useState(maxGuesses)
  const [lowRange, setLowRange] = useState(min)
  const [highRange, setHighRange] = useState(max)
  const [recommendedGuess, setRecommendedGuess] = useState(Math.floor((min + max) / 2))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const userGuess = Number(guess)
    if (isNaN(userGuess)) {
      setFeedback('Please enter a valid number')
      return
    }

    if (userGuess < lowRange || userGuess > highRange) {
      setFeedback(`Please enter a number between ${lowRange} and ${highRange}`)
      return
    }

    if (userGuess === targetNumber) {
      setFeedback('You win!')
    } else if (userGuess < targetNumber) {
      setFeedback('Higher')
      setLowRange(userGuess + 1)
    } else {
      setFeedback('Lower')
      setHighRange(userGuess - 1)
    }

    setGuessesLeft((prev) => prev - 1)

    if (guessesLeft - 1 === 0 && userGuess !== targetNumber) {
      setFeedback(`You lose! The number was ${targetNumber}`)
    }

    setGuess('')
  }

  useEffect(() => {
    setRecommendedGuess(Math.floor((lowRange + highRange) / 2))
  }, [lowRange, highRange])

  const gameOver = feedback === 'You win!' || feedback.startsWith('You lose!')

  return (
    <div
      className={classNames('p-4 max-w-md mx-auto', {
        'bg-red-50': guessesLeft === 1 && !gameOver,
        'bg-green-50': feedback === 'You win!',
      })}
    >
      <p className="mb-2">Guesses Left: {guessesLeft}</p>
      {!gameOver && (
        <>
          <form onSubmit={handleSubmit} className="flex space-x-2 mb-2">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="input w-full"
              placeholder={`Enter a number between ${lowRange} and ${highRange}`}
            />
            <button type="submit" className="btn">
              Guess
            </button>
          </form>
          <p>Recommended Guess: {recommendedGuess}</p>
        </>
      )}
      <p className="mt-2">{feedback}</p>
      {gameOver && (
        <button onClick={onGameOver} className="btn mt-4">
          Play Again
        </button>
      )}
    </div>
  )
}
