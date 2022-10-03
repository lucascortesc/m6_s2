import { ReactNode } from "react";

export interface FormRequest {
  amount: number;
  installments: number;
  mdr: number;
}

export interface IChildren {
  children: ReactNode;
}

export interface IResult {
  [key: string]: string;
}
