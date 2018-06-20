import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import{ Routes, RouterModule} from '@angular/router'
//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TopComponent } from './components/top/top.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
import { EventoComponent } from './components/eventos/evento/evento.component';
import { EventoListComponent } from './components/eventos/evento-list/evento-list.component';

//AppRoutes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'eventos', component: EventosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    UsuariosComponent,
    EventosComponent,
    UsuarioComponent,
    UsuarioListComponent,
    EventoComponent,
    EventoListComponent,
    TopComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
