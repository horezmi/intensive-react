import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { useAppSelector } from "../../../store/hooks/redux";
import { loginPageSelector } from "../store/selectors";
import { Button } from "@mui/material";
import * as Styled from "./styles";

const AuthSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

interface IAuthFormProps {
  onSubmit: (event: any) => void;
  isRegistration: boolean;
}

const AuthForm = ({ onSubmit, isRegistration }: IAuthFormProps) => {
  const { loading } = useAppSelector(loginPageSelector);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: AuthSchema,
    onSubmit,
  });

  return (
    <>
      <Styled.AuthForm onSubmit={formik.handleSubmit}>
        <Styled.TextFieldsContainer>
          <Styled.TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Styled.TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Styled.TextFieldsContainer>

        <br />
        <Button
          disabled={loading}
          color="primary"
          variant="contained"
          type="submit"
        >
          {isRegistration ? "Sign Up" : "Sign In"}
        </Button>

        {isRegistration ? (
          <NavLink to="/auth/login">Login</NavLink>
        ) : (
          <NavLink to="/auth/registration">Registration</NavLink>
        )}
      </Styled.AuthForm>
    </>
  );
};

export default AuthForm;
