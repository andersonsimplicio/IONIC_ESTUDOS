import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Data } from './data.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Drivers } from '@ionic/storage';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot({driverOrder:[Drivers.LocalStorage,Drivers.IndexedDB]})
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Data],
  bootstrap: [AppComponent],
})
export class AppModule {}
