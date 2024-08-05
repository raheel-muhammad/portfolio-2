"use client";
import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const about = {
    title: "About me",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Lorem ipsum"
        },
        {
            fieldName: "Phone",
            fieldValue: "+123456789"
        }, {
            fieldName: "Experience",
            fieldValue: "1 Year"
        },
        {
            fieldName: "Skype",
            fieldValue: "lorem.07"
        },
        {
            fieldName: "Nationality",
            fieldValue: "xyz"
        },
        {
            fieldName: "Email",
            fieldValue: "abc@xyz.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
    ],
};

const experience = {
    title: "My Experience",
    description: 'Lorem ipsum dolor set',
    items: [
        {
            company: "abc Solution",
            position: "Full Stack Developer",
            duration: "2022-Present"
        },
        {
            company: "abc Solution",
            position: "Full Stack Developer",
            duration: "2022-Present"
        },
        {
            company: "abc Solution",
            position: "Full Stack Developer",
            duration: "2022-Present"
        },
        {
            company: "abc Solution",
            position: "Full Stack Developer",
            duration: "2022-Present"
        },
        {
            company: "abc Solution",
            position: "Full Stack Developer",
            duration: "2022-Present"
        },
    ]
}

const education = {
    title: "My Education",
    description: 'Lorem ipsum dolor set',
    items: [
        {
            institution: "abc",
            degree: "Full Stack Developer bootCamp",
            duration: "2023"
        },
        {
            institution: "abc",
            degree: "Full Stack Developer bootCamp",
            duration: "2023"
        },
        {
            institution: "abc",
            degree: "Full Stack Developer bootCamp",
            duration: "2023"
        },
        {
            institution: "abc",
            degree: "Full Stack Developer bootCamp",
            duration: "2023"
        },
        {
            institution: "abc",
            degree: "Full Stack Developer bootCamp",
            duration: "2023"
        },
    ]
}

const skills = {
    title: "My Skills",
    description: 'Lorem ipsum dolor set',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
    ]
}

const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-8'
        >
            <div className='container mx-auto'>
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-5">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className=' w-full'>
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>
                                                        {item.duration}
                                                    </span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px text-center lg:text-left]'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>
                                                        {item.duration}
                                                    </span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px text-center lg:text-left]'>{item.degree}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skills.description}
                                    </p>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:[30px]'>
                                        {skills.skillList.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {about.description}
                                </p>

                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className='flex  justify-center items-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>
                                                    {item.fieldName}
                                                </span>
                                                <span className='text-xl'>
                                                    {item.fieldValue}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
