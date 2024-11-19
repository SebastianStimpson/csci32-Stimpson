import { Student, StudentSearchParams } from '../types/student'

export class StudentService {
  // Base API URL from environment
  private baseUrl = process.env.NEXT_PUBLIC_API_URL || ''

  // Fetch students with search parameters
  async getStudents(params?: StudentSearchParams): Promise<Student[]> {
    const urlParams = new URLSearchParams()
    Object.entries(params || {}).forEach(([key, value]) => {
      if (value) urlParams.append(key, value.toString())
    })
    const response = await fetch(`${this.baseUrl}/students?${urlParams}`)
    return response.json()
  }

  // Create new student
  async createStudent(student: Partial<Student>): Promise<Student> {
    const response = await fetch(`${this.baseUrl}/students`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    })
    return response.json()
  }

  // Update existing student
  async updateStudent(id: string, student: Partial<Student>): Promise<Student> {
    const response = await fetch(`${this.baseUrl}/students/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    })
    return response.json()
  }

  // Delete student
  async deleteStudent(id: string): Promise<void> {
    await fetch(`${this.baseUrl}/students/${id}`, { method: 'DELETE' })
  }
}

export const studentService = new StudentService()
