import { Ng1StateDeclaration } from "@uirouter/angularjs";
import { IndexComponent } from "./index.component";

export default <Ng1StateDeclaration> {
    name: "index",
    url: "/index",
    component: IndexComponent.$$name
};