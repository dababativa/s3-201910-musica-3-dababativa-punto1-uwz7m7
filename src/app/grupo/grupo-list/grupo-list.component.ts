import { Component, OnInit } from '@angular/core';
import {Grupo} from '../grupo';
import {GrupoService} from '../grupo.service';

@Component({
  selector: 'app-grupo-list',
  templateUrl: './grupo-list.component.html',
  styleUrls: ['./grupo-list.component.css']
})
export class GrupoListComponent implements OnInit {

  listGrupos: Grupo[];


  constructor(private gService: GrupoService) { }

  getGrupos():void{
    this.gService.getGrupos().subscribe(grupos=>{this.listGrupos=grupos});
  }
  ngOnInit() {
    this.getGrupos();
}

}