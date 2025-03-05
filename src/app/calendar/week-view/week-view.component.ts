import { Component, Input } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-week-view',
  imports: [DragDropModule, CommonModule],
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent {
  @Input() monthDays: Date[] = [];
  @Input() timeSlots: string[] = [];
  @Input() appointments: Appointment[] = [];

  @Input() deleteAppointment!: (appointment: Appointment, event: Event) => void;

  onDelete(uuid: string) {
    console.log(uuid, 'brisanje');
    this.appointments = this.appointments.filter((app) => app.uuid !== uuid);
  }

  isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  drop(event: CdkDragDrop<Appointment[]>, date: Date, slot?: string) {
    const movedAppointment = event.item.data;
    movedAppointment.date = date;
    if (slot) {
      movedAppointment.startTime = slot;
      movedAppointment.endTime = slot;
    }
  }

  getAppointmentsForDateTime(date: Date, timeSlot: string): Appointment[] {
    return this.appointments.filter(
      (appointment) =>
        this.isSameDate(appointment.date, date) &&
        appointment.startTime <= timeSlot &&
        appointment.endTime >= timeSlot
    );
  }
}
