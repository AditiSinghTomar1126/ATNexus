import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Servicecards from "@/components/Servicecards";
import RecentProjects from "@/components/RecentProjects";
import Process from "@/components/Process";
export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <Servicecards />
      <RecentProjects />
        <Process />
    </>
  );
}
