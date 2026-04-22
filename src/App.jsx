import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click Counter</h1>
      <p>You have clicked the button {count} times.</p>
      <button onClick={() => setCount(count + 1)} style={{ fontSize: '20px', padding: '10px 20px' }}>
        Click Me!
      </button>
    </div>
  )
}

export default App
