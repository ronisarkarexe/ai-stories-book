import { useForm, SubmitHandler } from "react-hook-form";
import SSInput from "../ui-component/ss-input/ss-input";
import SSButton from "../ui-component/ss-button/ss-button";
import { useState } from "react";
import { useLoginUserMutation } from "../../redux/apis/auth.api";
import { storeUserInfo } from "../../services/auth.service";
import RedirectComponent from "../redirect.component";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const LoginComponent = () => {
  const [loginUser] = useLoginUserMutation();
  const { register, handleSubmit } = useForm<Inputs>();
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsBusy(true);
    try {
      const res = await loginUser({ ...data }).unwrap();
      if (res.accessToken) {
        toast.success("User logged in successfully!");
        storeUserInfo({ accessToken: res.accessToken });
        setIsLoggedIn(true);
      }
    } catch (err: unknown) {
      console.log("error: ", err);
    } finally {
      setIsBusy(false);
    }
  };

  if (isLoggedIn) {
    return <RedirectComponent defaultPath="/" />;
  }

  return (
    <div className="bg-slate-700 text-white min-h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-5xl text-indigo-700 font-bold">
            STORY SPARK AI
          </h2>
          <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-400">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <SSInput
              label="Email address"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              icon="fas fa-envelope"
              register={register}
            />
            <SSInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              icon="fas fa-lock"
              register={register}
            />
            <SSButton text="Sign In" type="submit" isLoading={isBusy} />
          </form>

          <p className="mt-4 text-center text-sm/6 text-gray-500">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default LoginComponent;
