import { Formik, Form, Field } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAppDispatch } from "../../store/hooks/redux";
import { initApp } from "./store/slice";

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

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("useEffect");
    dispatch({ type: initApp.type });
  }, []);

  const handleSubmit = (event: any) => {
    // TODO action to api
    console.log(event);
    if (event) {
      navigate("/admin");
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>

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

export default RegistrationPage;
