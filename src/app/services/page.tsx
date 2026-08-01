import ServicesGrid from "@/components/ServicesGrid";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
export default function ServicesPage()
 
{
  return (
    <div className="py-8">
      <ServicesGrid />
      <Pricing />
      <Process/>
    </div>
  );
}
