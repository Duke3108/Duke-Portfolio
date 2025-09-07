"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem,SelectLabel,SelectTrigger, SelectValue } from "@/components/ui/select"
import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa"
import { motion } from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+123 456 7890"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "info@example.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "123 Main St, Anytown, USA"
  }
]
const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.4, delay: 2.4, ease: "easeIn"}}}
      className="pb-5"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-5 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Contact</h3>
              <p className="text-white/60">Feel free to reach out using the form below.</p>
              
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type='firstname' placeholder="Firstname" />
                <Input type='lastname' placeholder="Lastname" />
                <Input type='email' placeholder="Email address" />
                <Input type='phone' placeholder="Phone number" />
              </div>

              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="service1">Service 1</SelectItem>
                    <SelectItem value="service2">Service 2</SelectItem>
                    <SelectItem value="service3">Service 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea className='h-[150px]' placeholder="Type your message here." />

              {/* btn */}
              <Button size='md' className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-2 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact