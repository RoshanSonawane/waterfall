import { Component, ViewEncapsulation, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormControl } from '@angular/forms';
import { DateRange } from '@angular/material/datepicker';
import { jqxGridComponent, jqxGridModule, } from 'jqwidgets-ng/jqxgrid';
import { MatRadioModule } from '@angular/material/radio';
import { ApiService } from '../api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PeriodicElement } from './dataTable';

const ELEMENT_DATA: PeriodicElement[] = [
  { date: '01-03-2023', parked: 55, charged: 1.0079, totalAquisition: 55, netAquisition: 543, cost: 40, ftr: 75, renewalRevenue: 85, totalRevenue: 30, roi: 55, churn: 10 },
  { date: '02-03-2023', parked: 564, charged: 4.0026, totalAquisition: 33, netAquisition: 543, cost: 40, ftr: 75, renewalRevenue: 85, totalRevenue: 30, roi: 55, churn: 10 },
  { date: '03-03-2023', parked: 564, charged: 6.941, totalAquisition: 33, netAquisition: 543, cost: 40, ftr: 75, renewalRevenue: 85, totalRevenue: 30, roi: 55, churn: 10 },
  { date: '04-03-2023', parked: 564, charged: 9.0122, totalAquisition: 32, netAquisition: 543, cost: 40, ftr: 75, renewalRevenue: 85, totalRevenue: 30, roi: 55, churn: 10 },
  { date: '05-03-2023', parked: 564, charged: 10.811, totalAquisition: 64, netAquisition: 543, cost: 40, ftr: 75, renewalRevenue: 85, totalRevenue: 30, roi: 55, churn: 10 },
  { date: '06-03-2023', parked: 564, charged: 12.0107, totalAquisition: 255, netAquisition: 543, cost: 40, ftr: 75, renewalRevenue: 85, totalRevenue: 30, roi: 55, churn: 10 },
  { date: '07-03-2023', parked: 564, charged: 14.0067, totalAquisition: 45, netAquisition: 543, cost: 40, ftr: 75, renewalRevenue: 85, totalRevenue: 30, roi: 55, churn: 10 },
  { date: '08-03-2023', parked: 564, charged: 15.9994, totalAquisition: 35, netAquisition: 543, cost: 40, ftr: 75, renewalRevenue: 85, totalRevenue: 30, roi: 55, churn: 10 },
  { date: '09-03-2023', parked: 564, charged: 18.9984, totalAquisition: 63, netAquisition: 543, cost: 40, ftr: 75, renewalRevenue: 85, totalRevenue: 30, roi: 55, churn: 10 },
  { date: '10-03-2023', parked: 564, charged: 20.1797, totalAquisition: 25, netAquisition: 543, cost: 40, ftr: 75, renewalRevenue: 85, totalRevenue: 30, roi: 55, churn: 10 },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  // standalone: true,
  // imports: [ReactiveFormsModule,FormsModule]

})





export class HomeComponent implements OnInit {
  @ViewChild("myGrid", { static: false }) myGrid !: jqxGridComponent;


  displayedColumns: string[] = ['date', 'parked', 'charged', 'totalAquisition', 'netAquisition', 'netAquisition', 'cost', 'ftr', 'renewalRevenue', 'totalRevenue', 'roi', 'churn'];
  dataSource = ELEMENT_DATA;


  ngAfterViewInit() {
    // this.myGrid.autoresizecolumns();
    this.setAlignment('center');

  }

