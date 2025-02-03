import { Analytics } from "@vercel/analytics/react";
import LoginPage from "./home/page";

export default function Home() {
  return (
    <>
      <Analytics />
      <LoginPage />
    </>
  );
}
