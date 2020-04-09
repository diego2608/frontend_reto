import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public avg_age = 0;
  public dsv_age = 0.0;

  public barChartData:any[] = [
    {data: [], label: 'Cantidad de personas'},
  ];

  constructor(private dashService:DashboardService) { }

  ngOnInit(): void {

    this.dashService.getKpiClients().subscribe(data => {
      // console.log(data);
      this.avg_age = data.avg_age;
      this.dsv_age = data.desvstnd;

      data.clientsAge.forEach(dt => {
        this.barChartLabels.push(dt.age.toString())
        this.barChartData[0].data.push(dt.count);
      });

    });

  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }

}
