import * as yup from "yup";

const bodyAddSchema = yup.object().shape({
  name: yup.string().min(1).required(),
  description: yup.string().min(1).required(),
  fileName: yup.mixed().required(),
});

export default bodyAddSchema;
