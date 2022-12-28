import { lsApi } from "../../services/lsApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { registrationPageSelector } from "../RegistrationPage/store/selectors";
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
  const { user } = useAppSelector(registrationPageSelector);
  const token = lsApi.getToken();
  const dispatch = useAppDispatch();

  const handleSubmit = (event: ILoginUserData) => {
    dispatch({
      type: ERegistrationPageSagaActions.SIGN_IN_SAGA,
      payload: event,
    });
  };

  // if (token)
  //   return (
  //     <>
  //       <h2>Welcome</h2>
  //       <h3>{user.email}</h3>
  //     </>
  //   );
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
