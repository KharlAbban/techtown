"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Innovation Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover groundbreaking research and student initiatives that are
            shaping the future of technology and our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Powered Smart City Platform",
              description:
                "Developing intelligent urban solutions using machine learning and IoT sensors to optimize city operations.",
              category: "Research",
              image: "/images/placeholder.svg?height=300&width=400",
              tags: ["AI", "IoT", "Smart City"],
            },
            {
              title: "Sustainable Energy Management System",
              description:
                "Student-led project creating renewable energy optimization algorithms for campus buildings.",
              category: "Student Project",
              image: "/images/placeholder.svg?height=300&width=400",
              tags: ["Sustainability", "Energy", "Algorithms"],
            },
            {
              title: "Healthcare Data Analytics Platform",
              description:
                "Collaborative research improving patient outcomes through advanced data insights and predictive modeling.",
              category: "Faculty Research",
              image: "/images/placeholder.svg?height=300&width=400",
              tags: ["Healthcare", "Data Science", "Analytics"],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/images/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-blue-50 hover:border-blue-200"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
            <Link href="/projects" className="flex items-center">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
