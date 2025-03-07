import { useThemeConfig } from '@docusaurus/theme-common';
import { useAuth } from 'react-oidc-context';
import { LOGIN_BUTTON, LOGIN_PATH, LOGOUT_BUTTON, LOGOUT_PATH } from "./constants";

export function useNavbarItems() {
    const auth = useAuth();

    let label, to;
    if (auth.isAuthenticated) {
        label = LOGOUT_BUTTON;
        to = LOGOUT_PATH;
    } else {
        label = LOGIN_BUTTON;
        to = LOGIN_PATH;
    }

    // TODO temporary casting until ThemeConfig type is improved
    // return useThemeConfig().navbar.items;
    let items = useThemeConfig().navbar.items;
    items.push({
        label: label,
        position: "right",
        to: to
    });

    // remove irrelevant items
    if (auth.isAuthenticated) items = items.filter(x => x.label !== LOGIN_BUTTON);
    else items = items.filter(x => x.label !== LOGOUT_BUTTON);

    const uniqueItems = [...new Map(items.map(x => [x.label, x])).values()];

    return uniqueItems;
}