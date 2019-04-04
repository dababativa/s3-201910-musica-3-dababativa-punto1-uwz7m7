import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GrupoListComponent} from '../grupo/grupo-list/grupo-list.component';
import {AlbumDetailComponent} from '../grupo/album-detail/album-detail.component';


const routes: Routes=[
  {path: 'grupos',
  children:[
    {
      path: 'list',
      component: GrupoListComponent
    },
  ]
  },
   {path:'albums',
   children:[
     {
      path:':id',
      component: AlbumDetailComponent
    }
    ]
   }
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})
  ],
  declarations: []
})
export class AppRoutingModule { }