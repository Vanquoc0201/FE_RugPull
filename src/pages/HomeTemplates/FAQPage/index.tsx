import { useState } from "react";

const faqs = [
  {
    question: "ANTI RUG PULLING là gì?",
    answer:
      "Đây là một nền tảng nhằm bảo vệ người dùng khỏi các dự án crypto lừa đảo bằng cách cung cấp thông tin minh bạch và công cụ kiểm tra dự án.",
  },
  {
    question: "Làm sao để biết một dự án có đáng tin không?",
    answer:
      "Chúng tôi cung cấp hệ thống chấm điểm dựa trên tiêu chí kỹ thuật, cộng đồng và lịch sử phát triển của từng dự án.",
  },
  {
    question: "Tôi có cần tài khoản để sử dụng?",
    answer:
      "Không bắt buộc. Bạn có thể xem thông tin miễn phí. Tuy nhiên, để đánh giá hoặc theo dõi dự án, bạn cần đăng nhập.",
  },
  {
    question: "Có ứng dụng mobile không?",
    answer:
      "Chúng tôi đang phát triển phiên bản mobile và sẽ ra mắt trong thời gian tới.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          Câu hỏi thường gặp (FAQ)
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-cyan-500 rounded-lg p-4 bg-[#1e293b]"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left text-lg font-semibold text-blue-700 hover:text-cyan-400 transition"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
