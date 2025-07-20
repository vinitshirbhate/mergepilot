"use client";
import { useUser } from "@clerk/nextjs";

const DashBoardPage = () => {
  const { user } = useUser();
  return <div>{user?.firstName}</div>;
};

export default DashBoardPage;
