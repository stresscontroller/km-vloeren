import React from 'react';

const TimeTrackingPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="min-h-screen flex flex-col">{children}</div>;
};

export default TimeTrackingPageLayout;
