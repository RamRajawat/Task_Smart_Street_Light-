import React from 'react';
import { Img, Text } from './..';

interface Props {
    className?: string;
}

export default function Footer({ ...props }: Props) {
    return (
        <footer
            {...props}
            className={`${props.className} flex justify-end items-center bg-gradient-to-b from-[#000409] to-[#002547]`}
        >
            <div className="relative mx-auto h-[656px] w-full max-w-[1682px] content-center lg:h-auto lg:px-5 md:h-auto md:px-5">
                <div className="flex flex-1 items-center md:flex-col">
                    <div className="relative z-[4] mb-[198px] h-[2px] w-full self-end bg-[#e2f1ff]"></div>
                    <div className="relative ml-[-234px] flex w-full items-start justify-center md:ml-0 md:flex-col">
                        <a
                            href="Product"
                            target="_blank"
                            rel="noreferrer"
                            className="relative z-[3] mt-[150px] lg:text-[17px]"
                        >

                        </a>
                        <Img
                            src="images/img_planet_earth.png"
                            alt="Earth Image"
                            className="relative ml-[-58px] h-[656px] w-[92%] self-center object-contain md:ml-0 md:w-full"
                        />
                    </div>
                </div>
                <Img
                    src="images/img_footer_logo.png"
                    alt="Footer Logo"
                    className="absolute left-0 top-[23%] m-auto h-[40px] w-[232px] object-contain"
                />
                <div className="absolute right-[21%] top-[23%] m-auto flex w-[30%] flex-wrap justify-between gap-5">
                    <Text
                        as="p"
                        className="text-[20px] font-normal tracking-[-0.40px] text-[#ffffff]"
                    >
                        Product
                    </Text>
                    <Text as="p" className="text-[20px] font-normal tracking-[-0.40px] text-[#ffffff] lg:text-[17px]">
                        Software Services
                    </Text>
                    <Text as="p" className="text-[20px] font-normal tracking-[-0.40px] text-[#ffffff] lg:text-[17px]">
                        Follow Us
                    </Text>
                </div>
                <div className="absolute bottom-[22%] left-0 m-auto flex w-[34%] items-center gap-8 sm:relative sm:flex-col">
                    <div className="flex flex-1 flex-wrap items-center justify-between gap-5 sm:self-stretch">
                        <a href="#" className="lg:text-[17px]">
                            <Text as="p" className="text-[20px] font-normal tracking-[-0.40px] text-[#ffffff]">
                                Privacy Policy
                            </Text>
                        </a>
                        <Text as="p" className="text-[20px] font-normal tracking-[-0.40px] text-[#ffffff] lg:text-[17px]">
                            |
                        </Text>
                        <a href="#" className="lg:text-[17px]">
                            <Text as="p" className="text-[20px] font-normal tracking-[-0.40px] text-[#ffffff]">
                                Terms & Conditions
                            </Text>
                        </a>
                        <Text as="p" className="text-[20px] font-normal tracking-[-0.40px] text-[#ffffff] lg:text-[17px]">
                            |
                        </Text>
                        <a href="#" className="self-end lg:text-[17px]">
                            <Text as="p" className="text-[20px] font-normal tracking-[-0.40px] text-[#ffffff]">
                                Cookie Policy
                            </Text>
                        </a>
                    </div>

                </div>
            </div>
        </footer >
    );
}