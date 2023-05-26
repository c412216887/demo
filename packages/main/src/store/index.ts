import type { Navigation } from "@demo/types";
import { defineStore } from "pinia";

import axios from "axios";
import { getAxiosData } from "@demo/utils";

export const useStore = defineStore("store", {
  state(): {
    navigations: Navigation[];
  } {
    return {
      navigations: [],
    };
  },
  actions: {
    async getNavigation() {
      if (this.navigations.length === 0) {
        const data = await axios.get(
          `${import.meta.env.VITE_HTTP}/m1/2321362-0-default/api/v1/getMenus`
        );
        this.navigations = getAxiosData(data) ?? [];
      }
    },
  },
});
