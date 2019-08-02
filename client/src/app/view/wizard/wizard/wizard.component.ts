import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormComponent } from 'src/app/components/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/interfaces/forms/field.interface';
import { BehaviorSubject } from 'rxjs';

// mock datas
import { WizardMockDatas } from '../../../_mock-datas';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  public resource: string; // resource for API
  public url: string;

  @ViewChild('dynForm') form: DynamicFormComponent;
  // Form fields datas, type of FieldConfig with Wizard field into Interface
  regConfig: any[] = [];
  Wizardform: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor( private _dashboardService: DashboardService,
               public activatedRoute: ActivatedRoute,
               public router: Router,
               private fb: FormBuilder
  ) {
    this.url = this.activatedRoute.snapshot.data.url;
    this.resource = this.activatedRoute.snapshot.data.resource;
   }

  ngOnInit() {
    console.log('**** WIZARD MOCK DATA *****', WizardMockDatas);
    this.regConfig = [...WizardMockDatas];
  }

}
