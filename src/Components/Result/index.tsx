import { useAntecipation } from "../../Providers/Antecipation";
import { ResultContainer } from "./styled";

export const Result = () => {
  const { result } = useAntecipation();
  return (
    <ResultContainer>
      <p className="result__title">VOCÊ RECEBERÁ</p>
      <div className="result__separationLine" />
      <div className="result__container">
        <p>
          Amanhã:
          <span className="result__price">
            R$ {result["1"].toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </p>
        <p>
          Em 15 dias:
          <span className="result__price">
            R$ {result["15"].toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </p>
        <p>
          Em 30 dias:
          <span className="result__price">
            R$ {result["30"].toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </p>
        <p>
          Em 90 dias:
          <span className="result__price">
            R$ {result["90"]?.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </p>
      </div>
    </ResultContainer>
  );
};
