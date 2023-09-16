"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setdata] = useState();

  const OnLogout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout Successfully");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getDetails = async () => {
    const response = await axios.get("api/users/me");
    console.log(response.data);
    setdata(response.data.data._id);
  };

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center text-black sm:px-16">
          <h3 className="text-black text-xl font-semibold">Profile</h3>
          <p className="text-sm text-blue-500">profile page</p>
          {data}
        </div>
        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
          <button
            onClick={OnLogout}
            type="submit"
            className="w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Logout
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
