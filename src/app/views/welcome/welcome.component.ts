import { IComponentOptions } from 'angular';
import "./welcome.scss";

export class WelcomeComponent implements IComponentOptions{
    static $$name = "welcome";
    template = require("./welcome.html");
    bindings = {
        person: "<"
    };
}