import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const TEAM_PHOTO = "https://v0-ngo-app-for-studies.vercel.app/images/trustees-group.png";

const stats = [
  { number: '1,100+', label: 'Children completed Secondary School', color: 'text-emerald-600' },
  { number: '800+', label: 'Diploma Engineers Educated & Employed', color: 'text-emerald-600' },
  { number: '180+', label: 'Graduate Engineers in Reputed Organizations', color: 'text-emerald-600' },
  { number: '85%', label: 'Are Girls – Educated & Employed', color: 'text-emerald-600' },
];

const supportServices = [
  "Education till the Graduation and Post Graduation",
  "One time meal, College fees, Exam fees, and Study materials",
  "Transportation Facility",
  "Provide Online and Offline Classes"
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="home" className="relative pt-12 lg:pt-20 pb-20 lg:pb-32 px-6 lg:px-8 bg-slate-50 overflow-hidden">
        <img
          src="https://scontent.fhyd10-2.fna.fbcdn.net/v/t39.30808-6/352111642_1744211539369232_6387317231882030590_n.png?_nc_cat=100&ccb=1-7&_nc_sid=2a1932&_nc_ohc=RMOpWCguhewQ7kNvwEZBv5a&_nc_oc=Adr11EUV9vxnIfRd_lD5T3cs4pP6aalMFDv1NUeI1UXbnm-T4SfMfDDNZVHxX3J1hKU&_nc_zt=23&_nc_ht=scontent.fhyd10-2.fna&_nc_gid=bnQ50fr-yjDC2R9iiPhoBA&_nc_ss=7a389&oh=00_Af0mDdyAQOHy_4aeGdlx26djvqTdPS-0AdOGqkS6cXyvBg&oe=69D445D4"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] lg:text-xs font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4 lg:mb-6"
          >
            Empowering Students Since 2003
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-7xl font-serif font-bold text-slate-900 mb-6 lg:mb-8 leading-[1.2] lg:leading-[1.1]"
          >
            Every Student Deserves <br className="hidden lg:block" /> Quality Education
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            PSS (Potukuchi Somasundara Social Welfare & Charitable Trust) is an NGO dedicated to breaking financial barriers. mentorship, and the guidance they need to pursue higher education.
          </motion.p>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 lg:py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900 mb-6 lg:mb-8">About Us</h2>
            <div className="space-y-4 lg:space-y-6 text-sm lg:text-base text-slate-600 leading-relaxed">
              <p>
                Potukuchi Somasundara Social Welfare and Charitable Trust (PSS Trust) is a registered Non-Governmental Organization (Reg No: 95/2003) established on August 15, 2003. Founded by Dr. (H.C) P. Srinivas in honor of his father, the late P. Somasundara Sastry—a distinguished recipient of the National Best Teacher Award from Andhra Pradesh—the Trust is dedicated to continuing his legacy of educational excellence and social service.
              </p>
              <p>
                Our primary focus is on children from families living below the poverty line, including children of migrant workers and daily wagers. These students often face significant socio-economic barriers that hinder their pursuit of secondary and higher education. Without timely intervention, these challenges lead to high dropout rates among boys and early marriages among girls, perpetuating a cycle of poverty. PSS Trust steps in to bridge these gaps, providing the necessary support and mentorship to ensure every child has the opportunity to reach their full potential.
              </p>
              <p>
                Over the past two decades, PSS Trust has evolved into a beacon of hope for thousands of students. We don't just provide financial aid; we offer a comprehensive support system that includes counseling, skill development, and career guidance, ensuring our students are not just educated, but also employable and empowered. Our mission is to transform BPL families from beneficiaries of government subsidies into dignified, tax-paying citizens through quality education and sustainable employment.
              </p>
            </div>

            <div className="mt-8 lg:mt-12">
              <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-4">Our Mission:</h3>
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 lg:p-6 rounded-r-xl italic text-indigo-900 text-base lg:text-lg">
                "The Vision and the Mission of the PSS Trust is to transform the BPL families who remain as beneficiaries of the Government subsidies to dignified Tax paying civilians through education and employment."
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
              <img src={TEAM_PHOTO} alt="PSS Trust Team" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
              <div className="p-4 lg:p-6 text-center">
                <h4 className="text-lg lg:text-xl font-bold text-indigo-900">PSS Trust Team</h4>
                <p className="text-sm lg:text-base text-indigo-600 font-medium">(Trustees & Leadership)</p>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 lg:py-24 bg-slate-50 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-900 mb-2">Our Impact</h2>
            <p className="text-sm lg:text-base text-slate-500 font-medium">Let the Numbers Speak</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 lg:gap-6">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between"
                >
                  <div>
                    <span className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${stat.color} block mb-3 lg:mb-4`}>{stat.number}</span>
                    <div className="w-10 lg:w-12 h-1 bg-orange-400 mb-4 lg:mb-6"></div>
                    <p className="text-sm lg:text-base text-slate-700 font-medium leading-snug">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg lg:text-xl font-bold text-indigo-900 mb-6 lg:mb-8">Our Support Services</h3>
              <ul className="space-y-4 lg:space-y-6">
                {supportServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3 lg:gap-4">
                    <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600 shrink-0" />
                    <span className="text-sm lg:text-base text-slate-700 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs lg:text-sm text-slate-500 italic">
                  * All services are provided free of cost to eligible students from BPL families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Prospects Section */}
      <section id="student" className="py-16 lg:py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-8 lg:mb-12">Student Prospects at the Trust</h2>
        
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 lg:mb-8 text-center lg:text-left">
                8 Year Career Path for Technical Education
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-center lg:items-start">
                <div className="w-full sm:w-1/2 bg-slate-50 rounded-xl p-3 lg:p-4 border border-slate-200">
                  <img src="https://v0-ngo-app-for-studies.vercel.app/images/screenshot-202025-11-29-20163334.png" alt="Career Path Diagram" className="w-full rounded-lg shadow-sm" referrerPolicy="no-referrer" />
                </div>
                <div className="w-full sm:w-1/2">
                  <ul className="space-y-3 lg:space-y-4 text-sm lg:text-base text-slate-700 font-medium">
                    <li className="flex items-start gap-2 lg:gap-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-slate-900 mt-2 shrink-0"></div>
                      <span><span className="font-bold">9th Class</span> – Enrollment with Trust– Focus on Basics</span>
                    </li>
                    <li className="flex items-start gap-2 lg:gap-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-slate-900 mt-2 shrink-0"></div>
                      <span><span className="font-bold">10th Class</span> – Board exams and Polytechnic Entrance.</span>
                    </li>
                    <li className="flex items-start gap-2 lg:gap-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-slate-900 mt-2 shrink-0"></div>
                      <span>Some students will also be selected for Vocational courses after the 10 class. These kids secure jobs after the completion of courses</span>
                    </li>
                    <li className="flex items-start gap-2 lg:gap-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-slate-900 mt-2 shrink-0"></div>
                      <span><span className="font-bold">Diploma</span> – 3 years</span>
                    </li>
                    <li className="flex items-start gap-2 lg:gap-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-slate-900 mt-2 shrink-0"></div>
                      <span><span className="font-bold">Placement</span></span>
                    </li>
                    <li className="flex items-start gap-2 lg:gap-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-slate-900 mt-2 shrink-0"></div>
                      <span><span className="font-bold">Engineering</span> – 3 years</span>
                    </li>
                    <li className="flex items-start gap-2 lg:gap-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-slate-900 mt-2 shrink-0"></div>
                      <span><span className="font-bold">Placement</span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 lg:mb-8 text-center lg:text-left">
                Skill Development path
              </h3>
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 lg:mb-3">1. Health Sector</h4>
                  <ul className="ml-5 lg:ml-6 space-y-1 lg:space-y-2 text-sm lg:text-base text-slate-700 font-medium list-decimal">
                    <li>Multipurpose Health Workers</li>
                    <li>Medical Lab Technician</li>
                    <li>Pharmatech</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 lg:mb-3">2. Computer Courses</h4>
                  <ul className="ml-5 lg:ml-6 space-y-1 lg:space-y-2 text-sm lg:text-base text-slate-700 font-medium list-decimal">
                    <li>Animation and multimedia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 lg:mb-3">3. Automobile</h4>
                  <ul className="ml-5 lg:ml-6 space-y-1 lg:space-y-2 text-sm lg:text-base text-slate-700 font-medium list-decimal">
                    <li>Driver careers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 lg:mb-3">4. Technicians</h4>
                  <ul className="ml-5 lg:ml-6 space-y-1 lg:space-y-2 text-sm lg:text-base text-slate-700 font-medium list-decimal">
                    <li>Plumbing</li>
                    <li>Electrical technicians</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
