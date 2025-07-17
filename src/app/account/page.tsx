import React from "react";
import { Metadata } from "next";
import AccountMain from "@/pages/account/account-main";

export const metadata: Metadata = {
  title: "Codebrit | Creative Agency In UK - Account page",
};

const AccountPage = () => {
  return <AccountMain />;
};

export default AccountPage;
