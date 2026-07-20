"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardMenu } from "./menu";

export default function Sidebar() {

  const pathname = usePathname();


  return (

    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col bg-slate-900 text-white shadow-xl">


      {/* Logo */}
      <div className="border-b border-slate-700 px-6 py-6">

        <h1 className="text-2xl font-bold tracking-wide">
          AI Budget Optimizer
        </h1>


        <p className="mt-1 text-sm text-slate-400">
          Business Intelligence Platform
        </p>

      </div>



      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">


        {dashboardMenu.map((item)=>{


          const Icon = item.icon;

          const isActive =
            pathname === item.href;



          return (

            <Link

              key={item.title}

              href={item.href}

              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                
                isActive

                ? "bg-white text-slate-900 font-semibold shadow"

                : "text-slate-300 hover:bg-slate-800 hover:text-white"

              }`}

            >

              <Icon size={20}/>


              <span>
                {item.title}
              </span>


            </Link>

          );


        })}


      </nav>




      {/* Footer */}
      <div className="border-t border-slate-700 p-5">


        <p className="text-xs text-slate-400">
          AI Budget Optimizer
        </p>


        <p className="mt-1 text-xs text-slate-500">
          Version 1.0.0
        </p>


      </div>


    </aside>

  );

}