import { object, string, number } from "yup";

export default object({
  body: string().required("Body field is required").min(10, "Min 10 character"),
  name: string()
    .required("Name Field is required")
    .min(3, "Min 3 character")
    .max(100, "Max 100 character"),
  email: string()
    .email("Must be a valid email")
    .required("Email Field is required")
    .min(3, "Min 3 character")
    .max(100, "Max 100 character"),
  postId: number().required("Post Field is required"),
});
