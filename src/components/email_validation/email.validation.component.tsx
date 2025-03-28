import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import SSInput from "../ui-component/ss-input/ss-input";
import SSButton from "../ui-component/ss-button/ss-button";

interface Inputs {
  otp: string;
}

const EmailValidationComponent = () => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm<Inputs>();

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1 className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 cursor-pointer">
        Sign Out
      </h1>
      <h1 className="text-xl text-center whitespace-nowrap overflow-hidden text-ellipsis mb-4 text-gray-300">
        Enter the verification code sent to{" "}
        <span className="font-bold">demo1234sefc@gmail.com.</span>
      </h1>
      <div className="rounded-lg shadow-lg text-white space-y-6 w-96 p-6">
        <div className="space-y-4">
          <SSInput
            label="OTP"
            name="otp"
            placeholder="Enter your OTP"
            required={true}
            icon="fas fa-key"
            register={register}
          />
          <SSButton text="Verify OTP" type="button" className="w-full" />
        </div>
        <span className="text-sm text-center text-gray-500">
          Need help? Contact us at
          <a
            className="text-indigo-500 ml-2"
            href="mailto:support@dreamgen.com"
          >
            support@dreamgen.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default EmailValidationComponent;
