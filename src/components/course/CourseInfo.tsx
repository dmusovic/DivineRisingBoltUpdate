import * as React from 'react';

interface CourseInfoProps {
  title: string;
  description: string;
}

export function CourseInfo({ title, description }: CourseInfoProps) {
  return (
    <stackLayout className="p-4">
      <label className="text-lg font-bold" text={title} />
      <label className="text-gray-600 text-sm leading-4 mt-1" textWrap={true} text={description} />
    </stackLayout>
  );
}