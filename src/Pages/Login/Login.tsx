import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FirebaseError } from "firebase/app";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (values: typeof initialValues) => {
    const email = values.email;
    const password = values.password;
    console.log(email, password);

    if (auth) {
      const { userLogin } = auth;

      userLogin(email, password)
        .then(() => {
          Swal.fire({
            title: "Login Successful",
            icon: "success",
          });
          navigate("/");
        })
        .catch((error: FirebaseError) => {
          console.log(error);
          Swal.fire({
            title: "Incorrect Email or Password",
            icon: "error",
          });
        });
    }
  };

  return (
    <div>
      <div className="container mx-auto py-32">
        <h3 className="text-center text-4xl font-bold mb-16">Please Login</h3>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="card-body border rounded-lg w-3/4 2xl:w-3/5 mx-auto">
              <div className="form-control font-semibold">
                <label className="label">
                  <span>Email</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                />
                <ErrorMessage
                  className="text-red-500 mt-1 font-semibold"
                  name="email"
                  component="div"
                />
              </div>
              <div className="form-control font-semibold">
                <label className="label">
                  <span>Password</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  className="text-red-500 mt-1 font-semibold"
                  name="password"
                  component="div"
                />
              </div>
              <label className="label font-semibold">
                <p>
                  Do not have an account?{" "}
                  <span>
                    <Link
                      className="register-link text-blue-700 hover:font-bold"
                      to="/register"
                    >
                      Register
                    </Link>
                  </span>
                </p>
              </label>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-outline bg-[#EA062B] text-white"
                >
                  Login
                </button>
              </div>
              <SocialLogin></SocialLogin>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
