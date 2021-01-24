import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  depName: string;

  constructor(
    private readonly departmentService: DepartmentService
  ) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.departmentService.addDepartment({name: this.depName});
    this.clear();
  }

  clear(): void {
    this.depName = '';
  }

}
