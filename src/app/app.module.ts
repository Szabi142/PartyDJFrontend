import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { HeaderSettingsComponent } from './header/header-settings/header-settings.component';
import { FooterSettignsComponent } from './footer/footer-settigns/footer-settigns.component';
import { WelcomePageComponent } from './container/welcome-page/welcome-page.component';
import { LoginPageComponent } from './container/login-page/login-page.component';
import { CreatePageComponent } from './container/create-page/create-page.component';
import { SelectPageComponent } from './container/select-page/select-page.component';
import { PartyPageComponent } from './container/party-page/party-page.component';
import { PlayerComponent } from './container/party-page/player/player.component';
import { JoinPageComponent } from './container/join-page/join-page.component';
import { RegisterPageComponent } from './container/register-page/register-page.component';
import { NotFoundPageComponent } from './container/not-found-page/not-found-page.component';
import { SettingsPageComponent } from './container/settings-page/settings-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  //{path: '', component: WelcomePageComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: WelcomePageComponent},
  {path: 'Select', component: SelectPageComponent},
  {path: 'Login', component: LoginPageComponent},
  {path: 'Register', component: RegisterPageComponent},
  {path: 'Create', component: CreatePageComponent},
  {path: 'Join', component: JoinPageComponent},
  {path: 'Party', component: PartyPageComponent},
  {path: 'Settings', component: SettingsPageComponent},
  {path: '**', component: NotFoundPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    TopMenuComponent,
    HeaderSettingsComponent,
    FooterSettignsComponent,
    WelcomePageComponent,
    LoginPageComponent,
    CreatePageComponent,
    SelectPageComponent,
    PartyPageComponent,
    PlayerComponent,
    JoinPageComponent,
    RegisterPageComponent,
    NotFoundPageComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
