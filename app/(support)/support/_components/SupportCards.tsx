import { Card, CardContent, CardHeader } from '../../../../components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type SupportCardProps = {
  card: {
    url?: string;
    icon?: string;
    title: string;
    desc: string;
    subDesc: string;
  };
};

const SupportCard = ({ card }: SupportCardProps) => {
  return (
    <Card
      className={cn(
        'flex flex-col justify-between p-5 border border-gray-300 w-full'
      )}
    >
      <CardHeader className="flex">
        <div
          className={cn(
            'w-20 h-20 p-5 bg-white flex items-center justify-center'
          )}
        >
          <Image
            src={card.icon ?? ''}
            width={100}
            height={100}
            className="max-w-14"
            alt="icon"
          />
        </div>
      </CardHeader>

      <div className="flex-1 flex flex-col justify-center pl-5">
        <p className="font-semibold text-lg mb-1">{card.title}</p>
        <CardContent className="text-sm">{card.desc}</CardContent>
      </div>

      <div className="flex items-center p-5">
        <a className="text-center text-sm text-blue-500" href={card.url ?? '/'}>
          {card.subDesc}
        </a>
      </div>
    </Card>
  );
};

const AnswerCard = ({ card }: SupportCardProps) => {
  return (
    <Card
      className={cn(
        'flex flex-col gap-3 p-5 border border-gray-300 min-h-[200px]'
      )}
    >
      <CardHeader className="flex flex-row pl-5">
        <div
          className={cn(
            'p-3 bg-blue-100 text-blue-500 rounded-xl text-xs font-semibold'
          )}
        >
          {card.icon}
        </div>
      </CardHeader>

      <div className="flex-1 flex flex-col justify-center pl-5">
        <p className="font-semibold text-lg mb-1">{card.title}</p>
        <CardContent className="text-sm">{card.desc}</CardContent>
      </div>

      <div className="flex items-center pl-5">
        <a className="text-center text-sm text-blue-500" href={card.url ?? '/'}>
          {card.subDesc}
        </a>
      </div>
    </Card>
  );
};

export { SupportCard, AnswerCard };
