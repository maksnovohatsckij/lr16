import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { buildForm, masks, dataFrom } from 'src/app/shared/form.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  used: boolean = false;
  form: FormGroup;
  mask = masks.phone;
  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {
    this.form = buildForm();
  }

  ngOnInit(): void { }

  onAddWorker() {
    this.addWorker.emit(dataFrom(this.form.value));
    this.form.reset();
  }
}
