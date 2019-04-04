import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GrupoModule } from './grupo/grupo.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {RouterModule, Routes} from '@angular/router';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        GrupoModule,
        AppRoutingModule,
        RouterModule
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}