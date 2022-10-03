import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../../Validation";
import { useForm } from "react-hook-form";

import { Form } from "./styles";

export const MainForm = () => {
  return (
    <Form>
      <h1 className="title">Simule sua Antecipação</h1>

      <div className="form__container-body">
        <div className="form__container-input">
          <label htmlFor="">Informe o valor da venda *</label>
          <input type="text" />
        </div>
        <div className="form__container-input">
          <label htmlFor="">Em quantas parcelas *</label>
          <input type="text" />
          <p>Máximo de 12 parcelas</p>
        </div>
        <div className="form__container-input">
          <label htmlFor="">Informe o percentual de MDR *</label>
          <input type="text" />
        </div>
        <button className="form__submitButton" type="submit">
          ENVIAR
        </button>
      </div>
    </Form>
  );
};
