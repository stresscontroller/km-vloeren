'use client';
import Progressbar from '@/components/shared/Progressbar';
import ActionButton from './ActionButton';
import { CreateAccountForm } from './CreateAccountForm';

const SignupScreen = () => {
  return (
    <>
      <div className="wrapper mb-[6rem]">
        <div className="flex items-center justify-center flex-col gap-[0.625rem]">
          <h1 className="font-bold text-[2.375rem]">Create your account</h1>
          <p className="text-[1.125rem] font-light text-center max-w-[774px]">
            Vulputate eu adipiscing nec nunc viverra feugiat. Eget fermentum
            habitasse vel arcu urna risus. Mi magna egestas vulputate sem
            mollis. Non non faucibus.
          </p>
        </div>
        <div className="flex gap-10 justify-center items-center  mt-[3.75rem]">
          <CreateAccountForm />
        </div>
      </div>
      <div className="mt-auto">
        <Progressbar current={0} next={76} />
        <ActionButton />
      </div>
    </>
  );
};

export default SignupScreen;
