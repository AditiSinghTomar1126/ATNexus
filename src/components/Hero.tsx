
// "use client";

// import { useEffect, useState , useRef} from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Circle, Terminal, Zap, ArrowRight, Activity } from "lucide-react";


// const TOKEN = {
//   kw: "#FF2E88", 
//   fn: "#61AFEF", 
//   tag: "#FE424D", 
//   attr: "#E5C07B", 
//   str: "#4AFFB0", 
//   bracket: "#E6E6E6", 
//   plain: "#cbd5e1",
//   comment: "#5b6472",
// };


// const TABS = {
//   frontend: {
//     label: "page.tsx",
//     sublabel: "Frontend",
//     lines: [
//       [{ t: "// app/page.tsx", c: "comment" }],
//       [{ t: "\"use client\";", c: "str" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "import ", c: "kw" }, { t: "{ useEffect, useState } ", c: "plain" }, { t: "from ", c: "kw" }, { t: "\"react\";", c: "str" }],
//       [{ t: "import ", c: "kw" }, { t: "{ OptimizeSpeed } ", c: "plain" }, { t: "from ", c: "kw" }, { t: "\"@/components/OptimizeSpeed\";", c: "str" }],
//       [{ t: "import ", c: "kw" }, { t: "{ fetchMetrics } ", c: "plain" }, { t: "from ", c: "kw" }, { t: "\"@/lib/metrics\";", c: "str" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "export const ", c: "kw" }, { t: "metadata ", c: "fn" }, { t: "= {", c: "plain" }],
//       [{ t: "  title: ", c: "attr" }, { t: "\"AtNexus — High-Performance Web\",", c: "str" }],
//       [{ t: "};", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "export default function ", c: "kw" }, { t: "ATNexusApp", c: "fn" }, { t: "() {", c: "plain" }],
//       [{ t: "  const ", c: "kw" }, { t: "[metrics, setMetrics] ", c: "plain" }, { t: "= ", c: "plain" }, { t: "useState", c: "fn" }, { t: "(null);", c: "plain" }],
//       [{ t: "  const ", c: "kw" }, { t: "[loading, setLoading] ", c: "plain" }, { t: "= ", c: "plain" }, { t: "useState", c: "fn" }, { t: "(true);", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "  useEffect", c: "fn" }, { t: "(() => {", c: "plain" }],
//       [{ t: "    let ", c: "kw" }, { t: "mounted = true;", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "    async function ", c: "kw" }, { t: "loadMetrics", c: "fn" }, { t: "() {", c: "plain" }],
//       [{ t: "      try {", c: "kw" }],
//       [{ t: "        const ", c: "kw" }, { t: "data = await ", c: "plain" }, { t: "fetchMetrics", c: "fn" }, { t: "(", c: "plain" }, { t: "\"/api/perf\"", c: "str" }, { t: ");", c: "plain" }],
//       [{ t: "        if ", c: "kw" }, { t: "(mounted) {", c: "plain" }],
//       [{ t: "          setMetrics", c: "fn" }, { t: "(data);", c: "plain" }],
//       [{ t: "          setLoading", c: "fn" }, { t: "(false);", c: "plain" }],
//       [{ t: "        }", c: "plain" }],
//       [{ t: "      } catch ", c: "kw" }, { t: "(error) {", c: "plain" }],
//       [{ t: "        console", c: "fn" }, { t: ".error(", c: "plain" }, { t: "\"metrics fetch failed\"", c: "str" }, { t: ", error);", c: "plain" }],
//       [{ t: "      }", c: "plain" }],
//       [{ t: "    }", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "    loadMetrics", c: "fn" }, { t: "();", c: "plain" }],
//       [{ t: "    return ", c: "kw" }, { t: "() => { mounted = false; };", c: "plain" }],
//       [{ t: "  }, []);", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "  if ", c: "kw" }, { t: "(loading) {", c: "plain" }],
//       [{ t: "    return ", c: "kw" }, { t: "<", c: "bracket" }, { t: "OptimizeSpeed", c: "tag" }, { t: " loading", c: "attr" }, { t: "=", c: "plain" }, { t: "\"0.2s\"", c: "str" }, { t: " />;", c: "bracket" }],
//       [{ t: "  }", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "  return ", c: "kw" }, { t: "(", c: "plain" }],
//       [{ t: "    <", c: "bracket" }, { t: "main", c: "tag" }, { t: " className", c: "attr" }, { t: "=", c: "plain" }, { t: "\"app-shell\"", c: "str" }, { t: ">", c: "bracket" }],
//       [{ t: "      <", c: "bracket" }, { t: "OptimizeSpeed", c: "tag" }],
//       [{ t: "        loading", c: "attr" }, { t: "=", c: "plain" }, { t: "\"0.2s\"", c: "str" }],
//       [{ t: "        theme", c: "attr" }, { t: "=", c: "plain" }, { t: "\"AtNexusPrimary\"", c: "str" }],
//       [{ t: "        vitals", c: "attr" }, { t: "={metrics.coreWebVitals} />", c: "plain" }],
//       [{ t: "    </", c: "bracket" }, { t: "main", c: "tag" }, { t: ">", c: "bracket" }],
//       [{ t: "  );", c: "plain" }],
//       [{ t: "}", c: "plain" }],
//     ],
//   },
//   backend: {
//     label: "BuildController.java",
//     sublabel: "Backend",
//     lines: [
//       [{ t: "// controller/BuildController.java", c: "comment" }],
//       [{ t: "package ", c: "kw" }, { t: "tech.atnexus.controller;", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "import ", c: "kw" }, { t: "org.springframework.web.bind.annotation.*;", c: "plain" }],
//       [{ t: "import ", c: "kw" }, { t: "org.springframework.http.ResponseEntity;", c: "plain" }],
//       [{ t: "import ", c: "kw" }, { t: "org.springframework.beans.factory.annotation.Autowired;", c: "plain" }],
//       [{ t: "import ", c: "kw" }, { t: "tech.atnexus.service.BuildService;", c: "plain" }],
//       [{ t: "import ", c: "kw" }, { t: "tech.atnexus.service.SecurityService;", c: "plain" }],
//       [{ t: "import ", c: "kw" }, { t: "tech.atnexus.model.BuildRequest;", c: "plain" }],
//       [{ t: "import ", c: "kw" }, { t: "tech.atnexus.model.BuildResponse;", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "@", c: "bracket" }, { t: "RestController", c: "attr" }],
//       [{ t: "@", c: "bracket" }, { t: "RequestMapping", c: "attr" }, { t: "(", c: "plain" }, { t: "\"/api/v1\"", c: "str" }, { t: ")", c: "plain" }],
//       [{ t: "public class ", c: "kw" }, { t: "BuildController", c: "fn" }, { t: " {", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "  @", c: "bracket" }, { t: "Autowired", c: "attr" }],
//       [{ t: "  private ", c: "kw" }, { t: "BuildService ", c: "fn" }, { t: "buildService;", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "  @", c: "bracket" }, { t: "Autowired", c: "attr" }],
//       [{ t: "  private ", c: "kw" }, { t: "SecurityService ", c: "fn" }, { t: "securityService;", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "  @", c: "bracket" }, { t: "PostMapping", c: "attr" }, { t: "(", c: "plain" }, { t: "\"/secure-build\"", c: "str" }, { t: ")", c: "plain" }],
//       [{ t: "  public ", c: "kw" }, { t: "ResponseEntity<BuildResponse> ", c: "fn" }, { t: "deploy(", c: "plain" }],
//       [{ t: "      @", c: "bracket" }, { t: "RequestBody ", c: "attr" }, { t: "BuildRequest request,", c: "plain" }],
//       [{ t: "      @", c: "bracket" }, { t: "RequestHeader", c: "attr" }, { t: "(", c: "plain" }, { t: "\"Authorization\"", c: "str" }, { t: ") String token) {", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "    if ", c: "kw" }, { t: "(!securityService.validate(token)) {", c: "plain" }],
//       [{ t: "      return ", c: "kw" }, { t: "ResponseEntity.status(401).build();", c: "plain" }],
//       [{ t: "    }", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "    long ", c: "kw" }, { t: "start = System.currentTimeMillis();", c: "plain" }],
//       [{ t: "    BuildResponse ", c: "fn" }, { t: "response = buildService.compile(request);", c: "plain" }],
//       [{ t: "    long ", c: "kw" }, { t: "duration = System.currentTimeMillis() - start;", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "    response.setBuildTime(duration + ", c: "plain" }, { t: "\"ms\"", c: "str" }, { t: ");", c: "plain" }],
//       [{ t: "    response.setSecure(", c: "plain" }, { t: "true", c: "kw" }, { t: ");", c: "plain" }],
//       [{ t: "    response.setCoreWebVitals(", c: "plain" }, { t: "\"100%\"", c: "str" }, { t: ");", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "    return ", c: "kw" }, { t: "ResponseEntity.ok(response);", c: "plain" }],
//       [{ t: "  }", c: "plain" }],
//       [{ t: "", c: "plain" }],
//       [{ t: "  @", c: "bracket" }, { t: "GetMapping", c: "attr" }, { t: "(", c: "plain" }, { t: "\"/health\"", c: "str" }, { t: ")", c: "plain" }],
//       [{ t: "  public ", c: "kw" }, { t: "ResponseEntity<String> ", c: "fn" }, { t: "health() {", c: "plain" }],
//       [{ t: "    return ", c: "kw" }, { t: "ResponseEntity.ok(", c: "plain" }, { t: "\"{\\\"status\\\":\\\"healthy\\\"}\"", c: "str" }, { t: ");", c: "plain" }],
//       [{ t: "  }", c: "plain" }],
//       [{ t: "}", c: "plain" }],
//     ],
//   },
// };

