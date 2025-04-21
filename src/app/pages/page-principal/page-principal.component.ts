import { Component } from '@angular/core';
import { RodapeComponent } from '../rodape/rodape.component';

@Component({
  selector: 'app-page-principal',
  standalone: true,
  imports: [
    RodapeComponent
  ],
  templateUrl: './page-principal.component.html',
  styleUrl: './page-principal.component.css'
})
export class PagePrincipalComponent {

}
