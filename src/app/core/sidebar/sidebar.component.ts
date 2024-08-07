import { Component } from '@angular/core';
import { SidebarElementsComponent } from '../../shared/components/sidebar-elements/sidebar-elements.component';
// import ushirikianoLogo from '../../../../public/images/assets/'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarElementsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // ushirikianoLogoPath = ushirikianoLogo;

}