// // ---------------------------------------------------------------------------
// // Premium preview panels
// // ---------------------------------------------------------------------------
// function FrontendPreview({ compact }: { compact: boolean }) {
//   return (
//     <div>
//        <Image
//                 src= "/Preview.jpeg"
//                 alt ="ATNexus Tech"

//                 width = {750}
//                 height = {0}
//                 className="ml-2" />

      
//     </div>
//   );
// }

// function BackendPreview({ compact }: { compact: boolean }) {
//   const json = [
//     { k: "status", v: '"success"', vc: "str" },
//     { k: "endpoint", v: '"/secure-build"', vc: "str" },
//     { k: "buildTime", v: '"142ms"', vc: "str" },
//     { k: "coreWebVitals", v: '"100%"', vc: "str" },
//     { k: "secure", v: "true", vc: "kw" },
//   ];

//   return (
//     <div style={{ padding: compact ? 18 : 28, minHeight: compact ? 200 : 280 }}>
//       <div className="mb-4 flex items-center justify-between">
//         <div className="inline-flex items-center gap-2 rounded-md border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 font-mono text-[11px] text-emerald-400">
//           POST /secure-build → 200 OK
//         </div>
//         <div className="flex items-center gap-1.5 font-mono text-[10px] text-light/40">
//           <Activity size={11} />
//           142ms
//         </div>
//       </div>

