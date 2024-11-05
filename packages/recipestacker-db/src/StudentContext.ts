import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useStudents } from '../hooks/useStudents';

export type Student = {
  student_id: string;
  name: string;
  email: string;
  enrollmentNumber?: string;
};

export type StudentContextType = {
  students: Student[];
  mutate: () => void;
  studentNameQuery: string;
  setStudentNameQuery: (query: string) => void;
  classNameQuery: string;
  setClassNameQuery: (query: string) => void;
  studentNames: string[];
  setStudentNames: (names: string[]) => void;
  removeStudent: (name: string) => void;
  showStudentForm: boolean;
  setShowStudentForm: (show: boolean) => void;
};

// Correctly initialize context with undefined to enforce using provider
const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [studentNameQuery, setStudentNameQuery] = useState('');
  const [classNameQuery, setClassNameQuery] = useState('');
  const [studentNames, setStudentNames] = useState<string[]>([]);
  const [showStudentForm, setShowStudentForm] = useState(false);

  const { data: students = [], mutate } = useStudents({ name: studentNameQuery, className: classNameQuery });

  function removeStudent(name: string) {
    const newStudentNames = studentNames.filter((student) => student !== name);
    setStudentNames(newStudentNames);
  }

  return (
    <StudentContext.Provider
      value={{
        students,
        mutate,
        studentNameQuery,
        setStudentNameQuery,
        classNameQuery,
        setClassNameQuery,
        studentNames,
        setStudentNames,
        removeStudent,
        showStudentForm,
        setShowStudentForm,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

// Custom hook for using the context
export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudentContext must be used within a StudentProvider');
  }
  return context;
};
