import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { buildForm, masks, dataFrom } from 'src/app/shared/form.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-worker',
  templateUrl: './change-worker.component.html',
  styleUrls: ['./change-worker.component.css']
})

export class ChangeWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  form: FormGroup;
  mask = masks.phone;

  @Input() worker: MyWorker;
  @Output() changeWorker = new EventEmitter<MyWorker>();

  constructor() {
    this.form = buildForm();
  }

  ngOnInit(): void {
    this.form.setValue(dataFrom(this.worker));
  }

  onChangeWorker() {
    this.worker.name = this.form.value.name;
    this.worker.surname = this.form.value.surname;
    this.worker.patr = this.form.value.patr;
    this.worker.birthday = this.form.value.birthday;
    this.worker.email = this.form.value.email;
    this.worker.number = this.form.value.number;
    this.worker.department = this.form.value.department;

    this.changeWorker.emit(this.worker);
  }

}
