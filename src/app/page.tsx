import {
  FeaturedEvents,
  FeaturedProjects,
  HeroSection,
  LatestArticles,
  PartnersSection,
} from "@/components/custom/landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomePage",
};

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <div className="w-full lg:max-w-7xl mx-auto">
        <FeaturedProjects />
        <FeaturedEvents />
        <LatestArticles />
        <PartnersSection />
      </div>
    </div>
  );
}
