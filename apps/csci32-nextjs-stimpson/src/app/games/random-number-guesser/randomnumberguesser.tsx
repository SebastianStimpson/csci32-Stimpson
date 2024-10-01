'use client'

import { useState } from 'react'
import RandomNumberGameMenu, { GameSettings } from './randomnumbergamemenu'
import RandomNumberGame from './randomnumbergame'

export default function RandomNumberGuesser() {
  const [gameSettings, setGameSettings] = useState<GameSettings | null>(null)

  const handleStartGame = (settings: GameSettings) => {
    setGameSettings(settings)
  }

  const handleGameOver = () => {
    setGameSettings(null)
  }

  return (
    <div>
      {gameSettings ? (
        <RandomNumberGame settings={gameSettings} onGameOver={handleGameOver} />
      ) : (
        <RandomNumberGameMenu onStartGame={handleStartGame} />
      )}
    </div>
  )
}
