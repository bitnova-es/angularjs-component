import * as angular from "angular";
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import uiRouter from "@uirouter/angularjs";
import { AppRouter } from './app.router';
import { WelcomeComponent } from "@app/welcome/welcome.component";
import { IndexComponent } from './views/index/index.component';

angular
    .module("app", [uiRouter])
    .config(AppRouter)
    .component(AppComponent.$$name, new AppComponent())
    .component(HeaderComponent.$$name, new HeaderComponent())
    .component(WelcomeComponent.$$name, new WelcomeComponent())
    .component(IndexComponent.$$name, new IndexComponent());