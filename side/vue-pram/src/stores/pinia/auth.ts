import { defineStore } from "pinia";
import { reactive, computed } from "vue";

interface userProps {
  NAME?: string;
  ROLE?: Array<string>;
}

export const useAuth = defineStore("auth", () => {
  const user: userProps = reactive({});

  const getNAME = computed(() => user.NAME);
  const getROLE = computed(() => user.ROLE);

  return { user, getNAME, getROLE };
});
