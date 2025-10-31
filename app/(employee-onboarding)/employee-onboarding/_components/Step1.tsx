const Step1 = () => {
  return (
    <>
      <div className="p-8 max-w-2xl">
        <h1 className="text-2xl font-semibold mb-2">
          Personal profile details
        </h1>
        <p className="text-gray-500 mb-8 text-sm">
          Pellentesque varius sit enim morbivorttitor molestie
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Enter first and last name"
              className="w-full p-3 bg-gray-50 rounded text-sm"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="w-full p-3 bg-gray-50 rounded text-sm"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Date of Birth</label>
            <input
              type="text"
              placeholder="Enter date of birth"
              className="w-full p-3 bg-gray-50 rounded text-sm"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Address</label>
            <input
              type="text"
              placeholder="Enter address"
              className="w-full p-3 bg-gray-50 rounded text-sm"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Role</label>
            <select
              className="w-full h-11 p-2 border rounded bg-no-repeat bg-right bg-gray-50 text-gray-400 text-sm"
              style={{
                appearance: 'none',
                backgroundImage:
                  'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 33 33" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\')',
                backgroundPosition: 'right 10px center',
              }}
            >
              <option>Employee</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm">Title</label>
            <input
              type="text"
              value="Account Lead"
              readOnly
              className="w-full p-3 bg-gray-50 rounded text-sm"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Office Location</label>
            <select
              className="w-full h-11 p-2 border rounded bg-no-repeat bg-right bg-gray-50 text-gray-400 text-sm"
              style={{
                appearance: 'none',
                backgroundImage:
                  'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 33 33" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\')',
                backgroundPosition: 'right 10px center',
              }}
            >
              <option>Orlando, FL</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;