//       <div
//         className="rounded-lg border border-secondary px-3.5 py-3.5 font-mono"
//         style={{ backgroundColor: "#0d1117", fontSize: compact ? 11 : 12, lineHeight: 1.9 }}
//       >
//         <div style={{ color: "#cbd5e1" }}>{"{"}</div>
//         {json.map((row, i) => (
//           <div key={i} className="whitespace-nowrap pl-4">
//             <span style={{ color: "#E5C07B" }}>"{row.k}"</span>
//             <span style={{ color: "#cbd5e1" }}>: </span>
//             <span style={{ color: row.vc === "kw" ? "#FF2E88" : "#4AFFB0" }}>{row.v}</span>
//             {i < json.length - 1 && <span style={{ color: "#cbd5e1" }}>,</span>}
//           </div>
//         ))}
//         <div style={{ color: "#cbd5e1" }}>{"}"}</div>
//       </div>

//       <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-light/40">
//         <div className="h-1 flex-1 overflow-hidden rounded-full bg-dark">
//           <div className="h-full w-[92%] rounded-full bg-primary" />
//         </div>
//         secure
//       </div>
//     </div>
//   );
// }


// function TerminalChrome({
//   activeTab,
//   setActiveTab,
//   compact,
// }: {
//   activeTab: "frontend" | "backend";
//   setActiveTab: (t: "frontend" | "backend") => void;
//   compact: boolean;
// }) {
//   const [viewMode, setViewMode] = useState<"code" | "preview">("code");
//   const [typing, setTyping] = useState({
//   line: 0,
//   char: 0,
// });

