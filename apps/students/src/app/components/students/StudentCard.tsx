import { FC } from 'react'
import { Student } from '../../types/student'

interface Props {
  student: Student
  onClick?: () => void
  onDelete?: () => void
}

export const StudentCard: FC<Props> = ({ student, onClick, onDelete }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md">
      <div className="flex justify-between items-center">
        <div className="cursor-pointer" onClick={onClick}>
          <h3 className="font-semibold">{student.name}</h3>
          <p className="text-gray-600">ID: {student.student_id}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onDelete?.()
          }}
          className="px-2 py-1 text-red-600 hover:bg-red-50 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
