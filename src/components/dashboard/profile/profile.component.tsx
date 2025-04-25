import React, { useState } from "react";
import {
  useGetProfileInfoQuery,
  useUpdateProfileMutation,
} from "../../../redux/apis/user.api";
import { User } from "../../../models/user";
import toast, { Toaster } from "react-hot-toast";
import { ProfileSettingComponent } from "./profile.setting.component";

const ProfileComponent = () => {
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
      {data && (
        <ProfileSettingComponent
          user={data}
          onSave={onSave}
          loading={loading}
        />
      )}{" "}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ProfileComponent;
