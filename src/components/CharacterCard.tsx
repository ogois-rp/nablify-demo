import { useQuery } from '@apollo/client/react'
import { CHARACTERS_QUERY } from '../queries/characters'

export function CharactersList() {
  const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
    variables: { page: 1 },
  })

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error.message}</p>

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.characters?.results?.map((character) => (
        <div
          key={character?.id}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
        >
          <img
            src={character?.image ?? ''}
            alt={character?.name ?? ''}
            className="w-full object-cover"
          />
          <div className="p-3">
            <h3 className="font-medium text-gray-900 text-sm truncate">{character?.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              <span className={`w-2 h-2 rounded-full ${
                character?.status === 'Alive' ? 'bg-green-400' :
                character?.status === 'Dead' ? 'bg-red-400' : 'bg-gray-400'
              }`} />
              <p className="text-xs text-gray-500">{character?.status} — {character?.species}</p>
            </div>
            <p className="text-xs text-gray-400 mt-1 truncate">{character?.origin?.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}