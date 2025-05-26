"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function FeaturedEvents() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for workshops, conferences, and networking events
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            {
              title: "Tech Innovation Summit 2024",
              date: "March 15, 2024",
              time: "9:00 AM - 5:00 PM",
              location: "University Main Auditorium",
              description:
                "Annual summit bringing together industry leaders, researchers, and students.",
            },
            {
              title: "AI & Machine Learning Workshop",
              date: "March 22, 2024",
              time: "2:00 PM - 6:00 PM",
              location: "Computer Science Building",
              description:
                "Hands-on workshop covering the latest in AI and ML technologies.",
            },
          ].map((event, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {event.title}
                      </CardTitle>
                      <div className="text-blue-600 font-semibold mb-1">
                        {event.date}
                      </div>
                      <div className="text-gray-600 text-sm">{event.time}</div>
                      <div className="text-gray-600 text-sm">
                        {event.location}
                      </div>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Button size="lg" variant="outline">
            <Link href="/events" className="flex items-center">
              View All Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
