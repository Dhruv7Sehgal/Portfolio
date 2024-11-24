"use client";

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <>
      <main className="grid grid-rows-2 w-full">
        {/* Section: Our Story */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-3 text-center">
              {/* Animated Heading */}
              <motion.h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Our Story
              </motion.h2>
              <motion.p
                className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Acme Inc. was founded in 2010 with the goal of revolutionizing
                the way businesses approach technology. Over the years, we've
                grown into a leading provider of innovative solutions that help
                our clients thrive in a rapidly changing digital landscape.
              </motion.p>
            </div>

            {/* Timeline Section with Animation */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
              {[
                {
                  year: "2010",
                  icon: <CalendarDaysIcon />,
                  text: "Acme Inc. was founded with a mission to empower businesses through innovative technology.",
                },
                {
                  year: "2015",
                  icon: <RocketIcon />,
                  text: "We launched our flagship product, revolutionizing the way businesses approach digital transformation.",
                },
                {
                  year: "2020",
                  icon: <UsersIcon />,
                  text: "Our customer base grew to over 10,000 businesses across multiple industries.",
                },
                {
                  year: "2022",
                  icon: <AwardIcon />,
                  text: "Acme Inc. was recognized as one of the top technology companies in the industry.",
                },
              ].map((item, index) => (
                <motion.div
                  className="flex flex-col items-center justify-center space-y-3 text-center"
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <div>{item.icon}</div>
                  <h4 className="text-lg font-medium">{item.year}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Meet Our Team */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-3 text-center">
              {/* Animated Heading */}
              <motion.h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Meet Our Team
              </motion.h2>
              <motion.p
                className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our team of dedicated professionals is the backbone of Acme Inc.
                Get to know the individuals who make our company great.
              </motion.p>
            </div>

            {/* Team Member Cards with Animation */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
              {[
                {
                  name: "Dhruv Sehgal",
                  title: "CEO & Co-Founder",
                  description:
                    "Dhruv is a visionary leader with a passion for driving innovation and growth.",
                  initials: "DS",
                },
                {
                  name: "Ojusvi Wadhwa",
                  title: "CTO & Co-Founder",
                  description:
                    "Ojusvi is a technical visionary who leads our engineering team with expertise and innovation.",
                  initials: "OW",
                },
                {
                  name: "Hamid Hussian Siddqui",
                  title: "Head of Marketing",
                  description:
                    "Hamid is a marketing strategist who drives our brand and customer engagement.",
                  initials: "HHS",
                },
                {
                  name: "Vasu Singhal",
                  title: "Head of Sales",
                  description:
                    "Vasu is a sales leader who helps our clients achieve their business goals.",
                  initials: "VS",
                },
              ].map((member, index) => (
                <motion.div
                  className="flex flex-col items-center justify-center space-y-3 text-center"
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <Avatar className="h-20 w-20">
                    <AvatarImage
                      alt={member.name}
                      src="/placeholder-avatar.jpg"
                    />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-medium">{member.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {member.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Icon Components (same as before)

function AwardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function CalendarDaysIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
