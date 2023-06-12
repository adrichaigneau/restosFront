import { Restaurant } from "./restaurant";
import { Theme } from "./theme";

export interface Avis {
  id?: number;
  surnom?: string;
  texte?: string;
  restaurant?: Restaurant;
  theme?: Theme;
}
