export default function CardList(): JSX.Element {
  const cards = [
    {
      id: 1,
      title: "Enhanced User Experience",
      desc: "Our frontend development services focus on creating visually appealing and intuitive user interfaces.",
    },
    {
      id: 2,
      title: "Improved Website Performance",
      desc: "Our team of frontend developers optimizes the performance of your digital platforms.",
    },
    {
      id: 3,
      title: "Cross-Device Compatibility",
      desc: "With the increasing variety of devices and screen sizes, it is crucial to have a website or application that works seamlessly across all platforms.",
    },
    {
      id: 4,
      title: "Scalability and Future-Proofing",
      desc: "We design and develop frontend solutions with scalability in mind, allowing your website or application to grow and adapt to evolving business needs. ",
    },
  ];
  return (
    <div className="bg-vpurple-950">
      <div className="max-w-screen-xl mx-auto px-4 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {cards.map((e: any, i: number) => (
          <div
            className="flex gap-4 lg:gap-5 items-start py-6 border-b border-gray-600"
            key={i}
          >
            <div className="min-h-[64px] lg:h-24 lg:min-h-[96px] min-w-[64px] lg:w-24 lg:min-w-[96px] rounded-lg bg-vpurple-900 flex justify-center items-center font-bold text-teal-400 text-xl lg:text-3xl">
              #{e.id}
            </div>
            <div className="space-y-2">
              <h5 className="text-white font-semibold text-lg">{e.title}</h5>
              <p className="text-gray-400">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
