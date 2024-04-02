import dayjs from 'dayjs';
import { ExperienceCardProps } from '@/app/experience/ExperienceCard';

export const experiences: Omit<ExperienceCardProps, 'index'>[] = [
  {
    startDate: dayjs('oct 2023').toDate(),
    endDate: dayjs().toDate(),
    name: 'Justt',
    description: 'Full-Stack developer specializing in React and Nestjs. Focusing primarily on large scale data processing and microservices',
  },
  {
    startDate: dayjs('jun 2022').toDate(),
    endDate: dayjs('dec 2023').toDate(),
    name: 'Track 160',
    description: 'Full-Stack developer specializing in React/Vue and Nestjs. Main focus on video streaming and processing',
  },
  {
    startDate: dayjs('aug 2020').toDate(),
    endDate: dayjs('apr 2022').toDate(),
    name: 'Rafael Advanced Defense Systems',
    description: 'Software Engineer specializing in Full-Stack web development and managing complex VMWare environments',
  },
];