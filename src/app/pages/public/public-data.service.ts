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
      info: 'Node located in Antwerp Ellermanstraat 14. Educational use.'
    },
    {
      _id: '2',
      title: 'Wife of Tim Dams school',
      status: 'Deactivated',
      info: 'Node located somewhere in Antwerp. Educational use STEM.',
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
}