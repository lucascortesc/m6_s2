import axios from "axios";
import { toast } from "react-hot-toast";
import { createContext, useContext, useState } from "react";
import { IChildren, IResult, FormRequest } from "../../Interfaces";

interface IAntecipationProvider {
  getResult: (data: FormRequest, setIsLoading: (arg: boolean) => void) => void;
  result: IResult;
}

const AntecipationContext = createContext<IAntecipationProvider>({} as IAntecipationProvider);

export const useAntecipation = () => useContext(AntecipationContext);

export const AntecipationProvider = ({ children }: IChildren) => {
  const [result, setResult] = useState<IResult>({
    "1": 0,
    "15": 0,
    "30": 0,
    "90": 0,
  });

  const getResult = async (data: FormRequest, setIsLoading: (arg: boolean) => void) => {
    setIsLoading(true);

    try {
      const response = await axios.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data);

      setResult(response.data);
      setIsLoading(false);
    } catch (err) {
      toast.error("Algo deu errado, tente novamente");
      setResult({
        "1": 0,
        "15": 0,
        "30": 0,
        "90": 0,
      });
      setIsLoading(false);
    }
  };

  return (
    <AntecipationContext.Provider value={{ getResult, result }}>{children}</AntecipationContext.Provider>
  );
};
