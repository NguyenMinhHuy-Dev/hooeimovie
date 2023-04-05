import create from "zustand";

export const useStore = create((set) => ({
    user: undefined,
    favouriteList: [],
    loading: false,
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
}));