// const scrollRef = useRef<HTMLDivElement>(null);

// const timerRef = useRef<NodeJS.Timeout | null>(null);

//   const tab = TABS[activeTab];
//   const linesToShow = compact ? tab.lines.slice(0, 16) : tab.lines;
//   const getLineLength = (line: typeof linesToShow[number]) =>
//   line.reduce((sum, seg) => sum + seg.t.length, 0);
//    const [lineIndex, setLineIndex] = useState(0);
//    const [charIndex, setCharIndex] = useState(0);
   

//    useEffect(() => {
//   let cancelled = false;
//   let restartTimeout: ReturnType<typeof setTimeout> | null = null;

//   const startTyping = () => {
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }

//     setTyping({ line: 0, char: 0 });

//     let line = 0;
//     let char = 0;

//     timerRef.current = setInterval(() => {
//       const total = getLineLength(linesToShow[line]);

//       if (char < total) {
//         char++;

//         setTyping({
//           line,
//           char,
//         });

//         return;
//       }

//       if (line < linesToShow.length - 1) {
//         line++;
//         char = 0;

//         setTyping({
//           line,
//           char,
//         });

//         return;
//       }

//       // Finished all lines — pause, then loop back to the top.
//       clearInterval(timerRef.current!);

//       restartTimeout = setTimeout(() => {
//         if (!cancelled) {
//           startTyping();
//         }
//       }, 2000);
//     }, 15);
//   };

//   startTyping();

//   return () => {
//     cancelled = true;
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }
//     if (restartTimeout) {
//       clearTimeout(restartTimeout);
//     }
//   };
// }, [activeTab]);

// useEffect(() => {
//   if (!scrollRef.current) return;

//   scrollRef.current.scrollTop =
//     scrollRef.current.scrollHeight;
// }, [typing.line]);


//   return (
//     <div
//       className="w-full overflow-hidden rounded-xl border border- bg-dark/80"
//       style={{ boxShadow: "0 0 0 1px rgba(254,66,77,0.08), 0 20px 60px -15px rgba(0,0,0,0.85)" }}
//     >
//       {/* top bar */}
//       <div className="flex items-center justify-between border-b border-secondary px-4 py-2.5" style={{ backgroundColor: "#141416" }}>
//         <div className="flex gap-1.5">
//           <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#FF5F56" }} />
//           <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#FFBD2E" }} />
//           <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#27C93F" }} />
//         </div>
//         <div className="flex items-center gap-1.5 font-mono text-[10px] text-light/40">
//           <Terminal size={12} />
//           <span>zsh — AtNexus</span>
//         </div>

//         <div className="flex items-center gap-0.5 rounded-full border border-secondary bg-light/5 p-0.5">
//           <button
//             onClick={() => setViewMode("code")}
//             className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-bold transition-all ${
//               viewMode === "code" ? "bg-primary text-dark" : "text-light/40"
//             }`}
//           >
//             {"</>"} Code
//           </button>
//           <button
//             onClick={() => setViewMode("preview")}
//             className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-bold transition-all ${
//               viewMode === "preview" ? "bg-primary text-dark" : "text-light/40"
//             }`}
//           >
//             ▶ Preview
//           </button>
//         </div>
//       </div>

