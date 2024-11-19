import { FC } from 'react'
import { Student } from '../../types/student'

interface Props {
  student: Student
  onClose: () => void
  onEdit: () => void
}

export const StudentDetails: FC<Props> = ({ student, onClose, onEdit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{student.name}</h2>
          <button onClick={onClose} className="text-gray-500">
            &times;
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Contact Information</h3>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phoneNumber}</p>
            <p>Address: {student.address}</p>
          </div>
          <div>
            <h3 className="font-semibold">Academic Information</h3>
            <p>ID: {student.student_id}</p>
            <p>GPA: {student.gpa}</p>
            <p>Enrollment: {student.enrollmentNumber}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Current Classes</h3>
          <ul className="list-disc pl-5">
            {student.currentClasses?.map((className, index) => <li key={index}>{className}</li>)}
          </ul>
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onEdit} className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}
