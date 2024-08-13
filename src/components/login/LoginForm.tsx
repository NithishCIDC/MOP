import { Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { formSchema } from "../../utils/Validation";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";

const LoginForm: React.FC = () => {
  const [isPassword, setIsPassword] = useState(true);
  return (
    <div className="vstack border border-1 rounded-3 p-3 px-5 gap-3 shadow-lg">
      <h3 className="text-center text-primary mb-4">Login</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {({ errors, touched }) => (
          <Form className="vstack gap-3 ">
            <div>
              <Field name="email" type="email" className="border border-1  p-2 rounded-2 w-100 feild-form" placeholder="Email" />
              {touched.email && errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div>
              <div className="border border-1 rounded-2 w-100 d-flex align-items-center p-0">
                <Field
                  name="password"
                  type={isPassword ? "password" : "text"}
                  className="border-0 flex-fill p-2 rounded-2 feild-form"
                  placeholder="Password"
                />
                {isPassword ? (
                  <IoEyeOff className="mx-3 pass-icon" onClick={() => setIsPassword(!isPassword)} />
                ) : (
                  <IoEye className="mx-3 pass-icon" onClick={() => setIsPassword(!isPassword)} />
                )}
              </div>
              {touched.password && errors.password && <div className="error">{errors.password}</div>}
            </div>

            <div className="text-primary">Forgot Password ?</div>
            <button type="submit" className="bg-primary text-white border-0 rounded fw-semibold py-1">
              Continue
            </button>
          </Form>
        )}
      </Formik>
      <p className="text-center  m-0">
        Don't have an account? <span className="text-primary">Sign Up</span>
      </p>
      <Row>
        <Col className=""></Col>
        <Col className="text-center">OR</Col>
        <Col></Col>
      </Row>
      <button className="btn border-secondary-subtle border-1 p-2 text-start rounded bg-white">
        <FcGoogle className="me-2 fs-3" />
        Continue with Google
      </button>
      <button className="btn border-secondary-subtle border-1 p-2 text-start rounded bg-white mb-3">
        <ImFacebook2 className="text-primary me-2 fs-3" />
        Continue with Facebook
      </button>
    </div>
  );
};

export default LoginForm;
