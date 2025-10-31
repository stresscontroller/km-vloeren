import { Card, CardContent, CardHeader } from '../../../../components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type PayrollCardProps = {
  card: {
    url?: string;
    icon?: string;
    title: string;
    desc: string;
    subDesc: string;
  };
};

const PayrollCard = ({
    card,
  }: PayrollCardProps) => {
    return (
        <Card
            className={cn(
            'w-full h-36 md:w-[50rem] flex flex-row items-center justify-between p-5 border-neutral shadow-[-4px_0_5px_-2px_rgba(0,0,0,0.4)]'
            )}
        >
            <CardHeader className="flex items-center">
                <div
                    className={cn(
                    'w-20 h-20 p-5 rounded-full border border-gray-200 bg-white flex items-center justify-center'
                    )}
                >
                    <Image src={card.icon ?? ''} width={40} height={40} alt="icon" />
                </div>
            </CardHeader>
        
            <div className="flex-1 flex flex-col justify-center pl-6">
                <p className="font-semibold text-md mb-1">{card.title}</p>
                <CardContent className="text-xs">{card.desc}</CardContent>
            </div>
        
            <div className="flex items-center">
            <a
              className="text-center text-xs underline text-blue-500"
              href={card.url ?? '/'}
            >
              {card.subDesc}
            </a>
            </div>
        </Card>
    );
  };

  const OtherPayrollCard = ({ card }: PayrollCardProps) => {
    return (
      <Card
        className={cn(
          'w-[21rem] h-auto flex flex-row items-center justify-between border-neutral shadow-gray-150 shadow-xl'
        )}
      >
        <div className="flex flex-col justify-center mt-2 p-2 pl-4 mb-2">
          <p className="text-sm mb-1">{card.title}</p>
          <CardContent className="text-xs mb-2 text-gray-500">{card.desc}</CardContent>
          <a
            className="text-xs underline text-blue-500 mb-3"
            href="/"
          >
            {card.subDesc}
          </a>
        </div>
        <CardHeader className="flex items-center justify-center mr-2">
          <div
            className={cn(
              'w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center'
            )}
          >
            <Image src={card.icon ?? ''} width={30} height={30} alt="icon" />
          </div>
        </CardHeader>
      </Card>
    );
  };

export {PayrollCard, OtherPayrollCard} ;
