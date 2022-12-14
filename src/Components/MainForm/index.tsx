import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../../Validation";
import { useForm } from "react-hook-form";
import { Form, Loading } from "./styles";
import { FormRequest } from "../../Interfaces";
import { useAntecipation } from "../../Providers/Antecipation";
import { useEffect, useState } from "react";

export const MainForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const { getResult } = useAntecipation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRequest>({ resolver: yupResolver(FormSchema) });

  const onSubmit = (data: FormRequest) => {
    getResult(data, setIsLoading);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="title">Simule sua Antecipação</h1>

      <div className="form__container-body">
        <div className="form__container-input">
          <span className="error">{errors.amount?.message}</span>
          <label htmlFor="amount">Informe o valor da venda *</label>
          <input type="text" id="amount" {...register("amount")} />
        </div>
        <div className="form__container-input">
          <span className="error">{errors.installments?.message}</span>
          <label htmlFor="installments">Em quantas parcelas *</label>
          <input type="text" id="installments" {...register("installments")} />
          <p>Máximo de 12 parcelas</p>
        </div>
        <div className="form__container-input">
          <span className="error">{errors.mdr?.message}</span>
          <label htmlFor="">Informe o percentual de MDR *</label>
          <input type="text" id="mdr" {...register("mdr")} />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <button className="form__submitButton" type="submit">
            ENVIAR
          </button>
        )}
      </div>
    </Form>
  );
};
