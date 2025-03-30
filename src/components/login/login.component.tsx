import { useForm, SubmitHandler } from "react-hook-form";
import SSInput from "../ui-component/ss-input/ss-input";
import SSButton from "../ui-component/ss-button/ss-button";
import { useState } from "react";
import { useLoginUserMutation } from "../../redux/apis/auth.api";
import { storeUserInfo } from "../../services/auth.service";
import RedirectComponent from "../redirect.component";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  email: string;
  password: string;
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
      if (res.data.accessToken) {
        toast.success("User logged in successfully!");
        storeUserInfo({ accessToken: res.data.accessToken });
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
    <>
      <div className="flex h-screen">
        <div className="w-[35%] bg-zinc-800 flex flex-col justify-between p-4">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-400">
            StorySparkAI
          </h1>
          <h1 className="text-3xl text-gray-100">Welcome Back</h1>
        </div>
        <div className="w-[65%] bg-black flex items-center justify-start p-4">
          <div className="w-1/2 p-12 flex items-center">
            <div className="w-full max-w-md mx-auto space-y-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 text-gray-400 font-semibold">
                    LOGIN WITH EMAIL
                  </span>
                </div>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <SSInput
                  label="Email *"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required={true}
                  icon="fas fa-envelope"
                  register={register}
                />
                <SSInput
                  label="Password *"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required={true}
                  icon="fas fa-lock"
                  register={register}
                />
                <SSButton text="Sign In" type="submit" isLoading={isBusy} />
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 text-gray-400">OR</span>
                </div>
              </div>

              <button className="w-full bg-gray-300 font-medium py-2 !rounded-button hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 rounded text-indigo-600">
                <i className="fa-brands fa-google text-indigo-600"></i>
                Login with Google
              </button>

              <div className="text-center text-sm text-indigo-600">
                <div className="space-y-2">
                  <a
                    href="/signup"
                    className="block text-custom hover:underline"
                  >
                    Create a new account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default LoginComponent;
