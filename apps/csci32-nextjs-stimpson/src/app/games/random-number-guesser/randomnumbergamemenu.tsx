import React, { useState } from 'react'
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onStartGame({ min, max, maxGuesses })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">Minimum Number</label>
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(Number(e.target.value))}
          placeholder="Minimum Number"
          className="input mt-1 block w-full"
          min="1"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Maximum Number</label>
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
          placeholder="Maximum Number"
          className="input mt-1 block w-full"
          min={min}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Max Guesses</label>
        <input
          type="number"
          value={maxGuesses}
          onChange={(e) => setMaxGuesses(Number(e.target.value))}
          placeholder="Max Guesses"
          className="input mt-1 block w-full"
          min="1"
          required
        />
      </div>
      <button type="submit" className="btn mt-4">
        Start Game
      </button>
    </form>
  )
}
