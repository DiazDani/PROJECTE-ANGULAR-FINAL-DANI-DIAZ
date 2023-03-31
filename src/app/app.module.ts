import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalegComponent } from './cataleg/cataleg.component';
import { CistellaComponent } from './cistella/cistella.component';
import { CondicionsComponent } from './condicions/condicions.component';
import { ContacteComponent } from './contacte/contacte.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexPaginaComponent } from './index-pagina/index-pagina.component';
import { IniciarSessioComponent } from './iniciar-sessio/iniciar-sessio.component';
import { MenuComponent } from './menu/menu.component';
import { RegistreClientComponent } from './registre-client/registre-client.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalegComponent,
    CistellaComponent,
    CondicionsComponent,
    ContacteComponent,
    FooterComponent,
    HeaderComponent,
    IndexPaginaComponent,
    IniciarSessioComponent,
    MenuComponent,
    RegistreClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
