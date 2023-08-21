export default function Post({ description }) {
  return (
    <>
      <div className="bg-white p-4 rounded-lg text-left h-auto">
        <div className="flex">
          <div className="h-12 w-12 bg-[--primary-bg-color] rounded-full text-center pt-2">
            <span className="text-2xl font-semibold">M</span>
          </div>
          <div>
            <p className="t text-gray-600 ms-3 text-sm">userName</p>
            <p className="t text-gray-400 ms-3 text-xs">Last week . planet</p>
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-600">
          <p>{ description }</p>
        </div>
      </div>
    </>
  );
}