//       {/* tabs */}
//       <div className="flex border-b border-secondary font-mono text-xs" style={{ backgroundColor: "#0d0d0f" }}>
//         {(Object.entries(TABS) as [keyof typeof TABS, (typeof TABS)[keyof typeof TABS]][]).map(([key, val]) => {
//           const isActive = key === activeTab;
//           return (
//             <button
//               key={key}
//               onClick={() => setActiveTab(key)}
//               className={`relative whitespace-nowrap px-4 py-2.5 transition-colors ${
//                 isActive ? "text-primary" : "text-light/40"
//               }`}
//             >
//               {val.label} <span className="text-light/20">({val.sublabel})</span>
//               {isActive && (
//                 <span
//                   className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"
//                   style={{ boxShadow: "0 0 8px 1px rgba(254,66,77,0.45)" }}
//                 />
//               )}
//             </button>
//           );
//         })}
//       </div>

//       {viewMode === "preview" ? (
//         <div ref={scrollRef} key={`${activeTab}-preview`} style={{ backgroundColor: "#0d1117" }}>
//           {activeTab === "frontend" ? (
//             <FrontendPreview compact={compact} />
//           ) : (
//             <BackendPreview compact={compact} />
//           )}
//         </div>
//       ) : (
//         <div
//           key={activeTab}
//           className="overflow-x-hidden overflow-y-auto"
//           style={{
//             fontFamily: "'Fira Code', 'JetBrains Mono', ui-monospace, monospace",
//             backgroundColor: "#0d1117",
//             padding: 16,
//             fontSize: compact ? 11 : 12.5,
//             lineHeight: compact ? "20px" : "22px",
//             minHeight: compact ? 200 : 280,
//             maxHeight: compact ? 260 : 360,
//           }
        
        
//         }
//         >
          

//           {linesToShow.map((segs, i) => {
//   // Future lines hide
//   if (i > typing.line) return null;

//   let remainingChars =
//     i === typing.line ? typing.char : Infinity;

//   return (
//     <div key={i} className="flex gap-3 whitespace-nowrap">
//       {/* Line Number */}
//       <span
//         className="flex-shrink-0 select-none text-right"
//         style={{
//           color: "#475569",
//           width: 18,
//         }}
//       >
//         {i + 1}
//       </span>

//       {/* Code */}
//       <span className="whitespace-nowrap">
//         {segs.map((seg, j) => {
//           const visibleText =
//             seg.t.slice(0, Math.max(remainingChars, 0));

//           remainingChars -= seg.t.length;

//           return (
//             <span
//               key={j}
//               style={{
//                 color:
//                   TOKEN[
//                     seg.c as keyof typeof TOKEN
//                   ],
//               }}
//             >
//               {visibleText}
//             </span>
//           );
//         })}

//         {/* Cursor */}
//         {i === typing.line && (
//           <span
//             className="ml-0.5 animate-pulse"
//             style={{
//               color: "#FE424D",
//             }}
//           >
//             █
//           </span>
//         )}
//       </span>
//     </div>
//   );
// })}
//         </div>
//       )}
     

//       {/* status line */}
//       <div
//         className="flex items-center gap-2 border-t border-secondary px-4 py-2.5 font-mono text-[11px]"
//         style={{ backgroundColor: "#0d0d0f" }}
//       >
//         <span className="relative inline-flex h-2 w-2 flex-shrink-0">
//           <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
//           <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
//         </span>
//         <span className="overflow-hidden text-ellipsis text-emerald-400">
//           ✓ Compiled successfully in 142ms.
//         </span>
//         <span className="ml-auto flex flex-shrink-0 items-center gap-1 text-primary">
//           <Zap size={11} fill="currentColor" />
//           100% Core Web Vitals
//         </span>
//       </div>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Hero
// // ---------------------------------------------------------------------------
// export default function Hero() {
//   const [activeTab, setActiveTab] = useState<"frontend" | "backend">("frontend");

//   useEffect(() => {
//     const t1 = setTimeout(() => setActiveTab("backend"), 3200);
//     const t2 = setTimeout(() => setActiveTab("frontend"), 6000);
//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//     };
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden bg-dark text-light">
      
