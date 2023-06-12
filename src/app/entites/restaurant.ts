import { Arrondissement } from "./arrondissement";
import { Prix } from "./prix";
import { Type } from "./type";

export interface Restaurant {
    id?: number;
    nom?: string;
    adresse?: string;
    tel?: string;
    type?: Type;
    image?: string;
    prix?: Prix;
    arrondissement?: Arrondissement;
  }
