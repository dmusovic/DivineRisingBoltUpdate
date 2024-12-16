import * as React from 'react';
import { Course } from '../../types';
import { CourseGrid } from './CourseGrid';

interface CourseSectionProps {
  title: string;
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

export function CourseSection({ title, courses, onSelectCourse }: CourseSectionProps) {
  return (
    <stackLayout className="mb-6">
      <label className="text-xl font-bold px-4 mb-2" text={title} />
      <CourseGrid courses={courses} onSelectCourse={onSelectCourse} />
    </stackLayout>
  );
}