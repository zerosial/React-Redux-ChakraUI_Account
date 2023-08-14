import { Counter } from "./features/counter/Counter"
import { Join } from "./features/counter/Join"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Join />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
