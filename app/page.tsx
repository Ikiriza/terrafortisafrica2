import { HomeHero } from "@/components/home/hero"
import { HomeIntro } from "@/components/home/intro"
import { FocusMarquee } from "@/components/home/marquee"
import { ServicesGrid } from "@/components/home/services-grid"
import { CaPrinciples } from "@/components/home/ca-principles"
import { Mechanization } from "@/components/home/mechanization"
import { VisionBand } from "@/components/site/vision-band"
import { Process } from "@/components/site/process"
import { Audiences } from "@/components/site/audiences"
import { CtaBand } from "@/components/site/cta-band"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <FocusMarquee />
      <ServicesGrid />
      <CaPrinciples />
      <Mechanization />
      <VisionBand />
      <Process />
      <Audiences />
      <CtaBand />
    </>
  )
}
