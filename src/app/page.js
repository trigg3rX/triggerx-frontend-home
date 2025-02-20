import Homepage from "@/components/Homepage";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

export const metadata = {
  title: "TriggerX",
  description:
    "Automate Tasks Effortlessly",
};
