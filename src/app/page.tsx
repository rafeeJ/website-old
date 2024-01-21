import { Intro } from "@/features/homepage/intro";
import { Bio } from "@/features/homepage/bio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rafee Jenkins",
  description: "Software Engineer",
  openGraph: {
    title: "Rafee Jenkins",
    description: "Software Engineer",
    url: "https://rafeejenkins.com",
  },
  metadataBase: new URL("https://rafeejenkins.com"),
};

export default function Home() {
  return (
    <main>
      <Bio />
      <Intro />
    </main>
  );
}
