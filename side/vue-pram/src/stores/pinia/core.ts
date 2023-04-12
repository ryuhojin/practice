import { defineStore } from "pinia";
import { computed, reactive } from "vue";

interface coreProps {
  menus?: Array<any>;
  codes?: Array<any>;
}
export const useCore = defineStore("auth", () => {
  const core: coreProps = reactive({});

  const setCore = (params: coreProps | any) => {
    core.codes = params.codes;
    core.menus = params.menus;
  };

  const getMenus = computed(() => core.menus);
  const getCodes = computed(() => core.codes);

  return { core, setCore, getMenus, getCodes };
});
