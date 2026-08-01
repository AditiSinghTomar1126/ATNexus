
"use client";


import {
  SiReact,SiNextdotjs,SiTypescript,SiJavascript,SiTailwindcss,
  SiSpringboot,SiMysql,SiPostgresql,SiPrisma,SiDocker,
  SiGit,SiGithub,SiVercel,SiNodedotjs,
  SiOpenjdk,SiRedis,SiGraphql,SiFirebase,SiMongodb
} from "react-icons/si";
import { Circle, Terminal, Zap, ArrowRight, Activity } from "lucide-react";

const tech = [
["React",SiReact,"#61DAFB"],["Next.js",SiNextdotjs,"black"],
["TypeScript",SiTypescript,"#3178C6"],["JavaScript",SiJavascript,"#F7DF1E"],
["Tailwind",SiTailwindcss,"#38BDF8"],["Spring",SiSpringboot,"#6DB33F"],
["MySQL",SiMysql,"#4479A1"],["PostgreSQL",SiPostgresql,"#336791"],
["Prisma",SiPrisma,"#000"],["Docker",SiDocker,"#2496ED"],
["Git",SiGit,"#F05032"],["GitHub",SiGithub,"#000"],
["Vercel",SiVercel,"#000"],
["Node",SiNodedotjs,"#5FA04E"],["Java",SiOpenjdk,"#F89820"],
["Redis",SiRedis,"#DC382D"],["GraphQL",SiGraphql,"#E10098"],
["Firebase",SiFirebase,"#FFCA28"],["MongoDB",SiMongodb,"#47A248"],
];

const row1=[...tech,...tech];
const row2=[...tech.slice().reverse(),...tech.slice().reverse()];

function Row({items,reverse=false}:{items:any[];reverse?:boolean}){
 return (
 <div className={`marquee ${reverse?"reverse":""}`}>
   <div className="track">
    {items.map(([name,Icon,color],i)=>(
      <div key={i} className="card group">
        <Icon size={25} color={color} className="group-hover:scale-110 transition"/>
        <span>{name}</span>
      </div>
    ))}
   </div>
 </div>);
}

export default function TechStack(){
 return (
<section className="relative overflow-hidden py-10 bg-light">
<div className="mx-auto max-w-full ">
<div className="text-center mb-7">
 <div className="inline-flex mb-15  items-center gap-2 rounded-full border border-dark/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-dark/60">
            <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
           MODULAR ARCHITECTURE
          </div>

<h2 className="mt-6 text-4xl font-bold text-[black]">Building with <span className="bg-gradient-to-r from-[#ff6b2c] to-[#F3A953] bg-clip-text text-transparent">Premium Technologies</span></h2>
<p className="mt-3 text-[black] max-w-2xl mx-auto">Modern enterprise technologies powering high-performance applications.</p>
</div>

<div className="pointer-events-none absolute inset-0 ]"/>
<Row items={row1}/>

<div className="h-6"/>
<Row items={row2} reverse/>
</div>

</section>
)}
