import React from 'react';

type ProfileInfoTextProps = {
  label: string;
  value: string;
};

const ProfileInfoText = ({ label, value }: ProfileInfoTextProps) => {
  return (
    <div className="flex gap-3">
      <p className="text-grey w-48 text-end">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
};

export default ProfileInfoText;
