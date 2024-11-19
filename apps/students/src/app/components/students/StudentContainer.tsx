import { FC, useState } from 'react'
import { StudentSearchParams, Student } from '../../types/student'
import { useStudents } from '../../hooks/useStudents'
import { StudentSearch } from './StudentSearch'
import { StudentList } from './StudentList'
import { StudentDetails } from './StudentDetails'
import { StudentForm } from './StudentForm'
import { useStudentContext } from '../../context/StudentContext'

export const StudentContainer: FC = () => {
  const [searchParams, setSearchParams] = useState<StudentSearchParams>({})
  const { data: students = [], mutate, error, isLoading } = useStudents(searchParams)
  const { selectedStudent, setSelectedStudent, isFormOpen, setIsFormOpen } = useStudentContext()

  // Handle errors
  if (error) {
    return <div className="text-center p-4 text-red-600">Error loading students: {error.message}</div>
  }

  // Handle loading state
  if (isLoading) {
    return <div className="text-center p-4">Loading students...</div>
  }

  const handleSearch = (params: StudentSearchParams) => {
    setSearchParams(params)
  }

  const handleStudentClick = (student: Student) => {
    if (student) {
      setSelectedStudent(student)
    }
  }

  const handleFormClose = async () => {
    try {
      setIsFormOpen(false)
      setSelectedStudent(null)
      await mutate() // Refresh data with error handling
    } catch (error) {
      console.error('Error refreshing data:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-end">
        <button onClick={() => setIsFormOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Add New Student
        </button>
      </div>

      <StudentSearch onSearch={handleSearch} searchParams={searchParams} />

      {students.length === 0 ? (
        <div className="text-center p-4 text-gray-500">No students found</div>
      ) : (
        <StudentList students={students} onStudentClick={handleStudentClick} />
      )}

      {selectedStudent && !isFormOpen && (
        <StudentDetails
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
          onEdit={() => setIsFormOpen(true)}
        />
      )}

      {isFormOpen && (
        <StudentForm student={selectedStudent || undefined} onSave={handleFormClose} onCancel={handleFormClose} />
      )}
    </div>
  )
}
