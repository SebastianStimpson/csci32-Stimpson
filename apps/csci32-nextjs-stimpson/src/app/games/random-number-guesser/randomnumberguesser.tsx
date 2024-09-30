'use client'

import React, { useState } from 'react'
import RandomNumberGameMenu, { GameSettings } from './randomnumbergamemenu'
import RandomNumberGame from './randomnumbergame'

export default function RandomNumberGuesser() {
  const [gameSettings, setGameSettings] = useState<GameSettings | null>(null)

  const startGame = (settings: GameSettings) => {
    setGameSettings(settings)
  }

  const handleGameOver = () => {
    setGameSettings(null)
  }

  return (
    <div className="container mx-auto p-4">
      {!gameSettings ? (
        <RandomNumberGameMenu onStartGame={startGame} />
      ) : (
        <RandomNumberGame settings={gameSettings} onGameOver={handleGameOver} />
      )}
    </div>
  )
}
