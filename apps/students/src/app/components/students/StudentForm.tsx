import { FC, useState } from 'react'
import { Student } from '../../types/student'
import { studentService } from '../../services/studentService'

interface Props {
  student?: Student
  onSave?: () => void
  onCancel?: () => void
}

export const StudentForm: FC<Props> = ({ student, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Partial<Student>>(
    student || {
      name: '',
      email: '',
      enrollmentNumber: '',
      phoneNumber: '',
    },
  )

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (student?.student_id) {
        await studentService.updateStudent(student.student_id, formData)
      } else {
        await studentService.createStudent(formData)
      }
      onSave?.()
    } catch (error) {
      console.error('Error saving student:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name || ''}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      {/* Add more form fields */}
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 border rounded-md">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Save
        </button>
      </div>
    </form>
  )
}
