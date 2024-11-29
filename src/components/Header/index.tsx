import React from 'react';
import { Button, Text, Img } from './..';

interface Props {
    className?: string;
}

export default function Header({ ...props }: Props) {
    return (
        <header
            className={`${props.className} flex justify-center items-center p-[26px] sm:p-4 border-[#ffffff19] border-b-[0.5px] border-solid`}
        >
            <div className="mx-auto flex w-full max-w-[1356px] items-center justify-between gap-5 md:flex-col">
                <Img
                    src="images/img_header_logo.png"
                    alt="Header Logo"
                    className="h-[36px] w-[214px] object-contain"
                />
                <div className="flex w-[46%] items-center justify-between gap-5 md:w-full sm:flex-col">

                    <ul className="flex flex-wrap items-center gap-16 lg:gap-5 md:gap-5">
                        <li>
                            <a href="#" className="lg:text-[15px]">
                                <Text size="textlg" as="p" className="text-[18px] font-normal capitalize text-[#ffffff]">
                                    Home
                                </Text>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="lg:text-[15px]">
                                <Text size="textlg" as="p" className="text-[18px] font-normal capitalize text-[#ffffff]">
                                    Products
                                </Text>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="lg:text-[15px]">
                                <Text
                                    size="textlg"
                                    as="p"
                                    className="font-['Sequel_Sans'] text-[18px] font-normal capitalize text-[#ffffff]"
                                >
                                    Software Services
                                </Text>
                            </a>
                        </li>
                    </ul>

                    <Button
                        variant="gradient"
                        shape="round"
                        color="indigo_A400_01_light_blue_A700"
                        className="min-w-[170px] rounded-sm px-[34px] font-['Sequel_Sans'] sm:px-4"
                    >
                       Login
                    </Button>
                </div>
            </div>
        </header>
    );
}
