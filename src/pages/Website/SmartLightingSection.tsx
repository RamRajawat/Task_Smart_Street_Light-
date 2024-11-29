import React from "react";
import { Button, Img, Text } from "../../components";

export default function SmartLightingSection() {
    return (
        <>
            {/* Smart Lighting Section */}
            <div className="px-[42px] md:px-5 sm:px-4">
                <div className="flex flex-col items-center">
                    <div className="container-xs relative z-[1] flex flex-col items-center px-14 lg:px-5 md:px-5">
                        <div className="flex w-[90%] justify-center lg:w-full md:w-full">
                            <div className="flex w-full flex-col items-center">
                                <div className="flex flex-col items-center gap-2.5 self-stretch">
                                    <Text
                                        size="text2xl"
                                        as="p"
                                        className="text-[24px] font-normal capitalize tracking-[1.00px] text-[#ffffff] lg:text-[20px]"
                                    >
                                        Smart Lighting Solutions
                                    </Text>
                                    <Img
                                     src="images/img_mask_group.png"
                                     alt="Feature Image"
                                     className="h-[216px] w-full object-cover lg:h-auto md:h-auto"
                                    />
                                </div>
                                <Button shape="round" className="relative mt-[-32px] min-w-[170px] rounded-sm px-[34px] sm:px-4">
                                    Login
                                </Button>

                            </div>
                        </div>
                    </div>
                    <div className="relative mt-[-268px] flex flex-col gap-2.5 self-stretch">
                        <div
                            className="h-[230px] rotate-[-3deg] rounded-[914px] bg-[#0060b9] blur-[647.00px] backdrop-opacity-[0.5]"
                        />
                        <div
                            className="relative mx-[180px] h-[636px] content-center bg-[url(/images/Hero_section.png)] bg-cover bg-no-repeat lg:h-auto md:mx-0 md:h-auto"
                        >
                            <div className="flex flex-1 items-start md:flex-col">
                                <div
                                    className="h-[636px] w-[8%] self-center bg-gradient-to-r from-[#000103] to-[#00010300]"
                                />
                                <div
                                    className="relative ml-[-124px] h-[134px] flex-1 bg-gradient-to-b from-[#000000] to-[#00030700] md:ml-0 md:self-stretch"
                                />
                            </div>
                            <div className="absolute bottom-0 right-px top-0 my-auto h-[636px] w-[8%] rotate-[-180deg] bg-gradient-to-r from-[#000103] to-[#00010300]"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

};

