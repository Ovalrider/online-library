import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { IonSearchbar, IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports:[CommonModule, IonicModule]
})

export class HomeModule {}