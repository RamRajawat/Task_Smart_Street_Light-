import React from "react";
import {Helmet} from 'react-helmet';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CuttingEdgeProductsSection from './CuttingEdgeProductsSection';
import PlatformBenefitsSection from './PlatformBenefitsSection';
import SmartLightingSection from './SmartLightingSection';
import SmartStreetLightEcosystemSection from './SmartStreetLightEcosystem';
export default function WebsitePage() {
  return (
    <>
      <Helmet>
        <title>Smart Lighting Solutions - Innovative Street Light Control</title>
        <meta
          name="description"
          content="Explore our Smart Lighting solutions, including advanced street light controllers and management software designed for efficient cities."
        />
      </Helmet>

      <div className="w-full bg-[#ffffff]">
        <div className="flex flex-col gap-[110px] bg-[#000000] lg:gap-[110px] md:gap-[82px] sm:gap-[55px]">
          <Header />

        
          {/* Smart Lighting Section */}
          <SmartLightingSection />
        </div>

        <div className="flex flex-col gap-[150px] lg:gap-28 md:gap-28 sm:gap-[75px]">
          
          {/* Smart Street Light Ecosystem Section */}
          <SmartStreetLightEcosystemSection />

          {/* Cutting Edge Products Section */}
          <CuttingEdgeProductsSection />

           {/* Platform benefits Section */}
           <PlatformBenefitsSection />

          <Footer />

        </div>

        
      </div>
    </>
  );
};