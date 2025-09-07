"use client"

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import {motion} from "framer-motion"

const services = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'I build responsive and dynamic websites using modern technologies like React, Next.js, and Node.js.',
    link: '',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'I create user-friendly and visually appealing interfaces for web and mobile applications.',
    link: '',
  },
]


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: 0.4, delay: 2.4, ease: 'easeIn'}}}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex-1 flex flex-col gap-6 justify-center group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline group-hover cursor-default transition-all duration-500">  
                  {service.num}
                </div>
                <Link href={service.link} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60">{service.desc}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services