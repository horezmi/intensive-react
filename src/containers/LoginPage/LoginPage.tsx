import { useAppDispatch } from "../../store/hooks/redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ILoginUserData } from "../../services/fbApi";
import { ERegistrationPageSagaActions } from "../RegistrationPage/store/saga";
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: ILoginUserData) => {
    dispatch({
      type: ERegistrationPageSagaActions.SIGN_IN_SAGA,
      payload: event,
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
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
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
