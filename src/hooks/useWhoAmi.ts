import { useQuery } from "@tanstack/react-query"

import { getLoggedUser } from "@/controllers/api"

export function useWhoAmi({ enabled }: { enabled: boolean }) {
  return useQuery({
    queryKey: ["whoAmi"],
    queryFn: getLoggedUser,
    enabled: enabled,
    //retry: true,
    //refetchInterval: enabled ? 120000 : false,
    //refetchIntervalInBackground: false,
  })
}
