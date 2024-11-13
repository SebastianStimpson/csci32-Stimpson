import { FC } from 'react'
import { Student } from '../../types/student'

interface Props {
  student: Student
  onClick?: () => void
}

export const StudentCard: FC<Props> = ({ student, onClick }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md cursor-pointer" onClick={onClick}>
      <h3 className="font-semibold">{student.name}</h3>
      <p className="text-gray-600">ID: {student.student_id}</p>
    </div>
  )
}