  source = {
    localdata: [] as any[],
    datafields: [
      { name: "head", type: "any", map: "0" },
      { name: "data1", type: "any", map: "1" },
      { name: "data2", type: "any", map: "2" },
      { name: "data3", type: "any", map: "3" },
      { name: "data4", type: "any", map: "4" },
      { name: "data5", type: "any", map: "5" },
      { name: "data6", type: "any", map: "6" },
      { name: "data7", type: "any", map: "7" },
    ],
    datatype: "array"
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns = [
    { text: "", datafield: "head", width: 220, pinned: true },
    { text: "Orange", datafield: "data1", width: 220, color: 'blue', align: 'center' },
    { text: "Etisalat", datafield: "data2", width: 220, color: 'blue', align: 'center' },
    { text: "WE", datafield: "data3", width: 220, color: 'blue', align: 'center' },
    { text: "Blended", datafield: "data4", width: 420, color: 'blue', align: 'center', },
    { text: "Blended", datafield: "data5", width: 120, color: 'blue', align: 'center', },
    { text: "TEST", datafield: "data6", width: 120, color: 'blue', align: 'center', },
    { text: "Blended", datafield: "data7", width: 120, color: 'blue', align: 'center', },
  ];


  setAlignment(align: string): void {
    if (this.myGrid) {
      this.myGrid.beginupdate();
      for (let index = 0; index < this.columns.length; index++) {
        this.myGrid.setcolumnproperty(this.columns[index].datafield, 'align', align);
        this.myGrid.setcolumnproperty(this.columns[index].datafield, 'cellsalign', align);
      }
      this.myGrid.endupdate();
    }
  }

  gridData = {
    RecordCount: 8,
    tableData: [
      {
        Head: 'Total Spends',
        data1: 52000,
        data2: 0,
        data3: 1373,
        data4: 2443,
        data5: 2443,
        data6: 2443,
        data7: 2443,
      },
      {
        Head: 'Total Revenue',
        data1: 2443,
        data2: 1,
        data3: 662,
        data4: 2443,
        data5: 2443,
        data6: 2443,
        data7: 2443,
      },
      {
        Head: 'Current ROI',
        data1: '4.70%',
        data2: '204.64%',
        data3: "48.21%",
        data4: '5297.10%',
        data5: 2443,
        data6: 2443,
        data7: 2443,
      },
      {
        Head: 'Activation count',
        data1: 130049,
        data2: 1070,
        data3: 52000,
        data4: 0,
        data5: 2443,
        data6: 2443,
        data7: 2443,
      },
      {
        Head: 'ECPA',
        data1: 0.40,
        data2: 0.00,
        data3: 0.03,
        data4: 9007.88,
        data5: 2443,
        data6: 2443,
        data7: 2443,
      },
      {
        Head: 'FTR',
        data1: '2.06%',
        data2: '19176692.94%',
        data3: '0.02%',
        data4: '56.19%',
        data5: 2443,
        data6: 2443,
        data7: 2443,
      },
      {
        Head: 'Churn Count',
        data1: '0.51%',
        data2: '12092.24%',
        data3: '0.02%',
        data4: '0.00%',
        data5: 2443,
        data6: 2443,
        data7: 2443,
      },
      {
        Head: 'Active Base',
        data1: '99.49%',
        data2: '-11992.24%',
        data3: '99.98%',
        data4: 2443,
        data5: 2443,
        data6: 2443,
        data7: 2443,
      },
    ]
  };

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return "100%";
    }

    return 850;
  }

  startDate: any;
  endDate: any;

  biller: string[] = [''];
  operator: string[] = [''];
  mediaSource: string[] = [''];
  mode: string[] = ['GOOGLE', 'WAP', 'INAPP'];
  service: string[] = [''];
  toppings = new FormControl('');
  geo!: string;
  toppingList: any;
  billerList: any[]=[];
  selectedOperator: any ;
  operatorList: any[] = []; // Assuming operatorList is an array of objects with 'id' property.
  selectedOperatorlist: string[] = []; // If you have a list for selected operators.
serviceData:any={operatorid:null,billerName:null};
medialist:any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    //this.toppingList = [];

    this.territoryData();

    for (const list of this.gridData.tableData) {
      const tempData = [

        list.Head,
        list.data1,
        list.data2,
        list.data3,
        list.data4,
        list.data5,
        list.data6,
        list.data7,
      ];
      this.source.localdata.push(tempData);
    }
    this.source.localdata.push([]);

  }


  territoryData() {

    this.api.getTerritories().subscribe((territories: any[]) => {
      this.toppingList = territories;

      console.log('teerrrr:', this.toppingList)
    },
      (error) => {
        console.error('Error fetching territories: ', error);
      });


  }


  getOperatorList() {

    this.api.getOperator(this.geo).subscribe((operatorResponce: any) => {
      this.operatorList = operatorResponce;
      console.log("operator list====", this.operatorList)
      this.operatorList = [
        { id: 'all', name: 'All Operators' }, // Add "All" as the first option
        ...operatorResponce
      ];
    })


  }

  getBillerList() {
    let data 
    if (this.selectedOperator === 'all') {
      data = this.operatorList.map(operator => operator.id).join(',');
      data = data.replace('all,', '');
    } 
    else{
      data = this.selectedOperator;
    }
    console.log("Selected Operator:", data);

    this.api.getBillers(data).subscribe((billerResponce: any) => {
      this.billerList = billerResponce;
      console.log("getBillers======:", this.billerList);

    })
  }

  getMediaSourceList() {

    if (this.selectedOperator === 'all') {
      let sddd = this.operatorList.map(operator => operator.id).join(',');
      this.serviceData.operatorid = sddd.replace('all,', '');
    } 
    else{
      
      this.serviceData.operatorid = this.selectedOperator;

    }
    this.serviceData.billerName = this.selectedOperatorlist;
    console.log("mmmmmmmmm:", this.serviceData);
    
   this.api.getMediaSource(this.serviceData).subscribe((mediaSource:any)=>{
    this.medialist = mediaSource;
    console.log("mmmmdddddd",this.medialist)
   })

  }




  resetForm() {
    this.startDate = '';
    this.endDate = '';
    this.geo = '';
    this.biller = [];
    this.operator = [];
    this.mediaSource = [];
    this.mode = [];
    this.service = [];
  }

  submitForm() {
    const formData = {
      StartDate: this.startDate,
      EndDate: this.endDate,
      Geo: this.geo,
      Biller: this.biller,
      Operator: this.operator,
      Mode: this.mode,
      MediaSource: this.mediaSource,
      Service: this.service
    }
    console.log("Data here", formData);
  }

  resizeTable() {
    this.myGrid.autoresizecolumns();
  }

}
