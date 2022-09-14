import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Ability, AbilityBuilder } from "@casl/ability";
import { AbilityAction, Roles, Subjects } from "./user.config";
import { includes } from "lodash";

/**
 * Keycloak initialization configuration
 * @param keycloak 
 * @param httpClient 
 * @param ability 
 * @returns 
 */
function AppInitialization(router: Router, httpClient: HttpClient, ability: Ability) {
    return async () => {
        try {
            // const roles = getUserRoles();
            const roles: string[] = [Roles.ADMINISTRATOR];
            const { can, rules } = new AbilityBuilder(Ability);

            if (includes(roles, Roles.ADMINISTRATOR)) {
                can([AbilityAction.CREATE, AbilityAction.READ, AbilityAction.UPDATE, AbilityAction.DELETE], [Subjects.SETTINGS]);
            }

            if (includes(roles, Roles.MONITORING)) {
                can([AbilityAction.READ, AbilityAction.UPDATE], Subjects.REPORTS);
            }

            ability.update(rules);

            // Check if user is acccount not complete route, redirect to /
            if (location.pathname.includes('account-not-completed')) {
                router.navigateByUrl('');
            }
        } catch (e) {
            console.error(`User account not completed: ${e}`);
        }
    }
}

export default AppInitialization;
