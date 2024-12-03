import { FC } from 'react'
import { Assignment } from '../../types/assignment'

interface Props {
  assignments: Assignment[]
  onAssignmentClick?: (assignment: Assignment) => void
  onDelete?: (assignmentId: string) => void
}

export const AssignmentList: FC<Props> = ({ assignments, onAssignmentClick, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {assignments.map((assignment) => (
        <div key={assignment.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md">
          <div className="flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => onAssignmentClick?.(assignment)}>
              <h3 className="font-semibold">{assignment.title}</h3>
              <p className="text-gray-600">Due: {assignment.dueDate}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onDelete?.(assignment.id)
              }}
              className="px-2 py-1 text-red-600 hover:bg-red-50 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
