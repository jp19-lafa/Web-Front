import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicDataService {
  nodes: Node[] = [
    {
      _id: '1',
      title: 'AP Hogeschool',
      status: 'Active',
      info: 'Node located in Antwerp Ellermanstraat 14. Educational use.',
      tempDataSet: ['0', '10', '20', '30', '40'],
      lvl1DataSet: ['50', '40', '30', '20', '10'],
      lvl2DataSet: ['45', '40', '35', '30', '25'],
      lvl3DataSet: ['25', '30', '35', '40', '45'],
    },
    {
      _id: '2',
      title: 'Wife of Tim Dams school',
      status: 'Deactivated',
      info: 'Node located somewhere in Antwerp. Educational use STEM.',
      tempDataSet: ['40', '30', '20', '10', '0'],
    },
    {
      _id: '3',
      title: 'Dummy Node',
      status: 'Deactivated',
      info: 'Node located in the city of dummy.Educational use.',
    },
  ]
  activePage: Node = this.nodes[0];
  constructor() { }
}
export interface Node {
  _id: string,
  title: string,
  status: string,
  info: string,
  tempDataSet?: string[],
  lvl1DataSet?: string[],
  lvl2DataSet?: string[],
  lvl3DataSet?: string[],
}