'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Profile from '../_components/Profile';
import ActionButton from '../_components/ActionButton';

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="px-24 py-16">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <h2 className="font-semibold text-3xl">My Profile</h2>
          <p className="text-grey">
            View and manage settings related to your account
          </p>
        </div>
        <div className="bg-sky-100 h-[110px] w-full rounded-tl-3xl rounded-tr-md	rounded-br-3xl rounded-bl-md relative">
          <div className="absolute w-full -bottom-20">
            <div className="flex gap-4">
              <div className="flex gap-3 w-full ml-12">
                <Image
                  src="/images/mattdawson-profile-09.png"
                  alt="Logo"
                  height={100}
                  width={100}
                  className="w-[150px] h-auto rounded-full border-2 border-white shadow-xl"
                />
                <div className="flex justify-between w-full items-center">
                  <div className="mt-10">
                    <h4 className="text-2xl font-semibold">Matt Dawson</h4>
                    <div className="space-x-2">
                      <span className="font-semibold">Project Manager</span>
                      <span>|</span>
                      <span className="text-grey">
                        San Francisco, California
                      </span>
                    </div>
                  </div>
                  <div className="mt-10">
                    <ActionButton isEdit={editMode} setEdit={setEditMode} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-36 pt-32">
        <Profile isEdit={editMode} />
      </div>
    </div>
  );
};

export default ProfilePage;
