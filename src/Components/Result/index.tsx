import { ResultContainer } from "./styled";

export const Result = () => {
  return (
    <ResultContainer>
      <p className="result__title">VOCÊ RECEBERÁ</p>
      <div className="result__separationLine" />
      <div className="result__container">
        <p>
          Amanhã: <span className="result__price">R$ 0,00</span>
        </p>
        <p>
          Em 15 dias: <span className="result__price">R$ 0,00</span>
        </p>
        <p>
          Em 30 dias: <span className="result__price">R$ 0,00</span>
        </p>
        <p>
          Em 90 dias: <span className="result__price">R$ 0,00</span>
        </p>
      </div>
    </ResultContainer>
  );
};
