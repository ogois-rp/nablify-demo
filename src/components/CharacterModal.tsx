import { useQuery } from '@apollo/client/react'
import { CHARACTER_DETAIL_QUERY } from '../queries/characters'

interface CharacterModalProps {
  id: string
  onClose: () => void
}

export function CharacterModal({ id, onClose }: CharacterModalProps) {
  const { data, loading, error } = useQuery(CHARACTER_DETAIL_QUERY, {
    variables: { id },
  })

  const character = data?.character

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {loading && <p className="text-center py-10 text-gray-500">Loading...</p>}
        {error && <p className="text-center py-10 text-red-500">Error: {error.message}</p>}

        {character && (
          <>
            <div className="relative">
              <img
                src={character.image ?? ''}
                alt={character.name ?? ''}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-medium text-gray-900 mb-4">{character.name}</h2>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: 'Status', value: character.status },
                  { label: 'Species', value: character.species },
                  { label: 'Gender', value: character.gender },
                  { label: 'Type', value: character.type || '—' },
                  { label: 'Origin', value: character.origin?.name },
                  { label: 'Location', value: character.location?.name },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">{label}</p>
                    <p className="text-sm font-medium text-gray-900">{value}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Episodes ({character.episode?.length})
              </h3>
              <div className="flex flex-col gap-2">
                {character.episode?.map((ep) => (
                  <div key={ep?.id} className="flex items-center gap-3">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-mono">
                      {ep?.episode}
                    </span>
                    <span className="text-sm text-gray-600">{ep?.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}