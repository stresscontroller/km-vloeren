import { PayrollCard, OtherPayrollCard }  from '../_components/PayrollCards';
import PayrollTrackingChartCard from './PayrollTrackingChart';
import CelebrationCard from './CelebrationCard';

function Payroll() {

    const payrollCardsList = [
        {
          title: 'Payroll',
          desc: 'Elit urna tortor ipsum nascetur nostra felis torquent.',
          icon: 'icon/people.svg',
          subDesc: 'Run Payroll',
          url: 'payroll/run',
        },
        {
          title: 'Expenses',
          desc: 'Elit urna tortor ipsum nascetur nostra felis torquent.',
          icon: 'icon/people.svg',
          subDesc: 'view expenses',
          url: 'payroll/expense',
        },
        {
          title: 'Contractors',
          desc: 'Elit urna tortor ipsum nascetur nostra felis torquent.',
          icon: 'icon/people.svg',
          subDesc: 'Send Payment',
          url: 'payroll/contractor',
        },
        {
            title: 'Bill & Invoices',
            desc: 'Elit urna tortor ipsum nascetur nostra felis torquent.',
            icon: 'icon/people.svg',
            subDesc: 'Send Payment',
            url: 'payroll/bills',
        },
        {
            title: 'Payroll History',
            desc: 'Elit urna tortor ipsum nascetur nostra felis torquent.',
            icon: 'icon/people.svg',
            subDesc: 'view History',
            url: 'payroll/history'
        },
      ];

      const otherPayrollCardsList = [
        {
          title: 'Late Payroll',
          desc: 'Reward a team member with a bonus, gift or commision.',
          icon: 'icon/people.svg',
          subDesc: 'Run Late Payroll',
        },
        {
          title: 'Off-Cycle Payroll',
          desc: 'Reward a team member with a bonus, gift or commision.',
          icon: 'icon/people.svg',
          subDesc: 'Run Off-Cycle Payroll',
        },
        {
          title: 'Payroll Correction',
          desc: 'Reward a team member with a bonus, gift or commision.',
          icon: 'icon/people.svg',
          subDesc: 'Adjust or Cancel Payroll'
        },
      ];

    return (
      <div className="flex">
        <div className="w-[65%] mr-8 ml-2">
            <div className='mb-6'>
              <p className="text-xl mb-2">Payroll</p>
              <p className="text-sm text-gray-500">Elit libero feugiat ultricies imperdiet neque semper turpis. Phasellus mi imperdiet orci sem tellus ad sapien non. Eu neque netus nostra malesuada habitasse penatibus.</p>
            </div>
            <div className='flex flex-col items-center gap-5'>
              {payrollCardsList.map((card) => (
                  <PayrollCard
                  key={card.title}
                  card={card}
                  />
              ))}
            </div>

            <div className='mt-8'>
              <p className='text-xl mb-4'>Other Payroll Options</p>
            </div>

            <div className='flex flex-row items-center gap-5 mt-4'>
                {otherPayrollCardsList.map((card) => (
                    <OtherPayrollCard
                    key={card.title}
                    card={card}
                    />
                ))}
            </div>
        </div>

        <div className="w-[35%]">
          <PayrollTrackingChartCard />
          <div className="p-4 h-auto border border-neutral shadow-gray-150 shadow-xl rounded-lg bg-white  mt-6">
            <h2 className="text-md ml-2 mt-4 mb-4">Upcoming</h2>

            <p className="text-xs text-gray-400 ml-6 mt-6">Wednesday, March 29</p>
            <p className="text-xs text-gray-500 ml-6 mt-2">Debit $78,928 from company bank account</p>
            
            <hr className="mt-2 ml-6 mr-6"/>
            
            <p className="text-xs text-gray-400 ml-6 mt-6">Friday, March 31</p>
            <p className="text-xs text-gray-500 ml-6 mt-2">Next Employee Paydate</p>
            
            <hr className="mt-2 ml-6 mr-6"/>
            
            <p className="text-xs text-gray-400 ml-6 mt-6">Tuesday, April 25</p>
            <p className="text-xs text-gray-500 ml-6 mt-2 mb-4">Payroll on AutoDebt</p>
          </div>
          <CelebrationCard />
        </div>
      </div>
    );
  }

  export default Payroll;