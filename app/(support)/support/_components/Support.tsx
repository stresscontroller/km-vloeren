import { useState } from 'react';
import { SupportCard, AnswerCard } from '../_components/SupportCards';
import CreateNewTicketModal from './CreateNewTicketModal';
import 'react-datepicker/dist/react-datepicker.css';

function Support() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const supportCardsList = [
    {
      title: 'Get Ticket Support - vitae neque nunc sagittis egesta',
      desc: 'Dignissim molestie lacus cursus eu tristique id donec enim diam. Viverra nisi pulvinar tristique aliquet.',
      icon: '/icon/headphone.png',
      subDesc: 'Submit A Ticket >',
      url: 'payroll/run',
    },
    {
      title: 'Email us - suspendisse tincidunt posuere vulputate',
      desc: 'Odio accumsan hendrerit bibendum elit risus non sollictudin cursus id sed vellu faucibus enim nam elementum ut.',
      icon: '/icon/envelope.png',
      subDesc: 'Email Now >',
      url: 'payroll/expense',
    },
  ];

  const answerCardsList = [
    {
      title: 'Access your OneCo billing invoices for this month',
      desc: 'Sed amet mattis accumsan ac consequat vel. Purusornare egestas quis tristique nunc feugiat. Pretium luctuts est mauris turpis integer sodales.',
      icon: 'Settings',
      subDesc: 'Learn more >',
    },
    {
      title: 'Request a benefit adjustment',
      desc: 'Mauris adipiscing ullamcorper amet amet turpis egestas cursus. Cursus enim sagittis rutrum integer convallis. Mollis augue ut phasellus scelerisque sit.',
      icon: 'Payroll',
      subDesc: 'Learn more >',
    },
    {
      title: 'View all W2s',
      desc: 'Vulputate pulvinar eu vitae nisl tempus placerat lorem.Quam enim egestas eu adipiscing ipsum sed. Etlacus sit adipiscing id tortor proin in.',
      icon: 'Taxes & Compliance',
      subDesc: 'Learn more >',
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="mb-6">
        <p className="text-2xl mb-2 font-semibold">Support</p>
        <p className="text-sm text-gray-500">
          Scelerisque aliquam at elementum pellentesque.
        </p>
      </div>
      <CreateNewTicketModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="flex flex-col gap-5 bg-white rounded-xl p-8">
        <div>
          <p className="text-xl font-semibold">How can we help?</p>
          <p className="text-gray-500">
            Tincidunt lectus eu platea ipsum congue ultrices nibh eu varius. In
            ac luctus tempus.
          </p>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          {supportCardsList.map((card) => (
            <SupportCard key={card.title} card={card} />
          ))}
        </div>
      </div>
      <div className="bg-white p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-8 rounded-xl">
        <a
          className="bg-blue-100 text-blue-500 p-2 rounded-full text-xs cursor-pointer"
          onClick={openModal}
        >
          2 Tickets open
        </a>
        <p>
          Dignissim molestie lacus cursus eu tristique id donec enim diam.
          Viverra nisi pulvinar tristi.
        </p>
        <a className="text-blue-500 text-xs" href="support/tickets">
          View Support Tickets &gt;
        </a>
      </div>
      <div className="mt-8 bg-white rounded-xl p-8">
        <div>
          <p className="text-xl font-semibold">
            Need more support? Search for answers
          </p>
          <p className="text-gray-500">
            Tellus nullam platea ornare posuere bibe
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 mt-4">
          {answerCardsList.map((card) => (
            <AnswerCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Support;
