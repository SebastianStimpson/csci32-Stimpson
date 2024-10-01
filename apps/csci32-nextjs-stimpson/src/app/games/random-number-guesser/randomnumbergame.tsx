'use client'

import React, { useState, useEffect } from 'react'
import { getRandomInt } from './getrandomint'

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
  const [targetNumber] = useState<number>(getRandomInt(min, max + 1))
  const [guess, setGuess] = useState<string>('')
  const [feedback, setFeedback] = useState<string>('')
  const [guessesLeft, setGuessesLeft] = useState<number>(maxGuesses)
  const [lowRange, setLowRange] = useState<number>(min)
  const [highRange, setHighRange] = useState<number>(max)
  const [recommendedGuess, setRecommendedGuess] = useState<number>(Math.floor((min + max) / 2))
  const [bgColor, setBgColor] = useState<string>('bg-white')

  const gameOver = feedback === 'You win!' || feedback.startsWith('You lose!')

  useEffect(() => {
    if (guessesLeft === 1 && !gameOver) {
      setBgColor('bg-red-50')
    } else if (feedback === 'You win!') {
      setBgColor('bg-green-100')
    } else {
      setBgColor('bg-white')
    }
  }, [guessesLeft, feedback, gameOver])

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
      setFeedback('🔼 Too low!')
      setLowRange(userGuess + 1)
    } else {
      setFeedback('🔽 Too high!')
      setHighRange(userGuess - 1)
    }

    setGuessesLeft((prev) => prev - 1)

    if (guessesLeft - 1 === 0 && userGuess !== targetNumber) {
      setFeedback(`You lose! The number was ${targetNumber}`)
    }

    setGuess('')
  }

  useEffect(() => {
    if (lowRange <= highRange) {
      setRecommendedGuess(Math.floor((lowRange + highRange) / 2))
    }
  }, [lowRange, highRange])

  const handleRestart = () => {
    onGameOver()
  }

  return (
    <div className={`p-8 rounded shadow-md ${bgColor}`}>
      <h2 className="text-2xl font-bold mb-4">Guess the Number</h2>
      <p className="mb-2">Guesses Left: {guessesLeft}</p>

      {!gameOver ? (
        <>
          <p>
            Enter a number between {lowRange} and {highRange}.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="block w-full border rounded p-2"
              min={lowRange}
              max={highRange}
            />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
              Guess
            </button>
          </form>
          {recommendedGuess !== null && <p className="mt-2">Recommended Guess: {recommendedGuess}</p>}
        </>
      ) : (
        <>
          <p className="mt-4 text-lg">{feedback}</p>
          <button
            onClick={handleRestart}
            className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Play Again
          </button>
        </>
      )}

      {!gameOver && <p className="mt-2">{feedback}</p>}
    </div>
  )
}
