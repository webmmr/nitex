export default function FaqItem({ question, answer, isOpen, toggleFaq }) {
  return (
    <div
      className={`bg-brandDark p-8 mb-4 rounded-lg shadow-sm hover:cursor-pointer  ${
        isOpen
          ? "max-h-full transition-max-h duration-300 ease-in-out"
          : "max-h-auto transition-max-h duration-300 ease-in-out"
      }`}
      onClick={toggleFaq}
    >
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-2xl">{question}</h4>
        <h4 className="text-3xl font-bold">{isOpen ? "-" : "+"}</h4>
      </div>
      <div className={`leading-6 mt-8 ${isOpen ? "block" : "hidden"}`}>
        {answer}
      </div>
    </div>
  );
}
