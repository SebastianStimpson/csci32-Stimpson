import React, { useState } from 'react'

const HiddenTab: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Tab</button>
      {isVisible && (
        <div className="hidden-tab">
          <h2>This is a hidden tab</h2>
          <p>Content goes here...</p>
        </div>
      )}
    </div>
  )
}

export default HiddenTab
