export default function PurpleBackground({ children }) {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white-150/85"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
