import Homepage from "@/components/Homepage";

export default function Home() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

export const metadata = {
  metadataBase: new URL("https://www.triggerx.network/"),
  title: "TriggerX",
  description: "Automate Tasks Effortlessly",
  openGraph: {
    images: [
      {
        url: "opengraph-image.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "opengraph-image.jpg",
        width: 1800,
        height: 1600,
        alt: "Homepage",
      },
    ],
  },
};
