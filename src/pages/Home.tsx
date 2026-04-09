import { HeroCarousel } from "../components/HeroCarousel";
import { Advantages } from "../components/Advantages";
import { HomeIntro } from "../components/HomeIntro";
import { FinancialContributions } from "../components/FinancialContributions";

import { CTASection } from "../components/CTASection";


export function Home() {
    return (
        <>
            <HeroCarousel />
            <HomeIntro />
            <Advantages />

            <FinancialContributions />
            <CTASection />
        </>
    );
}
