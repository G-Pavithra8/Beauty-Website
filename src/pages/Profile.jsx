export default function Profile() {
  const user = JSON.parse(localStorage.getItem("nykaa_user") || "null");
  const isSignedIn = localStorage.getItem("nykaa_auth") === "true";
  const CARD_CLASS =
    "group rounded-[28px] overflow-hidden bg-white border-2 border-pink-300 hover:border-pink-500 shadow-lg hover:shadow-[0_15px_40px_-10px_rgba(236,72,153,0.45)] hover:-translate-y-2 transition-all duration-300 ease-out";

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-10">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Profile
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your saved account details.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="w-24 h-1 rounded-full bg-pink-500"></span>
          </div>
        </div>

        {!isSignedIn || !user ? (
          <div className={`${CARD_CLASS} mt-12 p-8 text-center`}>
            <p className="text-gray-600">
              Please sign in to view your profile details.
            </p>
          </div>
        ) : (
          <div className={`${CARD_CLASS} mt-12 p-8`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="mt-2 text-lg font-semibold text-gray-800">
                  {user.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="mt-2 text-lg font-semibold text-gray-800">
                  {user.email}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Password</p>
                <p className="mt-2 text-lg font-semibold text-gray-800">
                  {"•".repeat(Math.max(6, user.password?.length || 6))}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="mt-2 text-lg font-semibold text-pink-500">
                  Active
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

