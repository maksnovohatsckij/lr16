export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  patr: string;
  birthday: string;
  number: string;
  email: string;
  department: number;
}

export enum MyWorkerType {
  it,
  sales,
  delivery,
  legal,
}

