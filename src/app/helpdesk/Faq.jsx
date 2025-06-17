"use client";

import './Faq.scss'
import { BiSolidChevronDown } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useTheme } from '../contexts/ThemeProvider'

const Faq = () => {
  const [currentExpendedQues, setCurrentExpendedQues] = useState(null);
  const [clientTheme, setClientTheme] = useState(null)
  const { theme } = useTheme()

  useEffect(() => {
    setClientTheme(theme)
  }, [theme])

  const FAQ = [
    {
      ques: "What is the mission of your organization?",
      ans: "Our mission is to empower vulnerable communities by providing access to education, healthcare, and sustainable livelihoods. We work to improve the quality of life for underserved populations through community-driven solutions and partnerships with local organizations.",
    },
    {
      ques: "How can I get involved or volunteer with your organization?",
      ans: `We welcome volunteers who are passionate about making a difference. To get involved, please visit our "Get Involved" page where you can sign up for upcoming volunteer opportunities, learn about our current projects, or apply to join our team. We offer both remote and in-person volunteer roles, and we provide training and support for all volunteers.`,
    },
    {
      ques: "How can I donate to support your work?",
      ans: `Your generous donation helps us continue our critical work in communities around the world. You can make a one-time or recurring donation through our secure online portal. We also offer options for corporate partnerships, fundraising campaigns, and in-kind contributions. For more details, please visit our "Donate" page.`,
    },
  ]

  return (
    <div className={`FAQ-container ${clientTheme !== 'light' && 'dark'}`}>
      <div className="FAQ-wrapper">
        <div className="section-1"></div>
        <div className="section-2">
          <p>Frequently Asked Questions</p>
          <h3>Have any Questions ?</h3>
          {FAQ.map((faq, i) => (
            <div
              onClick={() => setCurrentExpendedQues(prev => (prev !== i ? i : null))}
              className="ques-ans-wrapper" key={i}>
              <h5 className="faq-ques" data-accordion={`${currentExpendedQues === i && "true"}`}>
                {faq.ques} <BiSolidChevronDown />
              </h5>
              <div onClick={e => e.stopPropagation()} className="faq-ans"><p>{faq.ans}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq;