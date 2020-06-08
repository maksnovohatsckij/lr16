import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css'],
})
export class TableWorkersComponent implements OnInit {

  @Input() title: string;
  @Input() workers: MyWorker[] = [];

  @Output() deleteWorker = new EventEmitter<MyWorker>();
  @Output() changeWorker = new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit(): void {

  }

  onDeleteWorker(worker: MyWorker) {
    this.deleteWorker.emit(worker);
  }

  onChangeWorker(worker: MyWorker) {
    this.changeWorker.emit(worker);
  }
}

