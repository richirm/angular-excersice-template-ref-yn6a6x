import { Component, Input, TemplateRef } from '@angular/core';

import { PersonInterface } from '../../interfaces/Person.interface';

@Component({
  selector: 'invgate-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() templateItem: TemplateRef<any>;

  results: PersonInterface[] = [
    {
      id: 1,
      name: 'Alan',
    },
    {
      id: 2,
      name: 'Rodrigo',
    },
    {
      id: 3,
      name: 'Santiago',
    },
  ];
}
