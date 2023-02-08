import { types } from "mobx-state-tree";

const SingleNavMenuModel = types.model({
  key: "",
  label: "",
  link: "",
});

export const NavMenus = types.model("NavModel", {
  success: false,
  menuList: types.array(SingleNavMenuModel),
});
