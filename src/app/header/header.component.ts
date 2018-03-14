import { IComponentOptions } from 'angular';
import "./header.scss";

export class HeaderComponent implements IComponentOptions{
    static $$name = "header";

    template = require("./header.html");
    bindings = {
        title: "<"
    };
}