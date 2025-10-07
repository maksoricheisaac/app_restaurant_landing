import { Benefits } from "@/components/customs/benefits";
import { Contact } from "@/components/customs/contact";
import { FAQ } from "@/components/customs/faq";
import { Features } from "@/components/customs/features";
import { Hero } from "@/components/customs/hero";
import { Pricing } from "@/components/customs/pricing";
import { ProblemSolution } from "@/components/customs/problem-solution";
import { Testimonials } from "@/components/customs/testimonials";
import { Timeline } from "@/components/customs/timeline";

export default function Home(){
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Features />
      <Pricing />
      <Timeline />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}