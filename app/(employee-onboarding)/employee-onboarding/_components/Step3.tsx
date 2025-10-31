import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoCloudUploadOutline } from 'react-icons/io5';

const Step3 = () => {
  return (
    <>
      <div className="p-8 max-w-2xl">
        <h1 className="text-2xl font-semibold mb-2">Submit Documents</h1>
        <p className="text-gray-500 mb-8 text-sm">
          Tellus scelerisque sollicitudin pretium purus condimentum. Fames
          dictumst parturient quis rhoncus pellentesque tortor.
        </p>

        <form className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <label className="block mb-0 text-sm">SSN</label>
              <AiOutlineInfoCircle className="text-blue-500 text-xl" />
            </div>
            <input
              type="text"
              placeholder="Enter last four of social security number"
              className="w-full h-16 p-3 bg-gray-50 rounded text-sm"
            />
          </div>

          <div className="mb-2">
            <label className="block mb-2 text-sm">I-9 Form</label>
            <div className="w-full h-54 p-8 rounded bg-no-repeat border border-dashed border-blue-500 flex flex-col justify-center items-center">
              <p className="text-gray-400 font-semibold text-sm">
                Lorem ipsum vellum
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Max 10MB (jpeg, PDF, png)
              </p>
              <p className="text-gray-400 text-xs italic mt-5">or</p>
              <IoCloudUploadOutline className="text-6xl text-blue-500 mt-5" />
            </div>
          </div>

          <div className="mb-2 text-sm">
            <label className="block mb-2">State Tax Withholding</label>
            <div className="w-full h-54 p-8 rounded bg-no-repeat border border-dashed border-blue-500 flex flex-col justify-center items-center">
              <p className="text-gray-400 font-semibold text-sm">
                Lorem ipsum vellum
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Max 10MB (jpeg, PDF, png)
              </p>
              <p className="text-gray-400 text-xs italic mt-5">or</p>
              <IoCloudUploadOutline className="text-6xl text-blue-500 mt-5" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step3;
