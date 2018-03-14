import welcomeState from "@app/views/welcome/welcome.state";
import { StateProvider } from "@uirouter/angularjs";
import indexState from "@app/views/index/index.state";

export class AppRouter {
static $inject = ["$stateProvider"];

    constructor($stateProvider: StateProvider){
        $stateProvider
            .state(welcomeState)
            .state(indexState);
    }
}