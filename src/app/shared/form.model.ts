import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyWorker } from 'src/app/shared/worker.model';

export function buildForm(): FormGroup {
    return new FormGroup({ // создание новой формы
        name: new FormControl(null, [Validators.required]), // поля формы
        surname: new FormControl(null, [Validators.required]),
        patr: new FormControl(null, [Validators.required]),
        birthday: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9,-]+$/)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        number: new FormControl(null, [Validators.pattern(/^[+,0-9,(,), ,-]+$/), Validators.required]),
        department: new FormControl(null, [Validators.required]),
    });
}

export let masks = {
    phone: ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
}

export function dataFrom(obj: MyWorker): MyWorker {
    return {
        name: obj.name,
        surname: obj.surname,
        patr: obj.patr,
        birthday: obj.birthday,
        email: obj.email,
        number: obj.number,
        department: obj.department
    };
}
