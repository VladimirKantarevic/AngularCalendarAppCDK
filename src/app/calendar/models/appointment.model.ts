export interface Appointment {
  uuid: string;
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  color?: string;
}

export enum CalendarView {
  Day = 'day',
  Week = 'week',
  Month = 'month',
}
