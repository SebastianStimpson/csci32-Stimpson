import { FC, useState } from 'react'
import { Assignment } from '../../types/assignment'
import { assignmentService } from '../../services/assignmentService'

interface Props {
  assignment?: Assignment
  onSave?: () => void
  onCancel?: () => void
}

export const AssignmentForm: FC<Props> = ({ assignment, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Partial<Assignment>>(
    assignment || {
      title: '',
      description: '',
      dueDate: '',
    },
  )
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      if (assignment?.id) {
        await assignmentService.updateAssignment(assignment.id, formData)
      } else {
        await assignmentService.createAssignment(formData)
      }
      onSave?.()
    } catch (error) {
      setError('Error saving assignment')
      console.error('Error saving assignment:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600">{error}</div>}
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title || ''}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Due Date</label>
        <input
          type="date"
          value={formData.dueDate || ''}
          onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 border rounded-md" disabled={loading}>
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md" disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  )
}
