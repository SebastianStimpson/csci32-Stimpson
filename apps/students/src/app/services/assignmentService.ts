import { Assignment } from '../types/assignment'

export class AssignmentService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL || ''

  async getAssignments(): Promise<Assignment[]> {
    const response = await fetch(`${this.baseUrl}/assignments`)
    return response.json()
  }

  async createAssignment(assignment: Partial<Assignment>): Promise<Assignment> {
    const response = await fetch(`${this.baseUrl}/assignments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assignment),
    })
    return response.json()
  }

  async updateAssignment(id: string, assignment: Partial<Assignment>): Promise<Assignment> {
    const response = await fetch(`${this.baseUrl}/assignments/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assignment),
    })
    return response.json()
  }

  async deleteAssignment(id: string): Promise<void> {
    await fetch(`${this.baseUrl}/assignments/${id}`, {
      method: 'DELETE',
    })
  }
}

export const assignmentService = new AssignmentService()
