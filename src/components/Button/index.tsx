import React from 'react';

const shapes = {
    circle: 'rounded-[50%]',
    rounded: 'rounded-sm',
    square: 'rounded-[0px]',
} as const;

const variants = {
    gradient: {
        indigo_A400_01_light_blue_A700: 'bg-gradient-to-b from-[#3661ff] to-[#0084ff] text-[#ffffff]',
    },
    fill: {
        indigo_A400_01: 'bg-[#3661ff] text-[#ffffff]',
    },
} as const;

const sizes = {
    xs: 'h-[32px] px-3',
    sm: 'h-[52px]',
    md: 'h-[54px] px-[34px] text-[20px]',
} as const;

type ButtonProps = Omit<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >,
    "onClick"
> &
    Partial<{
        className: string;

        leftIcon: React.ReactNode;
        rightIcon: React.ReactNode;

        onClick: () => void;
        shape: keyof typeof shapes;
        variant: keyof typeof variants | null;
        size: keyof typeof sizes;
        color: string;
    }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "md",
    color = "indigo_A400_01",
    ...restProps
}) => {
    return (
        <button
            className={`
          ${className}
          flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap
          ${shape && shapes[shape]}
          ${size && sizes[size]}
          ${variant && variants[variant]?.[color as keyof(typeof variants)[typeof variant ]]}
        `}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

export { Button };