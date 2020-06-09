import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyWorker } from '../shared/worker.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  url = "http://localhost:3000/workers";

  constructor(private http: HttpClient) { }

  add(worker: MyWorker) {
    return this.http.post(this.url, worker).toPromise();
  }

  change(worker: MyWorker) {
    return this.http.put(this.url + "/" + worker.id, worker).toPromise();
  }

  delete(worker: MyWorker) {
    return this.http.delete(this.url + "/" + worker.id).toPromise();
  }

  get(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }
}
