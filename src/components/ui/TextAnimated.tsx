import React, { ReactElement } from 'react';

export default function TextAnimated({ children, text }: { text: string, children?: ReactElement }) {
    return (
        <div
            role="link"
            className="relative flex gap-1 items-center text-xl lg:text-[1.6rem] text-nowrap  after:absolute opacity-80 hover:opacity-100 text-white after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1.5 after:bg-neutral-500  after:transition after:duration-200 after:ease-in-out hover:after:translate-y-0.5 hover:after:opacity-100"
        >
            {text}
            {children && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}