"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs, SiNestjs, SiTypescript, SiSequelize, SiMongodb, SiPostgresql, SiPostman, SiDocker, SiRedux, SiReacthookform, SiVite,SiNpm, SiJsonwebtokens, SiVercel} from 'react-icons/si'
import Link from 'next/link'
import { Link2 } from 'lucide-react'

const about = {
  title: "About Me",
  description: "I am a passionate web developer with experience in building dynamic and responsive web applications. I enjoy learning new technologies and improving my skills.",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Khưu Tiến Tước"
    },
    {
      fieldName: "Email",
      fieldValue: "tuoc31082004@gmail.com"
    },
    {
      fieldName: "Phone",
      fieldValue: "0918516514"
    },
    {
      fieldName: "Location",
      fieldValue: "Ho Chi Minh City"
    },
    {
      fieldName: "Languages",
      fieldValue: "English"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    }
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  description: "I have worked on various projects, ranging from small business websites to large-scale web applications. My expertise lies in front-end development, but I also have experience with back-end technologies.",
  projects:[
    {
      projectName: "E-commerce Website",
      duration: "Jan 2022 - Present",
      link: 'https://example.com/e-commerce-website'
    },
    {
      projectName: "E-commerce Website",
      duration: "Jan 2022 - Present",
      link: 'https://example.com/e-commerce-website'
    },
    {
      projectName: "E-commerce Website",
      duration: "Jan 2022 - Present",
      link: 'https://example.com/e-commerce-website'
    },
    {
      projectName: "E-commerce Website",
      duration: "Jan 2022 - Present",
      link: 'https://example.com/e-commerce-website'
    },
    {
      projectName: "E-commerce Website",
      duration: "Jan 2022 - Present",
      link: 'https://example.com/e-commerce-website'
    },
    {
      projectName: "E-commerce Website",
      duration: "Jan 2022 - Present",
      link: 'https://example.com/e-commerce-website'
    }
  ]
}

const education = {
  icon : '/assets/resume/cap.svg',
  title: "My education",
  description: "I have a strong educational background in computer science and web development. I have completed several courses and certifications to enhance my knowledge and skills.",
  schools:[
    {
      schoolName: "University of Example",
      degree: "Bachelor of Science in Computer Science",
      year: "2020"
    },
   
  ]
}

const skills = {
  title: "My skills",
  description: "I possess a diverse set of skills that enable me to create efficient and effective web applications. Here are some of the technologies I am proficient in:",
  skillList:[
    {
      icon: <FaHtml5/>,
      name: "html 5"
    },
    {
      icon: <FaCss3/>,
      name: "css 3"
    },
    {
      icon: <FaJs/>,
      name: "javascript"
    },
    {
      icon: <FaReact/>,
      name: "reactJS"
    },
    {
      icon: <SiNextdotjs/>,
      name: "nextJS"
    },
    {
      icon: <SiVite/>,
      name: "vite"
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwindcss"
    },
    
    {
      icon: <SiRedux/>,
      name: "redux"
    },
    {
      icon: <SiReacthookform/>,
      name: "react-hook-form"
    },
    {
      icon: <FaNodeJs/>,
      name: "nodejs"
    },
    {
      icon: <SiNestjs/>,
      name: "nestjs"
    },
    {
      icon: <SiJsonwebtokens/>,
      name: "jwt"
    },
    {
      icon: <SiSequelize/>,
      name: "sequelize"
    },
    {
      icon: <SiMongodb/>,
      name: "mongodb"
    },
    {
      icon: <SiPostgresql/>,
      name: "postgresql"
    },
    {
      icon: <SiPostman/>,
      name: "postman"
    },
    {
      icon: <SiDocker/>,
      name: "docker"
    },
    {
      icon: <SiVercel/>,
      name: "vercel"
    }
  ]
}

const About = () => {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1, transition:{duration:0.4,delay:2.4, ease:"easeIn"}}}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto px-4'>
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value="experience" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.projects.map((item, index) => (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[250px] min-h-[50px] text-center lg:text-left'>{item.projectName}</h3>
                        <Link href={item.link} className='flex items-center gap-3 justify-center' target='_blank' >
                           <Link2 className='text-accent' />
                            <p className='text-white/60'>View Project</p>
                          </Link>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className='w-full'>
               <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.schools.map((item, index) => (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.year}</span>
                        <h3 className='text-xl max-w-[250px] min-h-[50px] text-center lg:text-left'>{item.schoolName}</h3>
                        <div className='flex items-center gap-3 justify-center'>
                          <span className='bg-accent rounded-full w-[6px] h-[6px]'></span>
                          <p className='text-white/60'>{item.degree}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className='w-full h-full'>
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 text-center'>
                  {skills.skillList.map((item, index) => (
                    <li key={index} >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[120px] bg-[#232329] cursor-pointer rounded-xl flex justify-center items-center group'>
                            <div className='text-5xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent  className='capitalize text-primary bg-white mb-2'>
                            {item.name}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 max-w-[620px] gap-y-6 mx-auto xl:mx-0'>
                  {about.info.map((item, index) => (
                    <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default About