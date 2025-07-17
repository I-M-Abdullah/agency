import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";

export const metadata: Metadata = {
  title: "Codebrit | Creative Agency In UK",
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
