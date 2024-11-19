import { Student as StudentType } from './student'

export interface Professor {
  professor_id: string
  name: string
  classes?: Class[]
}

export interface Class {
  class_id: string
  name: string
  professor_id: string
  professor?: Professor
  enrollments?: Enrollment[]
}

export interface Enrollment {
  enrollment_id: string
  student_id: string
  class_id: string
  student?: StudentType
  class?: Class
}

export interface Student {
  student_id: string
  name: string
  email: string
  phoneNumber: string
  address: string
  enrollmentNumber: string
  gpa: number
  currentClasses: string[]
}

// Search parameter interfaces
export interface ProfessorSearchParams {
  name?: string
  sortColumn?: string
  sortOrder?: 'asc' | 'desc'
  take?: number
  skip?: number
}

export interface ClassSearchParams {
  name?: string
  professorId?: string
  sortColumn?: string
  sortOrder?: 'asc' | 'desc'
  take?: number
  skip?: number
}

export interface EnrollmentSearchParams {
  studentId?: string
  classId?: string
  sortColumn?: string
  sortOrder?: 'asc' | 'desc'
  take?: number
  skip?: number
}
