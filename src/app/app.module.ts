import * as angular from "angular";
import { AppComponent } from './app.component';

angular
    .module("app", [])
    .component(AppComponent.$$name, new AppComponent());