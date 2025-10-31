import { Card, CardContent, CardHeader } from '../../../../components/ui/card';
import { cn } from '@/lib/utils';
import { FaArrowDown } from 'react-icons/fa6';
import { FaArrowUp } from 'react-icons/fa';

type PayrollOverViewCardProps = {
  card: {
    title: string;
    amount: string;
    percent: number;
    date: string;
  };
};

const PayrollOverViewCard = ({ card }: PayrollOverViewCardProps) => {
  return (
    <Card
      className={cn(
        'h-full flex flex-col p-3 border border-gray-300 text-xs'
      )}
    >
      <CardHeader>
        <h5 className="text-gray-600">{card.title}</h5>
      </CardHeader>

      <div className="mt-3">
        <CardContent className="text-lg font-semibold">
          {card.amount}
        </CardContent>
        <div className="mt-1 flex gap-2 items-center">
          <div
            className={`${card.percent < 0 ? 'text-red-500' : 'text-green-500'}`}
          >
            {card.percent}
          </div>
          <div
            className={`${card.percent < 0 ? 'text-red-500' : 'text-green-500'}`}
          >
            {card.percent < 0 ? <FaArrowDown /> : <FaArrowUp />}
          </div>
          <div className="">{card.date}</div>
        </div>
      </div>
    </Card>
  );
};

export default PayrollOverViewCard;
