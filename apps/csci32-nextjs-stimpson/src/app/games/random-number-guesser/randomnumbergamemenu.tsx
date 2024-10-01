'use client'

import { useState } from 'react'

export interface GameSettings {
  min: number
  max: number
  maxGuesses: number
}

interface Props {
  onStartGame: (settings: GameSettings) => void
}

export default function RandomNumberGameMenu({ onStartGame }: Props) {
  const [min, setMin] = useState<number>(1)
  const [max, setMax] = useState<number>(100)
  const [maxGuesses, setMaxGuesses] = useState<number>(10)

  const handleStart = () => {
    onStartGame({ min, max, maxGuesses })
  }

  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Start New Game</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">
              Minimum Number:
              <input
                type="number"
                value={min}
                onChange={(e) => setMin(Number(e.target.value))}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter minimum number"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Maximum Number:
              <input
                type="number"
                value={max}
                onChange={(e) => setMax(Number(e.target.value))}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter maximum number"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Maximum Guesses:
              <input
                type="number"
                value={maxGuesses}
                onChange={(e) => setMaxGuesses(Number(e.target.value))}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter maximum number of guesses"
              />
            </label>
          </div>
          <button
            onClick={handleStart}
            className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  )
}
