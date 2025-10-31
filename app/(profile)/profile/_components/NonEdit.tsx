'use client';
import React from 'react';

import ProfileInfoText from './ProfileInfoText';
import NotificationInfoText from './NotificationInfoText';

const NonEdit = () => {
  return (
    <div className="h-full pb-20">
      <div className="h-full flex flex-col ">
        <div className="space-y-12 mb-6">
          <div className="space-y-5">
            <h4 className="font-semibold text-xl w-48 text-end">
              Personal Info
            </h4>
            <ProfileInfoText label="Email" value="mattdawson@gmail.com" />
            <ProfileInfoText label="Password" value="**************" />
          </div>
          <div className="space-y-5">
            <h4 className="font-semibold text-xl w-48 text-end">Address</h4>
            <ProfileInfoText label="Country" value="United States" />
            <ProfileInfoText label="City" value="Kansas City" />
            <ProfileInfoText label="State" value="Missouri" />
            <ProfileInfoText label="Zip Code" value="30226" />
            <ProfileInfoText label="Tax ID" value="******" />
          </div>
          <div className="space-y-5">
            <h4 className="font-semibold text-xl w-48 text-end">Security</h4>
            <ProfileInfoText label="2-Step Verification" value="Inactive" />
            <ProfileInfoText
              label="Photo ID Backup"
              value="ig_mattdawson-profile-09.png"
            />
            <ProfileInfoText label="Last Account Activity" value="Inactive" />
          </div>
          <div className="space-y-5">
            <h4 className="font-semibold text-xl w-48 text-end">
              Notifications
            </h4>
            <NotificationInfoText
              label="Account"
              headerText="Porttitor risus laoreet ut duipsum"
              subText="Augue eget tincidunt nibh sed pellentesque moribi eget morbi parta nulla"
            />
            <NotificationInfoText
              label="Marketing"
              headerText="Nibh elit vitae est turpis ipsum"
              subText="Augue eget tincidunt nibh sed pellentesque moribi eget morbi parta nulla"
            />
            <NotificationInfoText
              label="Text Message"
              headerText="Imperdiet non nisi curabitur sit posuere eget"
              subText="Sit condimentum blandit vestibulum eget orc"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonEdit;
