import type { Information } from "./information.type";
import * as yaml from "yaml";

export const useInformationStore = defineStore("informationStore", {
  state: (): {
    data: Information | null;
  } => ({
    data: null,
  }),

  getters: {
    informationState(state): Information | null {
      return state.data === null ? null : state.data;
    },
  },

  actions: {
    async fetch() {
      try {
        // Fetch the YAML file from the public directory
        const response = await $fetch<string>("/information.yaml");

        this.data = yaml.parse(response);
      } catch (error) {
        console.error("Failed to fetch information data:", error);
      }
    },
  },
});
