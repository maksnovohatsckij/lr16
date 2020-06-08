import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  used: boolean = false;
  form: FormGroup;
  public mask = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {
    this.form = new FormGroup({ // создание новой формы
      name: new FormControl(null, [Validators.required]), // поля формы
      surname: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.pattern(/^[+,0-9,(,), ,-]+$/), Validators.required])
    });
  }

  ngOnInit(): void { }

  onAddWorker() {
    this.addWorker.emit({
      name: this.form.value.name,
      surname: this.form.value.surname,
      type: this.form.value.type,
      number: this.form.value.number
    });
    this.form.reset();
  }
}
