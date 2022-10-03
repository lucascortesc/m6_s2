import { createContext, useContext, useState } from "react";
import { IChildren, IResult } from "../../Interfaces";

interface IAntecipationProvider {}

const AntecipationContext = createContext<IAntecipationProvider>({} as IAntecipationProvider);

export const useAntecipation = () => useContext(AntecipationContext);

export const AntecipationProvider = ({ children }: IChildren) => {
  const [result, setResult] = useState<IResult>({} as IResult);
};
