import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resources-cell',
  templateUrl: './resources-cell.component.html',
  styleUrls: ['./resources-cell.component.scss']
})
export class ResourcesCellComponent {

  public childs: any;
  private params: any;
  
  constructor(
    private router: Router
  ) { }

  agInit(params: any): void {
    this.params = params;
    this.childs = this.params.data.hasChild;
  }

}
