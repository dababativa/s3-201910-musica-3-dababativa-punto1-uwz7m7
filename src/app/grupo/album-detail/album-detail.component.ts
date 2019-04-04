import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Params} from '@angular/router';
import {AlbumDetail} from '../album-detail';
import {GrupoService} from '../grupo.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  constructor(private gService:GrupoService, private route:ActivatedRoute) { }

  aDetail : AlbumDetail;

  id:number;

  loader:any;

  getAlbum():void{
    this.gService.getAlbumDetail(this.id).subscribe(r =>{this.aDetail=r});
  }

  onLoad(params):void{
    this.id = parseInt(params['id']);
    this.aDetail = new AlbumDetail();
    this.getAlbum();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params:Params) => this.onLoad(params));
  }

  ngOnDestroy(){
    this.loader.unsubscribe();
}

}