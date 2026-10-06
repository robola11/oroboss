const cardData = [
  {
    id: 1,
    title: "Fast Performance",
    description: "Optimized for speed and built with modern React standards.",
    linkText: "Learn More",
  },
  {
    id: 2,
    title: "Responsive Design",
    description: "Looks great on mobile, tablet, and desktop screens.",
    linkText: "Explore",
  },
  {
    id: 3,
    title: "Easy Customization",
    description: "Style easily using Tailwind utility classes.",
    linkText: "Discover",
  },
];

export default function CardSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Our Features
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Discover what makes our platform stand out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{card.description}</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              {card.linkText} &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
