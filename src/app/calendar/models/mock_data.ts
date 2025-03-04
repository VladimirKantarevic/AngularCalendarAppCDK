import { Appointment } from './appointment.model';

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    uuid: '00000000-0000-0000-0000-000000000006',
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 2
    ),
    title: 'Coffee with Sarah',
    startTime: '08:30',
    endTime: '09:30',
  },
  {
    uuid: '00000000-0000-0000-0000-000000000007',
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 3
    ),
    title: 'Workshop on Angular',
    startTime: '10:00',
    endTime: '12:00',
  },
  {
    uuid: '00000000-0000-0000-0000-000000000008',
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 4
    ),
    title: 'Interview with John',
    startTime: '14:30',
    endTime: '15:30',
  },
  {
    uuid: '00000000-0000-0000-0000-000000000009',
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 5
    ),
    title: 'Product Demo',
    startTime: '16:00',
    endTime: '17:00',
  },
  {
    uuid: '00000000-0000-0000-0000-000000000010',
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 6
    ),
    title: 'Marketing Strategy Meeting',
    startTime: '09:00',
    endTime: '10:00',
  },
  {
    uuid: '00000000-0000-0000-0000-000000000011',
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 7
    ),
    title: 'Lunch with Mark',
    startTime: '12:30',
    endTime: '13:30',
  },
  {
    uuid: '00000000-0000-0000-0000-000000000012',
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 8
    ),
    title: 'Client Presentation',
    startTime: '15:00',
    endTime: '16:00',
  },
  {
    uuid: '00000000-0000-0000-0000-000000000013',
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 9
    ),
    title: 'Team Briefing',
    startTime: '17:30',
    endTime: '18:30',
  },
  {
    uuid: '00000000-0000-0000-0000-000000000014',
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 10
    ),
    title: 'Customer Support Meeting',
    startTime: '11:00',
    endTime: '12:00',
  },
  {
    uuid: '00000000-0000-0000-0000-000000000015',
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 11
    ),
    title: 'Company Update Call',
    startTime: '13:30',
    endTime: '14:30',
  },
];
