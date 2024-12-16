import * as React from 'react';
import { Course } from '../../types';
import { CourseImage } from './CourseImage';
import { CourseInfo } from './CourseInfo';
import { CourseProgress } from './CourseProgress';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export function CourseCard({ course, onSelect }: CourseCardProps) {
  return (
    <gridLayout
      className="bg-white rounded-lg shadow w-72"
      rows="160, auto, auto"
      columns="*, auto"
      onTap={() => onSelect(course)}
      margin="0"
      padding="0"
    >
      <CourseImage src={course.thumbnail} alt={course.title} />
      <CourseInfo 
        title={course.title} 
        description={course.description} 
      />
      <CourseProgress value={course.progress || 0} />
    </gridLayout>
  );
}