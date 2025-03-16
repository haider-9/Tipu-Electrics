import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
export default function page() {
  return (
    <>
      <Header />
      <main className="w-[90%] mx-auto">
        <HeroSection />
        <Services />
      </main>
    </>
  );
}
