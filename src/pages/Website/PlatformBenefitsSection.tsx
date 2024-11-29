import React from "react";
import { Img, Text } from "../../components";
import PowerEfficiencyInfo from "../../components/PowerEfficiencyInfo";

export default function PlatformBenefitsSection() {
    return (
        <>
            {/* Platform Benefits Section */}
            <div className="flex justify-center">
                <div className="container-xs flex justify-center lg:px-5 md:px-5">
                    <div className="w-full bg-gradient-to-b from-[#ffffff] to-[#f9feff]">
                        <div className="ml-1 flex flex-col items-end gap-[76px] px-[22px] lg:gap-[76px] md:ml-0 md:gap-[57px] sm:gap-[38px] sm:px-4">
                            <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                                <Text
                                    size="text5xl"
                                    as="p"
                                    className="ml-[146px] flex-1 self-center text-center text-[48px] font-normal leading-[150%] tracking-[0.48px] text-[#000000] lg:text-[40px] md:ml-0 md:self-stretch md:text-[32px] sm:text-[26px]"
                                >
                                    The platform assists city managers on multiple fronts
                                </Text>
                                <Img
                                    src="images/img_group_4.svg"
                                    alt="Cloud Image"
                                    className="h-[14px]  md:w-full"
                                />
                            </div>
                            <div className="mb-[106px] flex w-[92%] flex-col gap-32 lg:w-full lg:gap-24 md:w-full md:gap-24 sm:gap-16">
                                <div className="mr-[122px] flex flex-col gap-[116px] md:mr-0">
                                    <PowerEfficiencyInfo className="mr-3 md:mr-0 sm:flex-col" />
                                    <PowerEfficiencyInfo
                                        savesOnPowerText="Detects power thefts."
                                        lowersDowntimeText="Ensures smart monitoring and control of the street light infrastructure."
                                        className="sm:flex-col"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-start md:flex-col">
                                        <div className="mb-14 flex flex-1 flex-col items-start gap-[34px] md:self-stretch">
                                            <div className="flex flex-col items-start gap-6 self-stretch">
                                                <div className="w-[10%] rounded-[18px] bg-gradient-to-b from-[#3661FF] to-[#0084FF] lg:w-full md:w-full">
                                                    <img
                                                        src="images/img_image_41.png"
                                                        alt="Analytics Icon"
                                                        className="h-[74px] w-full rounded-tl-[18px] rounded-tr-[18px] object-cover lg:h-auto md:h-auto"
                                                    />
                                                </div>
                                                <Text
                                                    size="text4xl"
                                                    as="p"
                                                    className="w-[76%] text-[36px] font-normal leading-[150%] tracking-[0.36px] text-[#000000] lg:w-full lg:text-[30px] md:w-full md:text-[30px] sm:text-[28px]"
                                                >
                                                    Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures,
                                                    etc.
                                                </Text>
                                            </div>
                                            <div className="h-[2.47px] w-[86%] bg-[#8e8c8c26]" />
                                        </div>
                                        <div className="flex w-[30%] flex-col items-start gap-6 self-end md:w-full">
                                            <div className="w-[22%] rounded-[18px] bg-gradient-to-b from-[#3661FF] to-[#0084FF] lg:w-full md:w-full">
                                                <img
                                                    src="images/img_image_41.png"
                                                    alt="Security Icon"
                                                    className="h-[74px] w-full rounded-tl-[18px] rounded-tr-[18px] object-cover lg:h-auto md:h-auto"
                                                />
                                            </div>
                                            <Text
                                                size="text4xl"
                                                as="p"
                                                className="w-full text-[36px] font-normal leading-[150%] tracking-[0.36px] text-[#000000] lg:text-[30px] md:text-[30px] sm:text-[28px]"
                                            >
                                              Ensures security in the neighborhood
                                            </Text>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div >


        </>
    );

};

