import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoHeartSharp } from 'react-icons/io5';
import { LuCalendarClock } from 'react-icons/lu';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { GoInfo } from 'react-icons/go';
import { GiSandsOfTime } from 'react-icons/gi';
import { LuShieldCheck } from 'react-icons/lu';
import { LuAlarmClock } from 'react-icons/lu';
import { IoMdFingerPrint } from 'react-icons/io';
import LearningCard from './LearningCard';

const Learning = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gray-100 rounded-xl w-full flex p-10">
        <div className="w-8/12 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">
            Odio donec pharetra est dui etiam malesuada ullamcorpe ongue eget id
            ac nulla. Morbi erat morbi etiam purus!
          </h3>
          <span className="text-sm">
            Nisl et interdum semper at orci vitae arcu eu. Fermentum urna in
            interdum eget. Et nulla nulla vitae pharetra nibh tempor at. Netus
            fames eget lacus nunc in ridiculus facilisi ultrices fermentum.
            Massa pharetra quis aliquam!
          </span>
          <a className="text-blue-500 font-semibold">
            Non porta tellus viverra nullam dui{' '}
          </a>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <Image
            src="/images/hr-01.png"
            alt="Logo"
            height={21.4}
            width={150}
            className="w-[240px] h-auto"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-8/12">
          <h3 className="text-xl font-semibold mb-3">Courses</h3>
          <p className="text-grey text-sm">
            Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed amet
            aliquet facilisis elementum justo sodales. Velit pellentesque odio
            consectetur porttitor in. Duis egestas felis eget dictumst diam
            neque morbi consequat nunc. Consequat pulvinar orci non vivamus.
            Dignissim pellentesque nullam id orci convallis vellum lorem.
          </p>
          <LearningCard
            imageUrl="/images/learning-card-01.png"
            title="Consequat urna facilisis amet ellu id eget sit arcu"
            description="Pulvinar morbi nam dolor turpis amet nisl et quis. Sed amet aliquet
        facilisis elemen justo sodales. Velit pellentesque odio consectetur vel
        por."
          />
        </div>
        <div className="w-4/12 flex flex-col gap-6">
          <div className="w-full p-6 flex items-center gap-3 shadow rounded">
            <GoInfo className="text-xl" />
            <p className="font-semibold">
              Mauris nisl metus elit pretium orci non.
              <a className="text-blue-500 underline">Maecenas. </a>
            </p>
          </div>
          <div className="w-full p-6 flex gap-3 shadow rounded">
            <div>
              <GoInfo className="text-xl" />
            </div>
            <div className="space-y-3">
              <p className="font-semibold">
                Mauris nisl metus elit pretium orci non maecenas?{' '}
              </p>
              <p className="text-grey">
                Molestie interdum neque etiam volutpat. At sed consectetur
                egestas tempor purus suspendisse id rhoncus tincidunt. Eu
                consequat fermentum sagittis amet fusce aliquam sit tincidunt
                adipiscing.
              </p>
              <p className="text-grey">
                Odio nam aliquet suspense nulla ipsum faucibus platea sit.
                Volutpat et magnis nunc condimentum.
              </p>
            </div>
          </div>
          <div className="shadow p-6 space-y-5">
            <h3 className="text-xl font-semibold mb-3">Activity</h3>
            <div className="flex gap-3">
              <div>
                <span className="inline-block p-3 rounded-full bg-blue-500"></span>
              </div>
              <div className="flex gap-4">
                <p className="font-semibold">4</p>
                <div>
                  <p className="font-semibold">Verified</p>
                  <p className="text-grey text-sm">
                    Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed
                    amet aliquet facilisis elem
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <GiSandsOfTime className="text-orange-500 text-2xl" />
              </div>
              <div className="flex gap-4">
                <p className="font-semibold">10</p>
                <div>
                  <p className="font-semibold">Unverified</p>
                  <p className="text-grey text-sm">
                    Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed
                    amet aliquet facilisis elem
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <LuShieldCheck className="text-purple-500 text-2xl" />
              </div>
              <div className="flex gap-4">
                <p className="font-semibold">2</p>
                <div>
                  <p className="font-semibold">Criminal Records</p>
                  <p className="text-grey text-sm">
                    Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed
                    amet aliquet facilisis elem
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <LuAlarmClock className="text-green-500 text-2xl" />
              </div>
              <div className="flex gap-4">
                <p className="font-semibold">10</p>
                <div>
                  <p className="font-semibold">Enim elementum lacus</p>
                  <p className="text-grey text-sm">
                    Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed
                    amet aliquet facilisis elem
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <IoMdFingerPrint className="text-red-500 text-2xl" />
              </div>
              <div className="flex gap-4">
                <p className="font-semibold">23</p>
                <div>
                  <p className="font-semibold">Dui porta nunc</p>
                  <p className="text-grey text-sm">
                    Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed
                    amet aliquet facilisis elem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
