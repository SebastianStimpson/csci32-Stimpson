import useSWR from 'swr'
import { Student, StudentSearchParams } from '../types/student'

const fetcher = async ({ path, params }: { path: string; params?: StudentSearchParams }) => {
  const urlParams = new URLSearchParams()
  if (params?.name) urlParams.append('name', params.name)
  if (params?.className) urlParams.append('className', params.className)
  if (params?.sortColumn) urlParams.append('sortColumn', params.sortColumn)

  const url = `${process.env.NEXT_PUBLIC_API_URL}${path}${urlParams.toString() ? `?${urlParams.toString()}` : ''}`
  const res = await fetch(url)
  return res.json()
}

export function useStudents(params?: StudentSearchParams) {
  return useSWR<Student[]>(['/students', params], ([path]) => fetcher({ path, params }))
}
