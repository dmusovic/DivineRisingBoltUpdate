import { Course } from '../../types';
import {
  vedicSwitchWordsLessons,
  spiritualAwakeningLessons,
  sacredGeometryLessons,
  energyHealingLessons,
  divineConnectionLessons
} from '../lessons/spiritual';

export const spiritualCourses: Course[] = [
  {
    id: 'spiritual-1',
    title: 'Vedic Switch Words',
    description: 'Master the ancient practice of using specific words for manifestation',
    thumbnail: 'https://placehold.co/600x400/9932cc/ffffff?text=Vedic+Switch+Words',
    lessons: vedicSwitchWordsLessons
  },
  {
    id: 'spiritual-2',
    title: 'Spiritual Awakening',
    description: 'Journey through the stages of spiritual enlightenment',
    thumbnail: 'https://placehold.co/600x400/800080/ffffff?text=Spiritual+Awakening',
    lessons: spiritualAwakeningLessons
  },
  {
    id: 'spiritual-3',
    title: 'Sacred Geometry',
    description: 'Explore the divine patterns in nature and consciousness',
    thumbnail: 'https://placehold.co/600x400/4b0082/ffffff?text=Sacred+Geometry',
    lessons: sacredGeometryLessons
  },
  {
    id: 'spiritual-4',
    title: 'Energy Healing',
    description: 'Learn various techniques for spiritual energy healing',
    thumbnail: 'https://placehold.co/600x400/9400d3/ffffff?text=Energy+Healing',
    lessons: energyHealingLessons
  },
  {
    id: 'spiritual-5',
    title: 'Divine Connection',
    description: 'Strengthen your connection with the divine and higher realms',
    thumbnail: 'https://placehold.co/600x400/8a2be2/ffffff?text=Divine+Connection',
    lessons: divineConnectionLessons
  }
];