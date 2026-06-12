import React from 'react';
import Footer from '@/components/Footer';

const AIConclave: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="w-full h-72 bg-goldsmiths-blue relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8, 27, 57, 0.8), rgba(8, 27, 57, 0.8)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#E2E8F0] mb-3 font-medium">
              Special Summit
            </p>
            <h1 className="font-druk text-4xl md:text-6xl text-white leading-tight">
              AI VentureX 2026
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
              AI Conclave for Business Leaders, Innovators & Entrepreneurs
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-6xl mx-auto space-y-10">
          <section className="bg-white shadow-xl border border-gray-200 rounded-3xl p-8">
            <div className="space-y-6">
              <div>
                <h2 className="font-druk text-3xl text-[#001324] mb-4">Transform. Innovate. Scale with AI.</h2>
                <p className="font-publico text-lg leading-relaxed text-slate-700">
                  <strong>AI VentureX 2026</strong> is a premier international AI conclave designed to help businesses, enterprises, startups, entrepreneurs, investors, and professionals harness the power of Artificial Intelligence for growth, innovation, productivity, and competitive advantage.
                </p>
                <p className="font-publico text-lg leading-relaxed text-slate-700">
                  Co-located with <strong>CV-S3 2026 – International Conference on Computer Vision for Smart Sustainable Systems</strong>, AI VentureX brings together global AI experts, business leaders, policymakers, researchers, investors, innovators, and technology providers to explore how AI is transforming industries and shaping the future of business.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-goldsmiths-beige border border-gray-200 p-6">
                  <h3 className="font-druk text-2xl mb-4 text-goldsmiths-text">Event Details</h3>
                  <div className="space-y-3 font-publico text-base text-slate-700">
                    <p><span className="font-semibold">📅 23–24 September 2026</span></p>
                    <p><span className="font-semibold">📍 Dubai, UAE</span></p>
                    <p><span className="font-semibold">Hybrid Mode</span></p>
                    <p><span className="font-semibold">23 September 2026</span> – Physical Event</p>
                    <p><span className="font-semibold">24 September 2026</span> – Digital Event</p>
                    <p>
                      🌐 Website: <a href="https://www.cvs3-conference.com/ai-venturex" className="text-blue-700 underline">https://www.cvs3-conference.com/ai-venturex</a>
                    </p>
                    <p>
                      📧 Email: <a href="mailto:cvs3.congress@gmail.com" className="text-blue-700 underline">cvs3.congress@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl bg-[#F8FAFC] border border-gray-200 p-6">
                  <h3 className="font-druk text-2xl mb-4 text-[#001324]">Why Attend AI VentureX?</h3>
                  <ul className="space-y-3 font-publico text-base text-slate-700 list-disc pl-5">
                    <li>Accelerate Business Growth</li>
                    <li>Improve Customer Experience</li>
                    <li>Automate Operations</li>
                    <li>Make Data-Driven Decisions</li>
                    <li>Drive Innovation</li>
                    <li>Create New Revenue Opportunities</li>
                    <li>Build Future-Ready Enterprises</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white shadow-xl border border-gray-200 rounded-3xl p-8">
            <h2 className="font-druk text-3xl text-[#001324] mb-6">Key Highlights</h2>
            <div className="grid gap-6">
              <div className="rounded-3xl bg-goldsmiths-beige border border-gray-200 p-6">
                <h3 className="font-druk text-2xl mb-3">🎤 Keynote Sessions</h3>
                <p className="font-publico text-base leading-relaxed text-slate-700">
                  Insights from global AI leaders, entrepreneurs, innovators, and industry experts.
                </p>
              </div>
              <div className="rounded-3xl bg-goldsmiths-beige border border-gray-200 p-6">
                <h3 className="font-druk text-2xl mb-3">💼 AI for Business Forum</h3>
                <p className="font-publico text-base leading-relaxed text-slate-700">
                  Real-world case studies, enterprise AI adoption, and digital transformation strategies.
                </p>
              </div>
              <div className="rounded-3xl bg-goldsmiths-beige border border-gray-200 p-6">
                <h3 className="font-druk text-2xl mb-3">🤝 Panel Discussions & Roundtables</h3>
                <p className="font-publico text-base leading-relaxed text-slate-700">
                  Interactive discussions on AI trends, opportunities, governance, and industry impact.
                </p>
              </div>
              <div className="rounded-3xl bg-goldsmiths-beige border border-gray-200 p-6">
                <h3 className="font-druk text-2xl mb-3">🌐 Global Networking</h3>
                <p className="font-publico text-base leading-relaxed text-slate-700">
                  Connect with business leaders, startups, investors, researchers, and technology providers.
                </p>
              </div>
              <div className="rounded-3xl bg-goldsmiths-beige border border-gray-200 p-6">
                <h3 className="font-druk text-2xl mb-3">🛠 AI Workshops & Bootcamps</h3>
                <p className="font-publico text-base leading-relaxed text-slate-700">
                  Hands-on sessions on Generative AI, AI Agents, Prompt Engineering, Automation, Analytics, and Enterprise AI.
                </p>
              </div>
              <div className="rounded-3xl bg-goldsmiths-beige border border-gray-200 p-6">
                <h3 className="font-druk text-2xl mb-3">📚 Call for Book Launch</h3>
                <p className="font-publico text-base leading-relaxed text-slate-700">
                  Launch your latest books and engage with a global audience of researchers, professionals, and business leaders.
                </p>
              </div>
              <div className="rounded-3xl bg-goldsmiths-beige border border-gray-200 p-6">
                <h3 className="font-druk text-2xl mb-3">🏢 AI & Technology Exhibition</h3>
                <p className="font-publico text-base leading-relaxed text-slate-700">
                  Showcase products, services, AI solutions, startups, research innovations, and enterprise technologies.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white shadow-xl border border-gray-200 rounded-3xl p-8">
            <h2 className="font-druk text-3xl text-[#001324] mb-6">Focus Areas</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                'AI for Business Growth & Strategy',
                'Marketing, Sales & Customer Experience',
                'Data-Driven Decision Making',
                'AI for Finance & Risk Management',
                'Operations & Process Automation',
                'Generative AI & AI Agents',
                'Responsible AI & Governance',
                'Smart Sustainable Systems',
                'Digital Transformation & Innovation',
              ].map((item) => (
                <div key={item} className="rounded-3xl bg-[#F8FAFC] border border-gray-200 p-5">
                  <p className="font-publico text-base leading-relaxed text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white shadow-xl border border-gray-200 rounded-3xl p-8">
            <h2 className="font-druk text-3xl text-[#001324] mb-6">AI VentureX & CV-S3 Global Awards 2026</h2>
            <p className="font-publico text-lg leading-relaxed text-slate-700 mb-6">
              Celebrating excellence in AI, innovation, entrepreneurship & digital transformation.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-goldsmiths-beige border border-gray-200 p-6">
                <h3 className="font-druk text-xl mb-3">🏆 Research & Academic Excellence</h3>
                <ul className="list-disc pl-5 space-y-2 font-publico text-sm text-slate-700">
                  <li>Lifetime Achievement Award</li>
                  <li>Distinguished Researcher Award</li>
                  <li>Young Researcher Award</li>
                  <li>Women in AI & Computer Vision Award</li>
                  <li>AI Innovation Excellence Award</li>
                  <li>AI for Sustainability Award</li>
                  <li>Best Paper Awards (CV-S3 2026)</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-[#F8FAFC] border border-gray-200 p-6">
                <h3 className="font-druk text-xl mb-3">🚀 Startup & Entrepreneurship Awards</h3>
                <ul className="list-disc pl-5 space-y-2 font-publico text-sm text-slate-700">
                  <li>Startup of the Year</li>
                  <li>AI Startup of the Year</li>
                  <li>Emerging Startup Award</li>
                  <li>Young Entrepreneur Award</li>
                  <li>Women Entrepreneur Award</li>
                  <li>Best Founder Award</li>
                  <li>Innovation-Driven Startup Award</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-goldsmiths-beige border border-gray-200 p-6">
                <h3 className="font-druk text-xl mb-3">🏢 Business & Enterprise Awards</h3>
                <ul className="list-disc pl-5 space-y-2 font-publico text-sm text-slate-700">
                  <li>Enterprise AI Excellence Award</li>
                  <li>AI Business Transformation Award</li>
                  <li>Digital Transformation Excellence Award</li>
                  <li>Business Innovation Award</li>
                  <li>Technology Leadership Award</li>
                  <li>Industry Excellence Award</li>
                  <li>Future-Ready Enterprise Award</li>
                  <li>AI Adoption Excellence Award</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div className="rounded-3xl bg-[#F8FAFC] border border-gray-200 p-6">
                <h3 className="font-druk text-xl mb-3">👑 Leadership & Innovation Awards</h3>
                <ul className="list-disc pl-5 space-y-2 font-publico text-sm text-slate-700">
                  <li>Visionary Business Leader Award</li>
                  <li>CEO / CXO Excellence Award</li>
                  <li>AI Transformation Leader Award</li>
                  <li>Global Innovation Leader Award</li>
                  <li>Smart Technology Innovation Award</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-[#F8FAFC] border border-gray-200 p-6">
                <p className="font-publico text-base leading-relaxed text-slate-700">
                  Additional categories may be introduced based on nominations received and emerging industry trends.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white shadow-xl border border-gray-200 rounded-3xl p-8">
            <h2 className="font-druk text-3xl text-[#001324] mb-6">Special Events</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                'Startup & Innovation Showcase',
                'Startup Pitch Competition',
                'Investor Connect Forum',
                'AI Solution Demonstrations',
                'Product Launches',
                'International Collaboration Forum',
                'Student Innovation Showcase',
                'Grand Awards Ceremony',
                'Gala Networking Reception',
              ].map((item) => (
                <div key={item} className="rounded-3xl bg-goldsmiths-beige border border-gray-200 p-5">
                  <p className="font-publico text-base leading-relaxed text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white shadow-xl border border-gray-200 rounded-3xl p-8">
            <h2 className="font-druk text-3xl text-[#001324] mb-6">Who Should Attend?</h2>
            <ul className="grid gap-4 md:grid-cols-2 list-disc pl-5 font-publico text-base text-slate-700">
              <li>Business Leaders & Entrepreneurs</li>
              <li>CEOs, CXOs & Department Heads</li>
              <li>Startup Founders & Innovators</li>
              <li>Investors & Venture Capitalists</li>
              <li>Digital Transformation Professionals</li>
              <li>AI & Data Practitioners</li>
              <li>Technology Consultants</li>
              <li>Researchers & Academicians</li>
              <li>Government Representatives</li>
              <li>Innovation & Strategy Leaders</li>
            </ul>
          </section>

          <section className="bg-white shadow-xl border border-gray-200 rounded-3xl p-8">
            <h2 className="font-druk text-3xl text-[#001324] mb-6">Join AI VentureX 2026</h2>
            <p className="font-publico text-lg leading-relaxed text-slate-700 mb-4">
              Whether you are looking to scale your business, launch innovative products, connect with investors, explore AI-driven opportunities, or gain insights from global experts, AI VentureX 2026 offers an unparalleled platform for learning, collaboration, innovation, and growth.
            </p>
            <p className="font-druk text-2xl text-[#001324] mb-4">Where AI Meets Ambition. Where Businesses Scale Beyond Limits.</p>
            <p className="font-publico text-base leading-relaxed text-slate-700 mb-2">
              📍 Dubai, UAE | 23–24 September 2026
            </p>
            <p className="font-publico text-base leading-relaxed text-slate-700">
              🌐 <a href="https://www.cvs3-conference.com/ai-conclave" className="text-blue-700 underline">https://www.cvs3-conference.com/ai-conclave</a>
            </p>
            <p className="font-publico text-base leading-relaxed text-slate-700">
              📧 <a href="mailto:cvs3.congress@gmail.com" className="text-blue-700 underline">cvs3.congress@gmail.com</a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIConclave;
