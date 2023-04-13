import { defineStore } from "pinia";
import { computed, reactive } from "vue";

interface coreProps {
  codes?: Array<any>;
  menus?: Array<any>;
}
export const useCore = defineStore("auth", () => {
  const core: coreProps = reactive({});

  const setCore = (params: coreProps | any) => {
    core.codes = params.codes;
    core.menus = params.menus;
  };

  const getCodes = computed(() => core.codes);

  return { core, setCore, getCodes };
});
