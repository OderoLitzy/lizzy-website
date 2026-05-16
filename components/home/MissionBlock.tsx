export default function MissionBlock() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Mission */}
        <div className="border-l-4 border-teal-primary pl-6">
          <h2 className="font-serif text-2xl font-bold text-teal-dark mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A dignified and responsible community where youth, women and vulnerable
            groups enjoy the fullness of life through education, economic opportunity,
            health, technology, and social support.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-teal-dark mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            An empowered community where every person — regardless of gender, age, or
            background — can access the resources and support they need to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
