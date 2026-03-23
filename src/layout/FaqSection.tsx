const FaqSection = () => {
  const faqs = [
    {
      question: "What is the purpose of this website?",
      answer:
        "This website is designed to help users find and connect with vendors for their events.",
    },
    {
      question: "How do I find vendors?",
      answer:
        "You can use the search bar or filter options to find vendors based on their services and location.",
    },
  ];

  return (
    <>
      <section
        id="faq"
        className="bg-gradient-to-b from-amber-50 to-white px-4 sm:px-8 lg:px-20 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FaqSection;
