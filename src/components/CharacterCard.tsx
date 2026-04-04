interface Character {
  id?: string | null
  name?: string | null
  status?: string | null
  species?: string | null
  image?: string | null
  origin?: { name?: string | null } | null
}

interface CharacterCardProps {
  character: Character
  onClick?: () => void
}

export function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
    >
      <img
        src={character.image ?? ''}
        alt={character.name ?? ''}
        className="w-full object-cover"
      />
      <div className="p-3">
        <h3 className="font-medium text-gray-900 text-sm truncate">{character.name}</h3>
        <div className="flex items-center gap-1 mt-1">
          <span className={`w-2 h-2 rounded-full ${
            character.status === 'Alive' ? 'bg-green-400' :
            character.status === 'Dead' ? 'bg-red-400' : 'bg-gray-400'
          }`} />
          <p className="text-xs text-gray-500">{character.status} — {character.species}</p>
        </div>
        <p className="text-xs text-gray-400 mt-1 truncate">{character.origin?.name}</p>
      </div>
    </div>
  )
}