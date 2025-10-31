import React from 'react';

type NotificationInfoTextProps = {
  label: string;
  headerText: string;
  subText: string;
};

const NotificationInfoText = ({
  label,
  headerText,
  subText,
}: NotificationInfoTextProps) => {
  return (
    <div className="flex gap-3">
      <p className="text-grey w-48 text-end">{label}</p>
      <div>
        <p className="font-semibold">{headerText}</p>
        <p className="text-grey text-sm">{subText}</p>
      </div>
    </div>
  );
};

export default NotificationInfoText;
