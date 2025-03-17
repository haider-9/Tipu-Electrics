"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Define routes for navigation
  const routes = ['/', '/about', '/services', '/projects', '/contact'];
  const currentIndex = routes.indexOf(pathname);
  const prevRoute = currentIndex <= 0 ? routes[routes.length - 1] : routes[currentIndex - 1];
  const nextRoute = currentIndex >= routes.length - 1 ? routes[0] : routes[currentIndex + 1];

  // Apply animation class when component mounts
  useEffect(() => {
    const pageElement = document.getElementById('page-content');
    if (pageElement) {
      pageElement.classList.add('page-enter');
      
      // Force a reflow to ensure the animation works
      void pageElement.offsetWidth;
      
      pageElement.classList.add('page-enter-active');
      
      const timer = setTimeout(() => {
        pageElement.classList.remove('page-enter', 'page-enter-active');
      }, 600); // Match this to your CSS transition duration
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <div className="relative min-h-screen">
      <div id="page-content" className="page">
        {children}
      </div>
      
      <div className="fixed bottom-8 right-8 flex gap-3 z-50">
        <Link href={prevRoute} passHref>
          <Button
            variant="outline"
            className="border-2 border-amber-500 text-amber-500 p-2 hover:bg-amber-500 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
        </Link>
        <Link href={nextRoute} passHref>
          <Button
            variant="outline"
            className="border-2 border-amber-500 text-amber-500 p-2 hover:bg-amber-500 hover:text-slate-900 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
