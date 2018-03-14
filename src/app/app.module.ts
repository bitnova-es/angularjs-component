import * as angular from "angular";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

angular
    .module("app", [])
    .component(AppComponent.$$name, new AppComponent())
    .component(HeaderComponent.$$name, new HeaderComponent());