import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [HeaderComponent],
    exports:[HeaderComponent],
    imports: [
      CommonModule, 
      IonicModule
  
    ]
  })
  export class ComponentsModule { }
  