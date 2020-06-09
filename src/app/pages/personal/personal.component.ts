import { Component, OnInit } from '@angular/core';
import {
  MyWorker,
  MyWorkerType,
} from 'src/app/shared/worker.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  title = 'Список сотрудников';
  workers: MyWorker[] = [];
  myWorkerType = MyWorkerType;
  search = "";

  constructor(private base: DataService) {
    this.getDatabase();
  }

  ngOnInit(): void {
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.department === type);
  }

  async getDatabase() {
    try {
      this.workers = await this.base.get();
    } catch (err) {
      console.error(err);
    }
  }

  async onDeleteWorker(worker: MyWorker) {
    try {
      await this.base.delete(worker);
    } catch (err) {
      console.error(err);
    } finally {
      this.getDatabase();
    }
  }

  async onAddWorker(worker: MyWorker) {
    try {
      worker.id = this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
      await this.base.add(worker);
    } catch (err) {
      console.error(err);
    } finally {
      this.getDatabase();
    }
  }

  async onChangeWorker(worker: MyWorker) {
    try {
      await this.base.change(worker);
    } catch (err) {
      console.error(err);
    } finally {
      this.getDatabase();
    }
  }

}