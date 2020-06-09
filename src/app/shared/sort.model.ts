import { MyWorker } from "src/app/shared/worker.model";

export enum attr {
    id = "id",
    name = "name",
    surname = "surname",
    patr = "patr",
    birthday = "birthday",
    number = "number",
    email = "email",
    department = "department",
}

export class Sorter {
    lastParam: attr;
    sortInversion: boolean = false;

    sortArrayWorkers(workers: MyWorker[], param: attr, donttoggle?: boolean): MyWorker[] {
        if (this.lastParam == param) {
            if (!donttoggle) this.sortInversion = !this.sortInversion;
        } else {
            this.sortInversion = false;
            this.lastParam = param;
        }

        workers.sort((w1: MyWorker, w2: MyWorker) => {
            let [a, b] = [w1[param], w2[param]];
            if (this.sortInversion) { [a, b] = [b, a] };
            return a > b ? 1 : a < b ? -1 : 0;
        });

        return workers;
    }
}

