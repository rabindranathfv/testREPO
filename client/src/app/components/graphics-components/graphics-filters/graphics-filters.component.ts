import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// service
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import * as moment from 'moment';

declare var require: any;
const camelcaseKeys = require('camelcase-keys');
@Component({
  selector: 'app-graphics-filters',
  templateUrl: './graphics-filters.component.html',
  styleUrls: ['./graphics-filters.component.scss']
})
export class GraphicsFiltersComponent implements OnInit {

  @Input() loading: boolean;
  @Input() filtersFieldlabel: string;
  @Input() filtersArray: any;
  @Input() dateFilter: boolean;
  @Input() categoryGraphs: any;

  public filtersEnabled: any; // filters enabled for chips display
  public clusterSelect: any;
  public communaSelect: any;
  public zonaSelect: any;
  public gseSelect: any;
  public frequencySelect: any;
  public valueSelect: any;
  public filterSelect: any;
  public options: any;
  public dateStart: any;
  public dateEnd: any;
  public chartjsDatas: any;
  public valueFieldLabel: string;
  public removable: boolean;
  public errorDates: boolean;
  public messageError: string;

  activeButtons: boolean;
  constructor( private route: ActivatedRoute,
               private _dashboardService: DashboardService
  ) {
    this.activeButtons = false;
    this.filterSelect = {name: '', index: '', options_url: ''};
    this.filtersEnabled = [];
    this.dateStart = '';
    this.dateEnd = '';
    this.valueFieldLabel = 'Valor';
    this.removable = true;
    this.errorDates = false;
    this.messageError = 'Debe seleccionar ambas fechas';
  }

  ngOnInit() {
    // this.ListenChartData();
  }

  public  addFilter(filter, value) {

    if (this.valueSelect !== '') {
        let filterPresent = false; // boolean to test if a filter is already existing in the filtersEnabled array

        if (this.filtersEnabled.length) {
        this.filtersEnabled.forEach((item) => {
          if (item.name !== this.filterSelect.name) {
            filterPresent = true;
          } else {
            filterPresent = false;
          }
        });
      } else {
        filterPresent = true;
      }

        if (filterPresent) {
          this.filtersEnabled.push({name: filter.name, valueFilter: value});


          switch ( this.filterSelect.name) {
            case 'cluster':
            this.filtersArray[0].disable = true;
            this.clusterSelect = value;
            break;

            case 'commune':
            this.filtersArray[1].disable = true;
            this.communaSelect = value;
            break;

            case 'censal_zone':
            this.filtersArray[2].disable = true;
            this.zonaSelect = value;
            break;

            case 'gse':
            this.filtersArray[3].disable = true;
            this.gseSelect = value;
            break;

            case 'frequency':
            this.filtersArray[4].disable = true;
            this.frequencySelect = value;
            break;

            default:
            break;
        }

    }

  }
  }

  public removeFilter(index) {

         switch (  this.filtersEnabled[index].name ) {
          case 'cluster':
          this.filtersArray[0].disable = false;
          this.clusterSelect = '';
          break;

          case 'commune':
          this.filtersArray[1].disable = false;
          this.communaSelect = '';
          break;

          case 'censal_zone':
          this.filtersArray[2].disable = false;
          this.zonaSelect = '';
          break;

          case 'gse':
          this.filtersArray[3].disable = false;
          this.gseSelect = '';
          break;

          case 'frequency':
          this.filtersArray[4].disable = false;
          this.frequencySelect = '';
          break;

          default:
          break;
      }
      this.filtersEnabled.splice(index, 1);

  }

  public handleChange() {
    this.valueSelect = '';
    if (this.filtersEnabled.length === 0) {
      this._dashboardService.getFilterOptions(this.filterSelect.options_url)
            .subscribe( (resp: any) => {
              this.options = resp.object.filter_options;
            });
    } else {

      let filtersSelected = '';
      this.filtersEnabled.map((filter, index) => {
        let filterName = filter.name;
        const filterValue = filter.valueFilter;
            if (index > 0) {
              const operator = '&';
              filterName = operator.concat(filterName);
            }
        const stringUrl = filterName.concat('='+filterValue);
        filtersSelected = filtersSelected.concat(stringUrl);

      });

      /* this._dashboardService.getFilterOptionsByParam(this.filterSelect.options_url, filtersSelected)
      .subscribe( (resp: any) => {
        this.options = resp.object.filter_options;
      }); */
    }
  }

  public changeValue() {
    if (this.filtersEnabled.length !== 0 &&  this.filtersEnabled[this.filtersEnabled.length - 1].name == this.filterSelect.name){
      this.filtersEnabled[this.filtersEnabled.length - 1].valueFilter = this.valueSelect;
    }
  }


  public getChartsByParam() {

    if (!this.errorDates) {
    this.disabledBtn();
    let dateStartString = null;
    let dateEndString = null;

    // Dates conversion

    if (this.dateStart) {
        const dateStartObj = moment(this.dateStart);
        dateStartString = dateStartObj.format('YYYY-MM-DD');
    }

    if (this.dateEnd) {
        const dateEndObj = moment(this.dateEnd);
        dateEndString = dateEndObj.format('YYYY-MM-DD');
    }
    console.log(this.clusterSelect, this.communaSelect , this.zonaSelect, this.gseSelect,
                 this.frequencySelect, dateStartString, dateEndString );
    /* this._dashboardService.getChartsByParam( this.clusterSelect, this.communaSelect , this.zonaSelect, this.gseSelect,
                                             this.frequencySelect, dateStartString, dateEndString )
          .subscribe( (resp: any) => {
            console.log(resp);
            resp.object.graphs = camelcaseKeys(resp.object.graphs, {deep: true});

            this.chartjsDatas = resp.object.graphs;
            if (this.zonaSelect) {
              const metaResponse = {...resp.object.meta};
              metaResponse['showCensal'] = true;
              this._dashboardService.updateFilterCensal( {...metaResponse});
            } else {
              this._dashboardService.updateFilterCensal({ showCensal : false});
            }
            this._dashboardService.updateChart(this.chartjsDatas);
            this.disabledBtn();
          });*/
        } 
  }

  public resetDates() {
      this.dateStart = '';
      this.dateEnd = '';
      this.errorDates = false;

  }

  /**
   * ListenChartData
   */
  public ListenChartData( ) {
    this._dashboardService.currentSubjectChart.subscribe( (chartD: any) => {
      console.log(chartD);
      this.chartjsDatas = chartD;
    });
  }

  /**
   * activateBtn
   */
  public disabledBtn() {
    this.activeButtons = !this.activeButtons;
  }

  public dateStartControl() {

  this.dateEnd === '' ? this.errorDates = true : this.errorDates = false;

  }

  public dateEndControl() {

  this.dateStart === '' ? this.errorDates = true : this.errorDates = false;

  }

}
