'use client';

import Navigation from "../components/Navigation";
import { useState } from "react";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Câu hỏi thường gặp 1 là gì?",
      answer: "Đây là câu trả lời cho câu hỏi thường gặp 1. Bạn có thể tìm thấy thông tin chi tiết về vấn đề này trong phần mô tả.",
    },
    {
      question: "Câu hỏi thường gặp 2 là gì?",
      answer: "Đây là câu trả lời cho câu hỏi thường gặp 2. Chúng tôi luôn sẵn sàng hỗ trợ bạn với mọi thắc mắc.",
    },
    {
      question: "Câu hỏi thường gặp 3 là gì?",
      answer: "Đây là câu trả lời cho câu hỏi thường gặp 3. Nếu bạn cần thêm thông tin, vui lòng liên hệ với chúng tôi.",
    },
    {
      question: "Câu hỏi thường gặp 4 là gì?",
      answer: "Đây là câu trả lời cho câu hỏi thường gặp 4. Chúng tôi cam kết cung cấp dịch vụ tốt nhất cho khách hàng.",
    },
    {
      question: "Câu hỏi thường gặp 5 là gì?",
      answer: "Đây là câu trả lời cho câu hỏi thường gặp 5. Đội ngũ của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc của bạn.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-custom min-h-screen">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h1>
          <p className="text-lg text-gray-600">Tìm câu trả lời cho các câu hỏi phổ biến</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Không tìm thấy câu trả lời?
          </h2>
          <p className="text-gray-700 mb-6">
            Nếu bạn có câu hỏi khác, đừng ngần ngại liên hệ với chúng tôi.
          </p>
          <a
            href="/lien-he"
            className="inline-block bg-custom text-white px-6 py-3 rounded-md hover:bg-custom/90 transition-colors"
          >
            Liên hệ với chúng tôi
          </a>
        </div>
      </main>
    </div>
  );
}

