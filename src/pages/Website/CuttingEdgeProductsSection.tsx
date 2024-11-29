
import React from "react";
import { Button, Img, Text, Slider, ChipView } from "../../components";
import AliceCarousel, { EventObject } from "react-alice-carousel";

export default function CuttingEdgeProductsSection() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef<AliceCarousel>(null);

    const chipOptions = [
        { value: 1, label: `Centralized Control & Monitoring System` },
        { value: 2, label: `NEMA Mounted VOLC 1160` },
        { value: 3, label: `Retrofit Street Light Controller VOLC 2160` },
        { value: 4, label: `Retrofit Street Light Controller VOLC 2180` },
        { value: 5, label: `Retrofit Street Light Controller VOLC 4180` },
    ];

    const products = [
        {
            title: "Centralized Control & Monitoring System",
            description:
                "Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.",
            image: "/images/img_image_placeholder.png",
        },
        {
            title: "NEMA Mounted VOLC 1160",
            description:
                "A smart lighting solution designed for energy-efficient streetlights with enhanced durability and performance.",
            image: "/images/img_image_placeholder.png",
        },
        {
            title: "Retrofit Street Light Controller VOLC 2160",
            description:
                "An innovative retrofit solution for smart street light control, providing robust performance and easy integration.",
            image: "/images/img_image_placeholder.png",
        },
    ];

    return (
        <div className="flex items-center justify-center bg-[url('/images/img_frame_2359_1.png')] bg-cover bg-no-repeat py-20 px-4 lg:py-12">
            <div className="container max-w-screen-lg">
                {/* Header Section */}
                <div className="mb-8 text-left">
                    <Text
                        size="text2xl"
                        as="p"
                        className="self-end font-['Sequel_Sans'] text-[24px] font-normal capitalize tracking-[-0.24px] text-[#00376b] lg:text-[20px]"
                    >
                        Product
                    </Text>
                    <Text
                        size="text5xl"
                        as="p"
                        className="mt-2 text-3xl font-semibold text-black lg:text-2xl"
                    >
                        Cutting-edge hardware, offering cities optimized resources to achieve smart development goals
                    </Text>
                </div>

                {/* Chip View Section */}
                <ChipView
                    options={chipOptions}
                    values={[chipOptions[sliderState]?.value]}
                    setValues={(selectedValues) => {
                        const index = chipOptions.findIndex(
                            (chip) => chip.value === selectedValues[0]
                        );
                        setSliderState(index);
                        sliderRef.current?.slideTo(index);
                    }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {(option) => (
                        <div
                            key={option.index}
                            className={`cursor-pointer px-4 py-2 rounded-md text-center text-sm font-medium ${option.isSelected
                                ? "bg-gradient-to-l from-[#cbe3ff66] via-[#6eb1ff66] to-[#aed2fa66] text-[#00376b]"
                                : "bg-white text-gray-500 border border-gray-400"
                                }`}
                            onClick={option.toggle}
                        >
                            {option.label}
                        </div>
                    )}
                </ChipView>

                {/* Slider Section */}
                <div className="relative">
                    <Slider
                        autoPlay
                        autoPlayInterval={5000}
                        responsive={{
                            0: { items: 1 },
                            551: { items: 1 },
                            1051: { items: 1 },
                            1441: { items: 1 },
                        }}
                        disableDotsControls
                        activeIndex={sliderState}
                        onSlideChanged={(e: EventObject) => {
                            setSliderState(e.item);
                        }}
                        ref={sliderRef}
                        items={products.map((product, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-12 p-8 bg-gradient-to-b from-white to-[#e1f3ff] lg:flex-col"
                            >
                                {/* Image Section */}
                                <div className="relative flex-shrink-0 w-1/2 lg:w-full">
                                    <Img
                                        src={product.image}
                                        alt={product.title}
                                        className="object-contain w-full h-full"
                                    />
                                    <div className="absolute inset-0 border-4 border-[#cbe3ff] rounded-lg pointer-events-none"></div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1">
                                    <Text
                                        size="textxs"
                                        as="p"
                                        className="mb-2 text-sm text-gray-500"
                                    >
                                        Products
                                    </Text>
                                    <Text
                                        size="text3xl"
                                        as="p"
                                        className="mb-4 text-2xl font-medium text-black lg:text-xl"
                                    >
                                        {product.title}
                                    </Text>
                                    <Text
                                        size="textmd"
                                        as="p"
                                        className="mb-6 text-base text-gray-800"
                                    >
                                        {product.description}
                                    </Text>
                                    <Button
                                        size="sm"
                                        shape="square"
                                        className="flex items-center gap-2 text-black-600 font-medium "
                                    >
                                        Know More

                                        <Img
                                            src="/images/img_arrow_left.png" // Replace with your correct arrow image path
                                            alt="arrow"
                                            className="w-4 h-4"
                                        />

                                    </Button>
                                </div>
                            </div>
                        ))}
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <Button
                        size="sm"
                        shape="square"
                        className="w-10 h-10"
                        onClick={() => sliderRef?.current?.slidePrev()}
                    >
                        <Img src="/images/img_frame_2332.svg" alt="Previous" />
                    </Button>
                    <Button
                        size="sm"
                        shape="square"
                        className="w-10 h-10"
                        onClick={() => sliderRef?.current?.slideNext()}
                    >
                        <Img src="/images/img_frame_2333.svg" alt="Next" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
