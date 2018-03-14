import { Ng1StateDeclaration, Transition } from "@uirouter/angularjs";
import { WelcomeComponent } from './welcome.component';

PersonResolver.$inject = ["$transition$"];
function PersonResolver($transition$: Transition) {
    return $transition$.params();
}

export default <Ng1StateDeclaration>{
        name: "welcome",
        url: "/welcome",
        params: {
            name: null
        },
        component: WelcomeComponent.$$name,
        resolve: {
            person: PersonResolver
        }
};