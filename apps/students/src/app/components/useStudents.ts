import useSWR from 'swr'
import { Student } from '../context/StudentContext'

type SearchProps = {
  name?: string
  className?: string
}

// Define a fetcher function to handle API requests
async function fetcher(url: string): Promise<Student[]> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch student data')
  }
  return response.json()
}

// Define the useStudents hook
export function useStudents(params?: SearchProps) {
  // Build URL query parameters from search props
  const queryParams = new URLSearchParams(params as Record<string, string>).toString()
  const url = `/api/students${queryParams ? `?${queryParams}` : ''}`

  // Use SWR to fetch the data
  const { data, error, mutate } = useSWR<Student[]>(url, fetcher)

  return {
    data: data || [], // Default to an empty array if data is undefined
    error,
    mutate,
  }
}
