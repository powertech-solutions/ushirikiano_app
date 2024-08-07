import { Component } from '@angular/core';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-sidebar-elements',
  standalone: true,
  imports: [NgFor, SidebarItemComponent],
  templateUrl: './sidebar-elements.component.html',
  styleUrl: './sidebar-elements.component.css'
})
export class SidebarElementsComponent {

  sidebarLinks = [
    {
      name: "Tableau de bord",
      chemin: "/dashboard",
      icon: ""
    },
    {
      name: "",
      chemin: "",
      icon: ""
    },
    {
      name: "",
      chemin: "",
      icon: ""
    },
    {
      name: "",
      chemin: "",
      icon: ""
    },
  ]

}
