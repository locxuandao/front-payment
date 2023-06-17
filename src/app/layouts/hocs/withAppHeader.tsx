import React from "react";
import { HeaderWrapper } from "app/containers/HeaderWrapper";

const withAppHeader = (WrappedComponent: React.ComponentType) => {
  return (props: JSX.IntrinsicAttributes) => {
    return (
      <>
        <HeaderWrapper />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withAppHeader;
