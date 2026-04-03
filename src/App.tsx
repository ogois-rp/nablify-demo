import { CharactersList } from './components/CharacterCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-medium text-gray-900 mb-8">Rick & Morty Explorer</h1>
        <CharactersList />
      </div>
    </div>
  )
}

export default App