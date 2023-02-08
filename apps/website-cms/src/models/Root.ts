import { useContext, createContext } from "react";
import { Instance, types } from "mobx-state-tree";
import { NavMenus } from "./NavMenus";

const RootModel = types.model("RootModel", {
  navMenus: NavMenus,
  // homePage: HomePage
});

let initialState = RootModel.create({
  navMenus: NavMenus.create(),
  // homePage: HomePage.create()
});

export const rootStore = initialState;

export type RootInstance = Instance<typeof RootModel>;

const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export const useMst = () => {
  const store = useContext(RootStoreContext);

  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }

  return store;
};
