import React from 'react';

const sizes = {
  textxs: 'text-[14px] font-normal',
  texts: 'text-[15px] font-normal',
  textmd: 'text-[16px] font-normal lg:text-[13px]',
  textlg: 'text-[18px] font-normal lg:text-[15px]',
  textxl: 'text-[20px] font-normal lg:text-[17px]',
  text2xl: 'text-[24px] font-normal lg:text-[20px] md:text-[22px]',
  text3xl: 'text-[32px] font-normal lg:text-[27px] md:text-[30px] sm:text-[28px]',
  text4xl: 'text-[36px] font-normal lg:text-[30px] md:text-[34px] sm:text-[32px]',
  text5xl: 'text-[48px] font-normal lg:text-[40px] md:text-[44px] sm:text-[38px]',
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "textxl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-[#000000] font-['Inter'] ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export {Text};