import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MainService {

    employees;
    activeUserId = 0;

    constructor(private http: HttpClient) {
        http.get('../../assets/Employees.json').subscribe(response => {
            this.employees = response;
            console.log(this.employees);
        });
    }

}
