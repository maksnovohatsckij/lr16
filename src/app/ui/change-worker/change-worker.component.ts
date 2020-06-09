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
    let workerData = dataFrom(this.form.value);
    workerData["id"] = this.worker.id;
    this.worker = workerData;
    this.changeWorker.emit(this.worker);
  }

}
