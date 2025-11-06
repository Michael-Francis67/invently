import React from "react";

const HomeLayout = ({children}: {children: React.ReactNode}) => {
    return <main className="h-full w-full flex flex-col">{children}</main>;
};

export default HomeLayout;
