import { Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { useAppSelector } from "../../../store/hooks/redux";
import { loginPageSelector } from "../store/selectors";

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

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={AuthSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              email: <Field type="text" name="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div>
              password: <Field type="password" name="password"></Field>
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>

            <br />
            <button type="submit" disabled={loading}>
              {isRegistration ? "Sign Up" : "Sign In"}
            </button>
          </Form>
        )}
      </Formik>
      {isRegistration ? (
        <NavLink to="/auth/login">Login</NavLink>
      ) : (
        <NavLink to="/auth/registration">Registration</NavLink>
      )}
    </>
  );
};

export default AuthForm;
