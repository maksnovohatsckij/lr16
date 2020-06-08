import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-worker',
  templateUrl: './change-worker.component.html',
  styleUrls: ['./change-worker.component.css']
})
export class ChangeWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  number: string;
  type: number;
  form: FormGroup;
  public mask = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  @Input() worker: MyWorker;
  @Output() changeWorker = new EventEmitter<MyWorker>();

  constructor() {
    this.form = new FormGroup({ // создание новой формы
      name: new FormControl(null, [Validators.required]), // поля формы
      surname: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.pattern(/^[+,0-9,(,), ,-]+$/), Validators.required])
    });
  }

  ngOnInit(): void {
    this.form.setValue({
      name: this.worker.name,
      surname: this.worker.surname,
      type: this.worker.type,
      number: this.worker.number,
    });
  }

  onChangeWorker() {
    this.worker.name = this.form.value.name;
    this.worker.surname = this.form.value.surname;
    this.worker.type = this.form.value.type;
    this.worker.number = this.form.value.number;

    this.changeWorker.emit(this.worker);
  }

}
