import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import Button from "./Button";
import FaqItem from "./FaqItem";
import { useState } from "react";

export default function Faq() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "FAQ Question 1",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non necessitatibus magnam ratione tenetur ex! Aspernatur.",
      isOpen: false,
    },
    {
      id: 2,
      question: "FAQ Question 2",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non necessitatibus magnam ratione tenetur ex!",
      isOpen: false,
    },
    {
      id: 3,
      question: "FAQ Question 3",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non necessitatibus magnam ratione tenetur ex!  Non necessitatibus magnam ratione tenetur ex! Aspernatur. Aspernatur.",
      isOpen: false,
    },
    {
      id: 4,
      question: "FAQ Question 4",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non necessitatibus magnam ratione tenetur ex! Aspernatur.  Non necessitatibus magnam ratione tenetur ex! Aspernatur. Non necessitatibus magnam ratione tenetur ex! Aspernatur.",
      isOpen: false,
    },
  ]);

  const toggleFaq = (id) => {
    const updatedFaqs = faqs.map((faq) => {
      if (faq.id === id) {
        return { ...faq, isOpen: !faq.isOpen };
      } else {
        return { ...faq, isOpen: false };
      }
    });

    setFaqs(updatedFaqs);
  };

  return (
    <section className="pt-32 pb-24 bg-brand text-stone-50">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-4">
          Frequesntly Asked Questions
        </h2>
        <p className="text-lg text-stone-200 text-center max-w-xl mx-auto mb-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nostrum
          facilis, in porro esse eveniet.
        </p>

        <div className="grid grid-cols-3 gap-8 auto-cols-max">
          <div>
            <div className=" p-8 shadow-sm rounded-lg bg-brandDark col-span-1 text-center h-auto">
              <HiOutlineChatBubbleLeftRight className=" text-7xl mb-5 mx-auto" />

              <h3 className="text-2xl font-bold mb-4">
                Have Different Questions?
              </h3>
              <p className="leading-6 mb-8">
                Don't Worry. We have a 24/7 global live chat support. Just click
                on the button below and someone from our team will be with you
                momentarily.
              </p>
              <Button>Contact Support</Button>
            </div>
          </div>
          <div className="  col-span-2 ">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={faq.isOpen}
                toggleFaq={() => toggleFaq(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
