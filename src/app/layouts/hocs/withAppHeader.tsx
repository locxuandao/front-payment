import React from "react";
import { HeaderWrapper } from "app/containers/HeaderWrapper";
import { Footer } from "app/components/Footer";

const withAppHeader = (WrappedComponent: React.ComponentType) => {
  return (props: JSX.IntrinsicAttributes) => {
    return (
      <>
        <HeaderWrapper />
        <WrappedComponent {...props} />
        <Footer />
      </>
    );
  };
};

export default withAppHeader;
