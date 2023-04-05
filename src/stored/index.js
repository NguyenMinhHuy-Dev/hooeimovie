import create from "zustand";

export const useStore = create((set) => ({
    user: undefined,
    favouriteList: [],
    loading: false,
    signin: false,
    setUser: (newUser) => 
        set({
            user: newUser,
        }),
    setFavouriteList: (newList) =>
        set({
            favouriteList: newList,
        }),
    setLoading: (newStatus) =>
        set({
            loading: newStatus
        }),
    setSignIn: (newStatus) =>
        set({
            signin: newStatus
        }),
}));