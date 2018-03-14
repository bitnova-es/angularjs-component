import { IComponentOptions, IComponentController } from "angular";
import "./app.scss";

class AppComponentController implements IComponentController {
    property: string;
    external: string;

    constructor(){
        this.property = "Hello world!";
    }
}

export class AppComponent implements IComponentOptions {
    static $$name = "app";

    template;
    controller;
    bindings;

    constructor() {
        this.template = require('./app.html');
        this.controller = AppComponentController;
        this.bindings = {
            external: "<"
        };
    }
}