import { StudentSearchParams } from '../../types/student'
import { FC } from 'react'

interface Props {
  onSearch: (params: StudentSearchParams) => void
  searchParams: StudentSearchParams
}

export const StudentSearch: FC<Props> = ({ onSearch, searchParams }) => {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="px-4 py-2 border rounded-lg"
          value={searchParams.name || ''}
          onChange={(e) => onSearch({ ...searchParams, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by class..."
          className="px-4 py-2 border rounded-lg"
          value={searchParams.className || ''}
          onChange={(e) => onSearch({ ...searchParams, className: e.target.value })}
        />
        <select
          className="px-4 py-2 border rounded-lg"
          value={searchParams.sortColumn || ''}
          onChange={(e) => onSearch({ ...searchParams, sortColumn: e.target.value })}
        >
          <option value="">Sort by...</option>
          <option value="name">Name</option>
          <option value="gpa">GPA</option>
          <option value="email">Email</option>
        </select>
      </div>
    </div>
  )
}
