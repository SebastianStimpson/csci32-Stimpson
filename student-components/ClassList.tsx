'use client'
// import { Tag } from '@repo/ui/tag'; // Tag UI component
import React, { useContext } from 'react'

export function ClassList() {
  const { studentNames, removeStudent } = useContext(StudentContext)
  return (
    <div className="gap-4">
      {studentNames.map((name) => (
      ))}
    </div>
  )
}
