import { useQuery } from "@tanstack/react-query";
import { getData } from "api/getData";

export type Nav = {
  title: string;
  link: string;
};

export type Home = {
  "header-title": string;
  "header-cta": string;
};

export const useData = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["store/data"],
    queryFn: () => getData(),
    staleTime: Infinity,
  });

  const navigation: Nav[] = data?.nav || [];
  const home: Home = data?.home || {};

  return {
    navigation,
    home,
    isLoading,
    error,
  };
};
