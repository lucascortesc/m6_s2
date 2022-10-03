import * as yup from "yup";

export const FormSchema = yup.object().shape({
  amount: yup.number().required("valor obrigatório"),
  installments: yup.number().min(1).max(12).required("número de parcelas obrigatório"),
  mdr: yup.number().required("MDR obrigatório"),
});
