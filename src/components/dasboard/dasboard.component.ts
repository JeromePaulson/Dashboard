import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label, SingleDataSet } from 'ng2-charts';
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  cardListData =[
    {
      Type:'number',
      Data: '56',
      Text: 'Total Number of task',
      DataList: ['10','90'],
      ChartColors: [
        {
          backgroundColor: [],
          borderWidth: [0, 0]

        },
      ]
    },
    {
      Type: 'chart',
      Data: '',
      Text: 'Total number of task on track',
      DataList: ['70', '30'],
      ChartColors: [
        {
          backgroundColor: ['#198754', '#e8e8e8'],
          borderWidth: [0, 0]

        },
      ]
    },
    {
      Type: 'chart',
      Data: '',
      Text: 'Total number of task delayed',
      DataList: ['25', '75'],
      ChartColors: [
        {
          backgroundColor: ['#fd7e14', '#e8e8e8'],
          borderWidth: [0, 0]

        },
      ]
    },
    {
      Type: 'chart',
      Data: '',
      Text: 'Total number of task significant delayed',
      DataList: ['40', '60'],
      ChartColors: [
        {
          backgroundColor: ['#dc3545', '#e8e8e8'],
          borderWidth: [0, 0]

        },
      ]
    },
    {
      Type: 'chart',
      Data: '',
      Text: 'Total number of task completed',
      DataList: ['50', '50'],
      ChartColors: [
        {
          backgroundColor: ['#198754', '#e8e8e8'],
          borderWidth: [0, 0]

        },
      ]
    },
  ]

  public doughnutChartType: ChartType = 'doughnut';
  public chartOptions: ChartOptions = {
    responsive: true,
    cutoutPercentage: 70,
    tooltips: { enabled: false },
  };

  public pieChartOptions: ChartOptions = {
    responsive: true,
    cutoutPercentage: 70,
  };
  public pieChartLabels: Label[] = ["Label 1", "Label 2"];
  public pieChartData: SingleDataSet = [40, 123];
  public pieChartType: ChartType = "doughnut";
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['#247584 ', '#2e90a2'],
      borderWidth: [0, 0],
      borderColor: ['#247584 ', '#2e90a2'],
      hoverBackgroundColor: ['#247584 ', '#2e90a2'],
      hoverBorderColor: ['#247584 ', '#2e90a2'],
      hoverBorderWidth: [5, 5],

    },
  ]
  public pieChartPlugins = [

  ];

  public testdata: any = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.pieChartData.length; ++i) {
      if (this.pieChartData[i] == 0) {
        this.testdata.push("");
      } else {
        this.testdata.push(this.pieChartData[i]);
      }
    }
  }
  counter(i: number) {
    return new Array(i);
  }
}
