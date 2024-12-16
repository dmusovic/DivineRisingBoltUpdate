import { Course } from '../../types';
import {
  takingControlLessons,
  emotionalIntelligenceLessons,
  shadowWorkLessons,
  innerChildLessons,
  cognitiveRestructuringLessons
} from '../lessons/psychological';

export const psychologicalCourses: Course[] = [
  {
    id: 'psych-1',
    title: 'Taking Control',
    description: 'Master the art of self-control and personal development',
    thumbnail: 'https://placehold.co/600x400/b8860b/ffffff?text=Taking+Control',
    lessons: takingControlLessons
  },
  {
    id: 'psych-2',
    title: 'Emotional Intelligence',
    description: 'Develop your emotional awareness and control',
    thumbnail: 'https://placehold.co/600x400/8b4513/ffffff?text=Emotional+Intelligence',
    lessons: emotionalIntelligenceLessons
  },
  {
    id: 'psych-3',
    title: 'Shadow Work',
    description: 'Learn to embrace and integrate your shadow aspects',
    thumbnail: 'https://placehold.co/600x400/d2691e/ffffff?text=Shadow+Work',
    lessons: shadowWorkLessons
  },
  {
    id: 'psych-4',
    title: 'Inner Child Healing',
    description: 'Connect with and heal your inner child',
    thumbnail: 'https://placehold.co/600x400/cd853f/ffffff?text=Inner+Child',
    lessons: innerChildLessons
  },
  {
    id: 'psych-5',
    title: 'Cognitive Restructuring',
    description: 'Transform limiting beliefs and thought patterns',
    thumbnail: 'https://placehold.co/600x400/daa520/ffffff?text=Cognitive+Restructuring',
    lessons: cognitiveRestructuringLessons
  }
];