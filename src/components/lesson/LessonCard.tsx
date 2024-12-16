import * as React from 'react';
import { Lesson } from '../../types';
import { formatDuration } from '../../utils/formatUtils';

interface LessonCardProps {
  lesson: Lesson;
  onSelect: (lesson: Lesson) => void;
}

export function LessonCard({ lesson, onSelect }: LessonCardProps) {
  return (
    <gridLayout
      className="bg-white rounded-lg shadow-md m-2"
      rows="auto"
      columns="120, *"
      onTap={() => onSelect(lesson)}
    >
      {/* Left side - Image */}
      <image
        col={0}
        className="rounded-l-lg h-32"
        src="https://placehold.co/400x400/4b0082/ffffff?text=Lesson"
        stretch="aspectFill"
      />
      
      {/* Right side - Content */}
      <stackLayout col={1} className="p-4">
        <label className="text-lg font-bold text-gray-800" text={lesson.title} />
        <label className="text-gray-600 text-sm leading-tight" textWrap={true} text={lesson.description} />
        <stackLayout orientation="horizontal" className="mt-2">
          <label className="text-sm text-gray-500" text={formatDuration(lesson.duration)} />
          {lesson.completed && (
            <label className="text-sm text-green-500 ml-2" text="✓ Completed" />
          )}
        </stackLayout>
      </stackLayout>
    </gridLayout>
  );
}