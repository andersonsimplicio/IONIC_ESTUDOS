import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { DataService } from './data.service';
import { EventService } from './event.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot({driverOrder:[Drivers.LocalStorage,Drivers.IndexedDB]})
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },DataService,EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
