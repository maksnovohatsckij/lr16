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
    sortInversionBool: boolean[] = [];
    sortArrayWorkers(workers: MyWorker[], param: attr, donttoggle?: boolean): MyWorker[] {
        if (this.sortInversionBool[param] === undefined) this.sortInversionBool[param] = Boolean(donttoggle);
        if (!donttoggle) this.sortInversionBool[param] = !this.sortInversionBool[param];

        workers.sort((w1, w2) => {
            let a = w1[param];
            let b = w2[param];
            if (!this.sortInversionBool[param]) { [a, b] = [b, a] };
            return a > b ? 1 : a < b ? -1 : 0;
        });
        return workers;
    }
}

