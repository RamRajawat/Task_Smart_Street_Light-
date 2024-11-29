import { Text, Img } from "../../components";
import React from "react";

export default function SmartStreetLightEcosystemSection() {
    return (
        <>
            {/* smart street light ecosystem section */}
            <div>
                <div className="flex flex-col items-center bg-gradient-to-b from-[#ffffff] via-[#e2f2ffdb] to-[#ebf6ff]">
                    <div className="container-xs relative z-[2] mt-[146px] lg:px-5 md:px-5">
                        <div className="flex flex-col gap-[30px]">
                            <div>
                                <div className="flex flex-col gap-[18px]">
                                    <div className="flex items-center">
                                        <div className="h-[64px] w-[6%] bg-gradient-to-l from-[#ffffff00] to-[#3661ff]" />
                                        <div className="relative ml-[-48px] flex flex-1">
                                            <Text
                                                size="text2xl"
                                                as="p"
                                                className="self-end font-['Sequel_Sans'] text-[24px] font-normal capitalize tracking-[-0.24px] text-[#00376b] lg:text-[20px]"
                                            >
                                                Ecosystem
                                            </Text>
                                        </div>
                                    </div>

                                    <Text
                                        size="text5xl"
                                        as="p"
                                        className="w-[50%] text-[48px] font-normal leading-[68px] tracking-[0.48px] text-[#000000] lg:w-full lg:text-[40px] md:w-full md:text-[32px] sm:text-[26px]"
                                    >
                                        How does a smart street light ecosystem work?
                                    </Text>
                                </div>
                            </div>
                            <div className="flex items-start md:flex-col">
                                <div className="mt-[22px] flex w-[26%] flex-col gap-6 md:w-full">
                                    <div className="flex gap-[41px]">
                                        <Img
                                            src="images/img_frame_427320604.png"
                                            alt="First Image"
                                            className="h-[116px] w-[40%] object-contain"

                                        />
                                        <Img
                                            src="images/img_frame_427320604.png"
                                            alt="Second Image"
                                            className="h-[116px] w-[40%] object-contain"

                                        />

                                    </div>
                                    <div className="flex flex-col items-start gap-2">
                                        <Text
                                            size="textxs"
                                            as="p"
                                            className="ml-16 font-['Sequel_Sans'] text-[14px] font-normal tracking-[0.14px] text-[#000000] md:ml-0"
                                        >
                                          Street Light Controller 

                                        </Text>
                                        <Text
                                            size="textxs"
                                            as="p"
                                            className="self-stretch text-center font-['Sequel_Sans'] text-[15px] font-normal leading-[130%] tracking-[0.15px] text-[#616161]"
                                        >
                                            Activates/deactivates in response to motion/light sensing and controls the brightness of the
                                            street lamp

                                        </Text>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-start md:flex-col md:self-stretch">
                                    <div className="flex flex-1  flex-col items-center self-center px-[50px]  md:self-stretch md:px-5 sm:px-4">
                                        <div className="flex w-[54%] flex-col gap-6 lg:w-full md:w-full">
                                            <Img
                                                src="images/gateway_png.png"
                                                alt="Third Image"
                                                className="ml-9 h-[116px] w-[60%] object-contain md:ml-0"

                                            />
                                            <div className="flex flex-col items-start gap-2">
                                                <Text
                                                    size="textxs"
                                                    as="p"
                                                    className="ml-[92px] font-['Sequel_Sans'] text-[14px] font-normal tracking-[0.14px] text-[#000000] md:ml-0"
                                                >
                                                  Gateway

                                                </Text>
                                                <Text
                                                    size="textxs"
                                                    as="p"
                                                    className="self-stretch text-center font-['Sequel_Sans'] text-[15px] font-normal leading-[17px] tracking-[0.15px] text-[#616161]"
                                                >
                                                  Employed for interfacing between a Controller and the Lightning Management Software.
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="relative mt-[-8px] flex flex-col items-start self-stretch">
                                            <div className="ml-[250px] h-[88px] w-[3px] bg-[#cdcdcd] md:ml-0 ">
                                            </div>
                                            <Img
                                                src="images/img_vector_7.svg"
                                                alt="Vector Image"
                                                className="relative ml-[82px] mt-[-2px] h-[38px] w-[68%] object-contain md:ml-0"

                                            />
                                            <div className="flex items-center self-stretch sm:flex-col">
                                                <div className=" flex flex-1 flex-col gap-6 sm:self-stretch">
                                                    <Img
                                                        src="images/users_png.png"
                                                        alt="Fourth Image"
                                                        className="h-[116px] w-[46%] object-contain"

                                                    />
                                                    <div className=" flex flex-col items-start gap-2">
                                                        <Text
                                                            size="textxs"
                                                            as="p"
                                                            className=" ml-[76px] font-['Sequel_Sans'] text-[14px] font-normal tracking-[0.14px] text-[#000000] md:ml-0"
                                                        >
                                                          Users
                                                        </Text>
                                                        <Text
                                                            size="textxs"
                                                            as="p"
                                                            className="w-[52%] text-center font-['Sequel_Sans'] text-[14px] font-normal leading-4 tracking-[0.14px] text-[#616161] lg:w-full md:w-full"
                                                        >
                                                          Data from the cloud is used to monitor and control street light by the System Managers.
                                                        </Text>
                                                    </div>
                                                </div>
                                                <div className="flex w-[38%] flex-col gap-6 sm:w-full">
                                                    <Img
                                                        src="images/evaluation_png.png"
                                                        alt="Fifth Image"
                                                        className="h-[116px] w-[78%] object-contain "

                                                    />
                                                    <div className=" flex flex-col items-start gap-2">
                                                        <Text
                                                            size="textxs"
                                                            as="p"
                                                            className="ml-[60px] font-['Sequel_Sans'] text-[14px] font-normal tracking-[0.14px] text-[#000000]  md:ml-0"
                                                        >
                                                          Evaluation
                                                        </Text>
                                                        <Text
                                                            size="textxs"
                                                            as="p"
                                                            className="self-stretch text-center font-['Sequel_Sans'] text-[15px] font-normal leading-[17px] tracking-[0.15px] text-[#616161] "
                                                        >
                                                            Gathered insights are used to evaluate the performance of th lightning systems.
                                                        </Text>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-[26%] flex-col items-end gap-6 md:w-full">
                                        <Img
                                            src="images/cloud_based management.png"
                                            alt="Sixth Image"
                                            className="h-[116px] w-[66%] object-contain"

                                        />
                                        <div className="mx-1 flex flex-col items-end gap-2 self-stretch md:mx-0">
                                            <Text
                                                size="textxs"
                                                as="p"
                                                className="mr-2.5 w-[58%] text-center font-['Sequel_Sans'] text-[14px] font-normal leading-4 tracking-[0.14px] text-[#000000] lg:w-full md:mr-0 md:w-full "
                                            >
                                                Cloud-based Management System
                                            </Text>
                                            <Text
                                                size="textxs"
                                                as="p"
                                                className="w-[66%] text-center font-['sequel_Sans'] text-[15px] font-normal leading-[17px] tracking-[0.15px] text-[#616161] lg:w-full  md:w-full "
                                            >
                                                Collects informations from multiple gateways.
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-[-62px] h-[198px] self-stretch bg-gradient-to-b from-[#ffffff00] to-[#ffffff]"/>
                </div>
            </div>
        </>
    );
};
