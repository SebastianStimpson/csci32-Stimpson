export interface Course {
  id: string
  name: string
  code: string
  professorId: string
  schedule: string[]
  description: string
  materials: CourseMaterial[]
  enrolledStudents: string[]
}

export interface CourseMaterial {
  id: string
  title: string
  type: 'document' | 'video' | 'link'
  url: string
  uploadedAt: string
}
