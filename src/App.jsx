import React from "react";
import {
  Briefcase,
  GraduationCap,
  FileText,
  Users,
  Search,
  ShieldCheck,
  Rocket,
  MessageCircle,
  Star,
  BriefcaseBusiness,
  Code2,
  PaintBucketIcon,
} from "lucide-react";
import { FaAmericanSignLanguageInterpreting, FaBullhorn, FaPaintBrush, FaPalette } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";
import { TbCategoryFilled } from "react-icons/tb";
import { MdLocalAtm, MdOutlineVerifiedUser } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImPower } from "react-icons/im";
import { AiOutlineNotification } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { PiOfficeChairBold } from "react-icons/pi";
import { BsPersonRaisedHand } from "react-icons/bs";

export default function CareerAddaLandingPage() {
  const services = [
    {
      title:"Job Update",
      icon: <span className="rounded-full p-5 bg-blue-100 "><AiOutlineNotification className="w-8 h-8 text-blue-400" /></span>,
      desc:"Daily verified job opening in Jabalpur"

      
    },
    {

      title:"Internship Opportunities",
      icon: <span className="rounded-full p-5 bg-green-100 "><FaHandHoldingDollar className="w-8 h-8 text-green-400" /></span>,
      desc:"Kickstart your career with internship"
    },
    {
      
      title:"Resume Services",
      icon: <span className="rounded-full p-5 bg-orange-100 "><CgNotes className="w-8 h-8 text-orange-400" /></span>,
      desc:"Professional resume that gets you noticed"
    },
    {

      title:"Career Guidance",
      icon: <span className="rounded-full p-5 bg-indigo-100 "><FaAmericanSignLanguageInterpreting className="w-8 h-8 text-indigo-700" /></span>,
      desc:"Personalized career advice and mentorship"
    },

    {

      title:"Interview Guidance",
      icon: <span className="rounded-full p-5 bg-[#211e55]/10 "><PiOfficeChairBold className="w-8 h-8 text-[#211e55]-400" /></span>,
      desc:"Ace your interviews with expert tips and mock sessions"
    },
    
    {

      title:"Hiring Support",
      icon: <span className="rounded-full p-5 bg-gray-200 "><BsPersonRaisedHand className="w-8 h-8 text-gray-900" /></span>,
      desc:"Helping local businesses find the right talent in Jabalpur"
    }
  ];

  const features = [
    {
      title: "Trusted Platform",
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Fast Updates",
      icon: <Rocket className="w-10 h-10 text-pink-500" />,
    },
    {
      title: "WhatsApp Support",
      icon: <MessageCircle className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <div  className=" text-black bg-gray-100 min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5  fixed w-full top-0 z-50 ">
        <h1 className=" text-white text-2xl font-bold tracking-wide">
          Career <span className="text-yellow-400">Adda</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-100">
          <a href="#" className="hover:text-yellow-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Jobs
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Internships
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Services
          </a>
        </div>

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
          Join Now
        </button>
      </nav>

      {/* Hero Section */}
      <section style={{
        background:"url('./img/banner.png')", backgroundSize: "cover", backgroundPosition: "center" }} className=" relative px-8 md:px-20 py-5 rounded-md">
        {/* Glow Effects */}
        <div style={{ background:"url('./img/golden-light.jpg')",opacity:.6}} className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020024] via-white/10 to-[#020024]"></div>
        {/* <div className="absolute inset-0 bg-[#182131]/30"></div> */}

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="text-white grid md:grid-cols-2 items-center gap-6 relative z-5">
          {/* Left */}
          <div className="py-20">
            <span className="inline-flex bg-white/10 gap-2 border border-white/10 px-4 py-2 rounded-full text-sm text-white-400">
            <Star className="h-5 w-5 text-yellow-400" /> Your Local Career Partner
            </span>

            <h1 className="text-5xl  md:text-7xl font-extrabold leading-tight mt-6">
              Find Jobs. <br />
              Build Career. <br />
              Grow in
              <span className="text-yellow-400"> Jabalpur.</span>
            </h1>

            <p className="text-gray-400 mt-6 text-lg max-w-xl">
              Career Adda connects students, freshers, and businesses with
              verified local jobs, internships, resume support, and career
              guidance.
            </p>



            {/* CTA */}
            <div className="flex gap-4 mt-8">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
                Explore Jobs
              </button>

              <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition">
                Upload Resume
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative h-full w-full flex justify-end items-end">
            {/* <div className="absolute inset-0 "></div> */}

            <img
              src="./img/girl.png"
              alt="career"
              className="object-cover  object-[10%_top] h-[90%]"
            />

            {/* Floating Card */}
            <div className="absolute flex items-center gap-2 top-20 left-100 bg-white text-black rounded-2xl p-5 shadow-2xl ">
             <BriefcaseBusiness className="h-10 w-10 text-blue-600" />
              <div>

              <p className="font-bold text-2xl">500+</p>
              <p className="text-sm "> Job Opportunities</p>
              </div>
            </div>
            <div className="absolute flex items-center gap-2 top-50 left-100 bg-white text-black rounded-2xl p-5 shadow-2xl ">
              <GraduationCap className="h-10 w-10 text-pink-600" />
               <div>
              <p className="font-bold text-2xl">300+</p>
              <p className="text-sm">Internships</p>
              </div>
            </div>

            <div className="absolute flex items-center gap-2 top-80 left-100 bg-yellow-400 text-black rounded-2xl p-5 shadow-2xl">
              <Users className="h-10 w-10 text-green-600" />
               <div className="w-full">
              <p className="font-bold text-2xl">1000+</p>
              <p className="text-sm">Students Connected</p>
              </div>
            </div>
          </div>
        </div>
          {/* Search Box */}
          <div className="absolute  z-10  -bottom-10 w-[85vw]  bg-white shadow-2xl  border border-black/10 backdrop-blur-xl mt-10 rounded-2xl p-3 flex flex-col md:flex-row items-center gap-3">

          {/* Job Search Input */}
          <input
            type="text"
            placeholder="Job title or keyword"
            className="bg-transparent outline-none w-full  text-black placeholder:text-gray-400 px-4 py-3 border border-black/10 rounded-xl"
          />

          {/* Location */}
          <input
            type="text"
            defaultValue="Jabalpur"
            className="bg-transparent outline-none w-full md:w-56 text-black placeholder:text-gray-400 px-4 py-3 border border-black/10 rounded-xl"
          />

          {/* Categories */}
          <select
            className="bg-transparent outline-none w-full md:w-56 text-black px-4 py-3 border border-black/10 rounded-xl"
          >
            <option className="text-black">All Categories</option>
            <option className="text-black">Design</option>
            <option className="text-black">Development</option>
            <option className="text-black">Marketing</option>
            <option className="text-black">Finance</option>
          </select>

          {/* Search Button */}
          <button className="bg-[#211e55] text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition whitespace-nowrap">
            Search Jobs
          </button>

        </div>
      </section>

      {/* Categories */}
      <section className="px-8 text-black md:px-20 py-10 pt-20">
        <div className="w-full mx-auto mb-8 flex flex-col items-center text-center">
          <span className="flex justify-center tracking-wide leading-medium bg-indigo-100 border border-black/10 px-2 py-1 font-semibold  rounded-full text-sm text-white-400">
            POPULAR CATEGORIES
          </span>

          <h2 className="text-3xl mt-3 font-bold">
            Explore Top Opportunities
          </h2>
      </div>

        <div className="grid md:grid-cols-6 gap-6">
          {[
            {
              title:"IT & Software",
              icon: <span className="rounded-full p-5 bg-blue-100 "><Code2 className="w-8 h-8 text-blue-400" /></span>,
              desc:"120+ Jobs"

              
            },
            {

              title:"Design",
              icon: <span className="rounded-full p-5 bg-indigo-100 "><FaPalette className="w-8 h-8 text-indigo-700" /></span>,
              desc:"85+ Jobs"
            },
            {

              title:"Marketing",
              icon: <span className="rounded-full p-5 bg-orange-100 "><FaBullhorn className="w-8 h-8 text-orange-400" /></span>,
              desc:"60+ Jobs"
            },
            {

              title:"Finance",
              icon: <span className="rounded-full p-5 bg-green-100 "><BiMoney className="w-8 h-8 text-green-400" /></span>,
              desc:"45+ Jobs"
            },
            {

              title:"Education",
              icon: <span className="rounded-full p-5 bg-[#211e55]/10 "><GraduationCap className="w-8 h-8 text-[#211e55]-400" /></span>,
              desc:"30+ Jobs"
            },
           
            {

              title:"Others",
              icon: <span className="rounded-full p-5 bg-gray-200 "><TbCategoryFilled className="w-8 h-8 text-gray-900" /></span>,
              desc:"100+ Jobs"
            }
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white/5  border border-black/10 backdrop-blur-xl rounded-md p-8 hover:-translate-y-3 transition duration-300 hover:shadow-black-400/10 hover:shadow-2xl"
            >
              <div className="mb-5 flex justify-center items-center text-center ">{category.icon}</div>

              <h3 className="text-sm text-center font-semibold mb-3">{category.title}</h3>

              <p className="text-gray-700 text-center ">{category.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-100/30 mt-20 flex justify-between" > {
        [
          {
            title:"100% Verified",
            icon: <MdOutlineVerifiedUser className="w-15 h-15 text-blue-400" />,
            desc:"Genuine job & interhsip posting only"

            
          },
          {

            title:"Local Opportunities",
            icon: <MdLocalAtm className="w-15 h-15 text-blue-400" />,
            desc:"Find opportunities in Jabalpur"
          },
          {

            title:"Career Support",
            icon: <RiCustomerService2Fill className="w-15 h-15 text-blue-400" />,
            desc:"Resume, interview & career guidance"
          },
          {

            title:"Fast Update",
            icon: <ImPower className="w-15 h-15 text-blue-400" />,
            desc:"Daily Update on Whatsapp and Instagram"
          }
          
        ].map((item,index)=>(
          <div key={index} className="bg-white/5  rounded-md flex p-10 gap-2">

            <div className="mb-5 flex justify-center items-center text-center ">{item.icon}</div>
            <div>

            <h3 className="text-sm text-center font-semibold mb-3">{item.title}</h3>

            <p className="text-gray-900  text-xs  text-center ">{item.desc}</p>
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-8 md:px-20 py-10">
        <div className="w-full mx-auto mb-8 flex flex-col items-center text-center">
          <span className="flex justify-center tracking-wide leading-medium bg-indigo-100 border border-black/10 px-2 py-1 font-semibold  rounded-full text-sm text-white-400">
            OUR SERVICES
          </span>

          <h2 className="text-3xl mt-3 font-bold">
            We're Here To Help You Succeed
          </h2>
      </div>


        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5  border border-black/10 backdrop-blur-xl rounded-md p-8 hover:-translate-y-3 transition duration-300 hover:shadow-black-400/10 hover:shadow-2xl"
            >
              <div className="mb-5 flex  items-center  ">{service.icon}</div>

              <h3 className="text-md  font-semibold mb-3">{service.title}</h3>

              <p className="text-gray-700  ">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-8 md:px-20 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-10 text-center hover:scale-105 transition"
            >
              <div className="flex justify-center mb-5">{feature.icon}</div>

              <h3 className="text-2xl font-bold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 md:px-20 py-20">
        <div className="bg-gradient-to-r from-blue-900 to-[#0B1A2E] rounded-[40px] p-10 border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Trusted by <span className="text-yellow-400">Students</span>
            </h2>

            <p className="text-gray-400 mt-3">
              Real success stories from our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition"
              >
                <p className="text-gray-300">
                  “Career Adda helped me get my first internship in Jabalpur.
                  Amazing support and verified updates!”
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={`https://i.pravatar.cc/100?img=${item + 10}`}
                    alt="user"
                    className="w-14 h-14 rounded-full"
                  />

                  <div>
                    <h4 className="font-semibold">Rahul Sharma</h4>
                    <p className="text-sm text-gray-400">Student</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-20 pb-20">
        <div className="bg-yellow-400 text-black rounded-[40px] p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.5),transparent)]"></div>

          <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
            Ready to Start Your Career Journey?
          </h2>

          <p className="mt-4 text-lg relative z-10">
            Join Career Adda today and discover local opportunities.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition relative z-10">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-400">
        <h3 className="text-2xl font-bold text-white">
          Career <span className="text-yellow-400">Adda</span>
        </h3>

        <p className="mt-3">
          Building trusted career opportunities for students & freshers.
        </p>

        <p className="mt-5 text-sm">
          © 2026 Career Adda. All rights reserved.
        </p>
      </footer>
    </div>
  );
}