import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-month-view',
  imports: [DragDropModule, CommonModule],
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss'],
})
export class MonthViewComponent {
  @Input() weeks: Date[][] = [];
  @Input() appointments: Appointment[] = [];
  @Input() selectedDate: Date | null = null;

  @Input() deleteAppointment!: (appointment: Appointment, event: Event) => void;
  @Output() dateSelected = new EventEmitter<Date>();

  onDateClick(date: Date) {
    this.dateSelected.emit(date);
  }

  onDelete(uuid: string) {
    this.appointments = this.appointments.filter((app) => app.uuid !== uuid);
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  drop(event: CdkDragDrop<Appointment[]>, date: Date) {
    const movedAppointment = event.item.data;
    movedAppointment.date = date;
  }
}
