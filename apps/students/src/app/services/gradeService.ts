import { Grade } from '../types/grade'

export const gradeService = {
  submitGrade: async (grade: Grade): Promise<Grade> => {
    try {
      const response = await fetch('/api/grades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(grade),
      })
      if (!response.ok) throw new Error('Failed to submit grade')
      return response.json()
    } catch (error) {
      console.error('Error submitting grade:', error)
      throw error
    }
  },

  getStudentGrades: async (studentId: string): Promise<Grade[]> => {
    try {
      const response = await fetch(`/api/grades/student/${studentId}`)
      if (!response.ok) throw new Error('Failed to fetch student grades')
      return response.json()
    } catch (error) {
      console.error('Error fetching student grades:', error)
      throw error
    }
  },

  getCourseGrades: async (courseId: string): Promise<Grade[]> => {
    try {
      const response = await fetch(`/api/grades/course/${courseId}`)
      if (!response.ok) throw new Error('Failed to fetch course grades')
      return response.json()
    } catch (error) {
      console.error('Error fetching course grades:', error)
      throw error
    }
  },
}
