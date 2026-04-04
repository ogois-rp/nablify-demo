import { Routes, Route, NavLink } from 'react-router-dom'
import { CharactersList } from './components/CharactersList'
import { EpisodesList } from './components/EpisodesList'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-8">
          <span className="font-medium text-gray-900">Rick & Morty Explorer</span>
          <div className="flex gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-700'}`
              }
            >
              Characters
            </NavLink>
            <NavLink
              to="/episodes"
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-700'}`
              }
            >
              Episodes
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/episodes" element={<EpisodesList />} />
        </Routes>
      </div>
    </div>
  )
}

export default App