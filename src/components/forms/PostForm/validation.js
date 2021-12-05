import { object, string, number } from "yup";

export default object({
  body: string().required("Body field is required").min(10, "Min 10 character"),
  title: string()
    .required("Title Field is required")
    .min(3, "Min 3 character")
    .max(200, "Max 200 character"),
  userId: number().required("User Field is required"),
});
