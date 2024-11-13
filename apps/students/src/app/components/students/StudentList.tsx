import { FC } from 'react'
import { Student } from '../../types/student'
import { StudentCard } from './StudentCard'

interface Props {
  students: Student[]
  onStudentClick?: (student: Student) => void
}

export const StudentList: FC<Props> = ({ students, onStudentClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student) => (
        <StudentCard key={student.student_id} student={student} onClick={() => onStudentClick?.(student)} />
      ))}
    </div>
  )
}
