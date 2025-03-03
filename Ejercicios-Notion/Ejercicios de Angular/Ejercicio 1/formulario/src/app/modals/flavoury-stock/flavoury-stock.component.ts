
import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-flavoury-stock',
  standalone: false,
  templateUrl: './flavoury-stock.component.html',
  styleUrl: './flavoury-stock.component.css'
})
export class FlavouryStockComponent {
  @Input() modalContent: string = '';
  @Input() modalTitle: string = ''

}
