import { IComponentOptions } from 'angular';
import "./index.scss";

export class IndexComponent implements IComponentOptions {
    static $$name = "index";

    template = require("./index.html");
}