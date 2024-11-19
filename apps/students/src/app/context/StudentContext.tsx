import { createContext, useContext, FC, ReactNode, useState } from 'react'
import { Student, StudentSearchParams } from '../types/student'

interface StudentContextType {
  selectedStudent: Student | null
  setSelectedStudent: (student: Student | null) => void
  searchParams: StudentSearchParams
  setSearchParams: (params: StudentSearchParams) => void
  isFormOpen: boolean
  setIsFormOpen: (open: boolean) => void
}

const StudentContext = createContext<StudentContextType | undefined>(undefined)

export const StudentProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [searchParams, setSearchParams] = useState<StudentSearchParams>({})
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <StudentContext.Provider
      value={{
        selectedStudent,
        setSelectedStudent,
        searchParams,
        setSearchParams,
        isFormOpen,
        setIsFormOpen,
      }}
    >
      {children}
    </StudentContext.Provider>
  )
}

export const useStudentContext = () => {
  const context = useContext(StudentContext)
  if (context === undefined) {
    throw new Error('useStudentContext must be used within a StudentProvider')
  }
  return context
}
