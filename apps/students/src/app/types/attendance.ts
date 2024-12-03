export interface Attendance {
  id: string
  courseId: string
  studentId: string
  date: string
  status: 'present' | 'absent' | 'late'
  notes?: string
}
