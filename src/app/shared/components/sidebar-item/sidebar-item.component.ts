import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { IconModule } from '../../../../../projects/icon/src/public-api';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
// import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';


@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css',
  providers: [provideIcons({ heroUsers })],
})
export class SidebarItemComponent {
  @Input() data:any
}
