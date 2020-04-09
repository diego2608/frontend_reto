import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface Client {
  n: number;
  name: string;
  last_name: string;
  age: number;
  birthday: string;
  dprobably_death: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  private data: Client[] = [];

  // customColumn = 'name';
  defaultColumns = ['n', 'name', 'last_name', 'age', 'birthday', 'dprobably_death'];
  allColumns = [...this.defaultColumns];

  dataSource: NbTreeGridDataSource<Client>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dashService: DashboardService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<Client>) {

    this.dataSource = this.dataSourceBuilder.create(this.data);

  }


  ngOnInit(): void {

    this.dashService.getClients().subscribe(data => {
      let i = 1;
      let oData: TreeNode<Client>[] = [];

      data.forEach(dt => {
        let oClient: Client = { n: i, age: dt.age, birthday: dt.birthday, dprobably_death: dt.probably_death, last_name: dt.last_Name, name: dt.name };
        oData.push({ data: oClient, children: [], expanded: false });
        i++;
      });

      this.dataSource = this.dataSourceBuilder.create(oData);

    });

  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }


}
