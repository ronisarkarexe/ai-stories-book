import React, { useState } from "react";
import { UserSettings } from "./user.setting.component";
import {
  useGetProfileInfoQuery,
  useUpdateProfileMutation,
} from "../../../redux/apis/user.api";
import { User } from "../../../models/user";
import toast, { Toaster } from "react-hot-toast";

const SettingComponent = () => {
  const { data } = useGetProfileInfoQuery();
  const [updateProfile] = useUpdateProfileMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const onSave = async (data: Partial<User>) => {
    setLoading(true);
    try {
      const result = await updateProfile(data).unwrap();
      if (result) {
        toast.success("Profile updated successfully.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {data && <UserSettings user={data} onSave={onSave} loading={loading}/>}{" "}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default SettingComponent;
