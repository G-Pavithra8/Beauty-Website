export default function CategoryPlaceholder({ title }) {
  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">
          {title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          This category page is coming next. Stay tuned for more beauty picks.
        </p>
      </div>
    </section>
  );
}

