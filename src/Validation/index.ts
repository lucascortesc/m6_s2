import * as yup from "yup";

export const FormSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Valor deve ser um número")
    .required("valor obrigatório")
    .min(1000, "Mínimo 1.000")
    .max(100000000, "Máximo 100.000.000"),
  installments: yup
    .number()
    .typeError("Parcela deve ser um número")
    .min(1, "Mínimo 1")
    .max(12, "Máximo 12")
    .required("Número de parcelas obrigatório"),
  mdr: yup
    .number()
    .typeError("MDR deve ser um número")
    .min(0, "Mínimo 0")
    .max(100, "Máximo 100")
    .required("MDR obrigatório"),
});