//       <div
//         className="pointer-events-none absolute inset-0  opacity-[0.15]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, #6b2d0365 1px, transparent 1px), linear-gradient(to bottom,#6b2d0365 1px, transparent 1px)",
//           backgroundSize: "44px 44px",
//         }}
//       />
      
//       <div
//         className="pointer-events-none absolute rounded-full bg-primary opacity-[0.18]"
//         style={{ top: -60, left: "70%", transform: "translateX(-50%)", width: 700, height: 700, filter: "blur(140px)" }}
//       />

//       <div className="relative mx-auto  max-w-7xl flex-col items-center  px-6 py-28 ">
        
//         <div className=" mx-auto mt-15 flex max-w-6xl flex-col items-center text-center ">
//           <div className="inline-flex mb-15  items-center gap-2 rounded-full border border-secondary bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-light/60">
//             <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
//             INTRODUCING ATNEXUS TECH
//           </div>

//           <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-light  mt-10">
//             We build <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Fast Software</span> <br /> for Founders  Who Move  
//              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"> Fast</span>
//           </h1>

//           {/* <p className="max-w-lg mt-6 text-base font-medium leading-relaxed text-light/60 md:text-md">
//           Turning complex user flows into 
//           </p> */}
//           <div className="flex flex-wrap items-center gap-6 mt-10 font-mono text-xs text-light/40">
//             <span className="flex items-center gap-1.5">
//               <Circle size={6} fill="#34d399" color="#34d399" />
//               Performance First
//             </span>
//             <span className="flex items-center gap-1.5">
//               <Circle size={6} fill="#d3ab34" color="#d3ab34" />
//               Secure by Design
//             </span>
//              <span className="flex items-center gap-1.5">
//               <Circle size={6} fill="#FE424D" color="#FE424D" />
//               Built to Scale
//             </span>
//           </div>



          
       

//         {/* RIGHT: terminal */}
//         <div className="w-full max-w-3xl mt-16">
//           <TerminalChrome activeTab={activeTab} setActiveTab={setActiveTab} compact={false} />
//         </div>
//       </div>
//        </div>
//     </section>
//   );
// }






"use client";

