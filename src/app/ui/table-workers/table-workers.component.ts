import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';
import { Sorter, attr } from 'src/app/shared/sort.model';

@Component({
  selector: "app-table-workers",
  templateUrl: "./table-workers.component.html",
  styleUrls: ["./table-workers.component.css"],
})
export class TableWorkersComponent implements OnInit {

  @Input() title: string;
  @Input()
  set workers(workerArr: MyWorker[]) {
    this._workers = workerArr;
    this.sort();
  }
  get workers() {
    return this._workers;
  }
  private _workers: MyWorker[] = [];

  @Output() deleteWorker = new EventEmitter<MyWorker>();
  @Output() changeWorker = new EventEmitter<MyWorker>();

  workersSorted: MyWorker[] = [];
  attr = attr;
  param: attr = attr.id;
  sorter: Sorter = new Sorter();

  constructor() { }

  sort(arg?: attr) {
    this.param = arg || this.param || attr.id;
    this.workersSorted = this.sorter.sortArrayWorkers(this.workers, this.param, arg === undefined);
  }

  ngOnInit(): void { }

  onDeleteWorker(worker: MyWorker) {
    this.deleteWorker.emit(worker);
  }

  onChangeWorker(worker: MyWorker) {
    this.changeWorker.emit(worker);
  }
}

