import { Component, Input } from '@angular/core';

import { PersonInterface } from '../../interfaces/Person.interface';

@Component({
  selector: 'invgate-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item: PersonInterface;
}
