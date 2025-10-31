const Step5 = () => {
  return (
    <>
      <div className="p-8 max-w-2xl">
        <h1 className="text-2xl font-semibold mb-2">
          Health benefits enrollment
        </h1>
        <p className="text-gray-500 mb-8 text-sm">
          Proin auctor et; tellus placerat urna phasellus. Luctus nunc pulvinar
          id curabitur sit interdum. Maximus urna suscipit dui proin platea
          habitant blandit tempor adipiscing. Lorem leo et egestas ultricies, mi
          litora ridiculus pulvinar placerat
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-5 text-sm font-medium">
              Porttitor risus laoreet duipsum sit facilisi nibh
            </label>
            <div className="flex items-center space-x-2 mb-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>
          </div>

          <div>
            <label className="block mb-5 text-sm font-medium">
              Nisi mus aliquam amet vehicula facilisis libero platea magnis
            </label>
            <div className="flex items-center space-x-2 mb-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Finibus faucibus purus laoreet accumsan justo eget ullamcorper?
            </label>
            <label className="block text-xs text-gray-500 mb-5">
              Libero iaculis sapien massa duis mauris. Ipsum per egestas mi
              donec tortor per. Ornare convallis imperdiet libero cursus aliquet
              leo sapien scelerisque urna? Acubilia lacinia purus lacus eleifend
              vulputate eu. Justo leo magnis; viverra nunc mollis dignissim ad
              ante.
            </label>
            <div className="flex items-center space-x-2 mb-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 mr-2"
              />
              <label className="text-sm text-gray-700">
                Donec primis habitasse metus tempus nascetur
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 mr-2"
              />
              <label className="text-sm text-gray-700">
                Hac dolor rhoncus ridiculus rhoncus morbi vivamus
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step5;
