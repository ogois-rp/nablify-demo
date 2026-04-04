import { useState } from 'react'
import { useQuery } from '@apollo/client/react'
import { EPISODES_QUERY } from '../queries/episodes'
import { Pagination } from './Pagination'

export function EpisodesList() {
  const [page, setPage] = useState(1)

  const { data, loading, error } = useQuery(EPISODES_QUERY, {
    variables: { page },
  })

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error.message}</p>

  const info = data?.episodes?.info

  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-900 mb-6">Episodes</h2>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left px-6 py-3 text-gray-500 font-medium">Episode</th>
              <th className="text-left px-6 py-3 text-gray-500 font-medium">Name</th>
              <th className="text-left px-6 py-3 text-gray-500 font-medium">Air date</th>
              <th className="text-left px-6 py-3 text-gray-500 font-medium">Characters</th>
            </tr>
          </thead>
          <tbody>
            {data?.episodes?.results?.map((episode) => (
              <tr
                key={episode?.id}
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-mono">
                    {episode?.episode}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">{episode?.name}</td>
                <td className="px-6 py-4 text-gray-500">{episode?.air_date}</td>
                <td className="px-6 py-4 text-gray-500">{episode?.characters?.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        page={page}
        totalPages={info?.pages}
        hasNext={info?.next}
        hasPrev={info?.prev}
        onNext={() => setPage((p) => p + 1)}
        onPrev={() => setPage((p) => p - 1)}
      />
    </div>
  )
}