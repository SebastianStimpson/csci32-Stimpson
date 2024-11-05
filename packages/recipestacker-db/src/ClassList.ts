import { Flex } from '@repo/ui/flex'; // Assuming this is a reusable UI component
import { Tag } from '@repo/ui/tag'; // Tag UI component
import { useContext } from 'react';
import { StudentContext } from '@/context/StudentContext';

export function ClassList() {
  const { studentNames, removeStudent } = useContext(StudentContext);

  return (
    <Flex className="gap-4">
      {studentNames.map((name) => (
        <Tag key={name} onClickX={() => removeStudent(name)}>
          {name}
        </Tag>
      ))}
    </Flex>
  );
}
