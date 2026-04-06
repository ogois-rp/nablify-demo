interface FilterBarProps {
  status: string
  species: string
  name: string
  onStatusChange: (value: string) => void
  onSpeciesChange: (value: string) => void
  onNameChange: (value: string) => void
}

export function FilterBar({ status, species, name, onStatusChange, onSpeciesChange, onNameChange }: FilterBarProps) {
  return (
    <div className="flex gap-4 mb-8">
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Search by name..."
        className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 flex-1"
      />
      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 cursor-pointer"
      >
        <option value="">All statuses</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        value={species}
        onChange={(e) => onSpeciesChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 cursor-pointer"
      >
        <option value="">All species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Robot">Robot</option>
        <option value="Mythological Creature">Mythological Creature</option>
      </select>
    </div>
  )
}