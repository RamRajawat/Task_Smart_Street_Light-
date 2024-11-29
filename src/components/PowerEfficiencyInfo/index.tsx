import React from 'react';
import { Img, Text } from './..';

interface Props {
    className?: string;
    savesOnPowerText?: React.ReactNode;
    lowersDowntimeText?: React.ReactNode;
}

export default function PowerEfficiencyInfo({
    savesOnPowerText = 'Saves on power consumption & related costs',
    lowersDowntimeText = 'Lowers downtimes',
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex items-center flex-1`}>
            <div className="mb-1.5 flex flex-1 flex-col items-start gap-6 sm:gap-6 sm:self-stretch">
                <div className="w-[10%] rounded-[18px] bg-gradient-to-b from-[#3661ff] to-[#0084ff] sm:w-full">
                    <Img
                        src="images/img_image_41.png"
                        alt="Power Image"
                        className="h-[74px] w-full rounded-tl-[18px] rounded-tr-[18px] object-cover sm:h-auto"
                    />
                </div>
                <Text
                    size="text4xl"
                    as="p"
                    className="w-[36%] text-[36px] font-normal leading-[130%] tracking-[0.36px] text-[#000000] sm:w-full sm:text-[30px]"
                >
                    {savesOnPowerText}
                </Text>
            </div>
            <div className="flex w-[20%] flex-col items-start gap-6 self-end sm:gap-6">
                <div className="w-[36p%] rounded-[18px] bg-gradient-to-b from-[#3661ff] to-[#0084ff] sm:w-full">
                    <Img
                        src="images/img_image_41.png"
                        alt="Downtime Image"
                        className="h-[74px] w-full rounded-tl-[18px] rounded-tr-[18px] object-cover sm:h-auto"
                    />
                </div>
                <Text
                    size="text4xl"
                    as="p"
                    className="w-full text-[36px] font-normal leading-[150%] tracking-[0.36px] text-[#000000] sm:w-full sm:text-[30px]"
                >
                    {lowersDowntimeText}
                </Text>
            </div>
        </div>


    );
}