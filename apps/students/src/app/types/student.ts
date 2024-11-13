import { Professor, Class, Enrollment } from './models'

export interface Student {
  student_id: string
  name: string
  email: string
  enrollmentNumber?: string
  photoUrl?: string
  address?: string
  phoneNumber?: string
  gpa?: number
  sex?: string
  currentClasses?: string[]
  currentProfessors?: string[]
}

export interface StudentSearchParams {
  name?: string
  className?: string
  sortColumn?: string
  sortOrder?: 'asc' | 'desc'
  take?: number
  skip?: number
}

// Re-export all models
export type { Professor, Class, Enrollment }
