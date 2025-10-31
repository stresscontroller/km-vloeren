import Image from 'next/image';

const backgroundCheckTableData = [
  {
    id: 1,
    reportType: 'Background',
    name: 'Albert Flores',
    orderDate: 'Aug 16, 2023',
    dateUpdated: 'Aug 16, 2023',
    status: 'Active',
  },
  {
    id: 2,
    reportType: 'Drug est',
    name: 'Albert Flores',
    orderDate: 'Aug 16, 2023',
    dateUpdated: 'Aug 16, 2023',
    status: 'Completed',
  },
  {
    id: 3,
    reportType: 'Background',
    name: 'Vellen isus',
    orderDate: 'Aug 16, 2023',
    dateUpdated: 'Aug 16, 2023',
    status: 'Pending',
  },
  {
    id: 4,
    reportType: 'Background',
    name: 'Vellen isus',
    orderDate: 'Aug 16, 2023',
    dateUpdated: 'Aug 16, 2023',
    status: 'Completed',
  },
];
const BackgroundCheckTable = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-purple-500';
      case 'Rejected':
        return 'bg-orange-500';
      case 'Employed':
        return 'bg-green-500';
      case 'Active':
        return 'bg-purple-500';
      case 'Completed':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-orange-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="p-4 min-w-full bg-white border border-gray-100 rounded-xl shadow-md mt-5">
      <table>
        <thead>
          <tr className="text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left w-[5%]">No.</th>
            <th className="py-3 px-6 text-left w-[20%]">Report Type</th>
            <th className="py-3 px-6 text-left w-[20%]">Applicant name</th>
            <th className="py-3 px-6 text-left w-[20%]">Order Date</th>
            <th className="py-3 px-6 text-left w-[20%]">Date Updated</th>
            <th className="py-3 px-6 text-left w-[15%]">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {backgroundCheckTableData.map((candidate) => (
            <tr
              key={candidate.id}
              className="border-b border-gray-200 hover:bg-gray-100 w-[98%]"
            >
              <td className="py-3 px-6">{candidate.id}</td>
              <td className="py-3 px-6">{candidate.reportType}</td>
              <td className="py-3 px-6 flex gap-2 items-center">
                <Image
                  src="/images/user-02.png"
                  alt="Logo"
                  height={21.4}
                  width={150}
                  className="w-[50px] h-auto"
                />
                <p>{candidate.reportType}</p>
              </td>
              <td className="py-3 px-6">{candidate.name}</td>
              <td className="py-3 px-6">{candidate.orderDate}</td>
              <td className="py-3 px-6">
                <div className="flex gap-3 items-center">
                  <span
                    className={`inline-block py-1 px-3 text-xs rounded-full text-white ${getStatusColor(candidate.status)}`}
                  >
                    <p> {candidate.status}</p>
                  </span>
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={5} className="py-5">
              <div className="mt-4 text-center">
                <button className="bg-white text-blue-500 border-blue-500 border  py-2 px-4 rounded">
                  View All Tracking
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BackgroundCheckTable;
