import { ColorType } from "../types/color";

export interface RouteConfig {
  pageNumber: number;
  themeColor: ColorType;
}

export const ROUTE_MAP: Record<string, RouteConfig> = {
  "/o-que-e": { pageNumber: 1, themeColor: "cyan" },
  "/tipos-de-ia": { pageNumber: 2, themeColor: "violet" },
  "/desinformacao": { pageNumber: 3, themeColor: "amber" },
  "/etica-e-responsabilidade": { pageNumber: 4, themeColor: "emerald" },
  "/boas-praticas": { pageNumber: 5, themeColor: "rose" },
};

export const PAGE_PATHS = [
  "/o-que-e",
  "/tipos-de-ia",
  "/desinformacao",
  "/etica-e-responsabilidade",
  "/boas-praticas",
];
