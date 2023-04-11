import { useQuery } from "@tanstack/vue-query";
import { get } from "..";

export const getList = useQuery({
  queryKey: ["getList"],
  queryFn: async () => {
    const data = await get("/getList", {});
    return data;
  },
});
