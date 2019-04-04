import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoService } from './grupo.service';
import { GrupoListComponent } from './grupo-list/grupo-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import {RouterModule, Routes} from '@angular/router';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GrupoListComponent, AlbumDetailComponent],
  exports: [GrupoListComponent],
  providers: [GrupoService]
})
export class GrupoModule { }