import { LOCAL_STORAGE } from "../utils/Constants";

const isAuthenticated = () => {
    const user = getLoggedInUser();
    return !!user;
};

const getLoggedInUser = () => {
    const userToken = LOCAL_STORAGE?.AUTH_INFO && localStorage.getItem(LOCAL_STORAGE.AUTH_INFO);
    if (!userToken) {
        return false;
    }
    return JSON.parse(userToken);
};

const getAccessToken = (): string | null => {
    const token: string | null = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)
    const accessToken = token && JSON.parse(token);
    return accessToken;
}

const logOut = () => {
    localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE.AUTH_INFO);
};

export { getLoggedInUser, isAuthenticated, getAccessToken, logOut };
