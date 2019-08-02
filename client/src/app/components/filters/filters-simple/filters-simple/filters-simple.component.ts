import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filters-simple',
  templateUrl: './filters-simple.component.html',
  styleUrls: ['./filters-simple.component.scss']
})
export class FiltersSimpleComponent implements OnInit {

  @Input () filtersInfos: any;
  public modelFilters: any;

  constructor() { 
    this.modelFilters = {};

  }

  ngOnInit() {
  }

  ngOnChanges() {
  if(this.filtersInfos){
    this.setFiltersModels()
  }



  }

  public setFiltersModels(){

       this.filtersInfos.filters.map((filter: any)=>{
       
        filter.type=='multiple'? this.modelFilters[filter['model']] = [filter['defaultValue']]:this.modelFilters[filter['model']] = filter['defaultValue'];   
      
    })

  }

  public clickActionBtn(btnId: any){

      console.log(btnId)

  }


}
