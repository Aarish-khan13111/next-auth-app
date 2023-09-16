export default function UserProfile({ params }: any) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center text-black sm:px-16">
          <h3 className="text-black text-xl font-semibold">Profile</h3>
          <p className="text-sm text-gray-500">profile {params.id}</p>
        </div>
        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
          <h3 className="text-black"></h3>
        </div>
      </div>
    </div>
  );
}