import { ArrowRight,Circle } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Luxury Interior",
    category: "Web Design",
    image: "/projectimages/Ecommerce.png",
    height: "h-[200px]",
  },
  {
    title: "Real Estate",
    category: "Development",
    image: "/projectimages/Expertsystem.png",
    height: "h-[200px]",
  },
  {
    title: "Finance Dashboard",
    category: "UI/UX",
    image: "/projectimages/Mindmate.png",
    height: "h-[200px]",
  },
  {
    title: "Healthcare",
    category: "SaaS",
    image:"/projectimages/Vistaura.png",
    height: "h-[200px]",
  },
  {
    title: "Ecommerce",
    category: "Next.js",
    image: "/projectimages/Automation.png",
    height: "h-[200px]",
  },
  {
    title: "Portfolio",
    category: "Branding",
    image: "/projectimages/Automation.png",
    height: "h-[200px]",
  },
];
function ProjectCard({
  project,
  rotate = "",
}: {
  project: (typeof PROJECTS)[number];
  rotate?: string;
}) {
  return (
    <div
   className={`group ${project.height} ${rotate} relative overflow-hidden
    rounded-[16px]
    width-50px
    border border-white/10
    bg-white/[0.04]
    backdrop-blur-2xl
    transition-all
    duration-700
    hover:-translate-y-2
    hover:scale-[1.02]
    `}
     style={{
  boxShadow: `
    0 20px 60px rgba(0,0,0,.45),
    inset 0 1px rgba(255,255,255,.08)
  `,
}}
    >
      {/* Image */}

      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
      />

      {/* Overlay */}

      <div
  className="
  absolute
  inset-0
  opacity-0
  transition-opacity
  duration-700
  group-hover:opacity-100
"
>
  <div
    className="
    absolute
    -left-1/2
    top-0
    h-full
    w-1/2
    
    bg-gradient-to-r
    from-transparent
    via-white/20
    to-transparent
    blur-xl
    animate-pulse
    "
  />
</div>

   

      {/* Bottom */}

      <div className="absolute bottom-0 left-0 right-0  bg-background/40">

        {/* <span className="text-xs uppercase tracking-[0.25em] text-primary/80 ">
          {project.category}
        </span> */}

        <h3 className=" text-sm font-semibold text-text py-1 px-2">
          {project.title}
        </h3>

      </div>
    </div>
  );
}
export default function Hero() {
  const loop = (arr: typeof PROJECTS) => [...arr, ...arr];
  const column1 = useMemo(() => loop(PROJECTS), []);
  const column2 = useMemo(() => loop([...PROJECTS].reverse()), []);
  const column3 = useMemo(() => loop(PROJECTS), []);
  
  return (
    <section className="relative overflow-hidden bg-dark pt-20">

      {/* Background Grid */}

      <div className="absolute inset-0 opacity-[0.05]">

        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
             linear-gradient(rgba(255,107,44,.4) 1px,transparent 1px),
             linear-gradient(90deg,rgba(255,107,44,.4) 1px,transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

      </div>

      {/* Orange Glow */}

      <div
        className="absolute left-10 top-1/4 h-[270px] w-[270px] -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(241, 95, 17, 0.8), transparent 80%)",
        }}
      />

      {/* Content */}

      <div className="relative mx-auto flex max-w-full items-center gap-10 ">

        {/* LEFT */}

        <div className="w-full -mt-44 ml-10 lg:w-[42%]">

           <div className="inline-flex mb-15  items-center gap-2 rounded-full border border-light/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-light/60">
            <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
             INTRODUCING ATNEXUS TECH
          </div>

          <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-light  mt-10">
             We build <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Fast Software</span> <br /> for Founders  Who <br /> Move  
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"> Fast</span>
           </h1>


          {/* <p className="mt-8 max-w-md text-lg leading-8 text-text/70">
            We craft premium websites, scalable
            software and high-performing digital
            products for ambitious brands.
          </p> */}
           <div className=" absolute bottom-10 flex flex-wrap items-center gap-6 mt-10 font-mono  text-xs text-light/40">
            <span className="flex items-center gap-1.5">
               <Circle size={6} fill="#34d399" color="#34d399" />
              Performance First
             </span>
             <span className="flex items-center gap-1.5">
               <Circle size={6} fill="#d3ab34" color="#d3ab34" />
               Secure by Design
             </span>
              <span className="flex items-center gap-1.5">
               <Circle size={6} fill="#4297fe" color="#4297fe" />
               Built to Scale
            </span>
           </div>

           <Link
              href="/contact"
              className="inline-flex items-center mt-16 gap-2 rounded bg-primary px-8 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_2px_rgba(254,66,77,0.45)] transition-transform md:text-base"
            >
              Start a project
              <ArrowRight size={18} />
            </Link>

        </div>

        {/* RIGHT */}

        <div className="relative hidden h-[755px] flex-1 overflow-hidden lg:block">

          {/* Top Fade */}

          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-r from-black/40 to-transparent" />

          {/* Bottom Fade */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-full bg-gradient-to-l from-black/40 to-transparent" />

          

          <div className="grid h-full overflow-hidden grid-cols-3 gap-2">

  <div className="marquee-up flex flex-col gap-4">

    {column1.map((project, index) => (
      <ProjectCard
        key={index}
        project={project}
     
      />
    ))}

  </div>

  <div className="marquee-down flex flex-col gap-4 pt-20">

    {column2.map((project, index) => (
      <ProjectCard
        key={index}
        project={project}
      
      />
    ))}

  </div>

  <div className="marquee-up flex flex-col gap-4 pt-180">

    {column3.map((project, index) => (
      <ProjectCard
        key={index}
        project={project}
        
      />
    ))}

  </div>

</div>

        </div>

      </div>

    </section>
  );
}


