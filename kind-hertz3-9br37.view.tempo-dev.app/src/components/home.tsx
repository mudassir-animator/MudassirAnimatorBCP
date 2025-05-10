import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import PortfolioGallery from "./PortfolioGallery";
import ContactSection from "./ContactSection";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  ChevronRight,
  Briefcase,
  GraduationCap,
  Code,
  Palette,
  Video,
  Box,
  Users,
  Layers,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home = () => {
  return (
    (<div
      className="min-h-screen bg-white tempo-fea9fdee-9356-5979-979f-6070c3e83d29"
      tempoelementid="tempo-fea9fdee-9356-5979-979f-6070c3e83d29">
      {/* Hero Section */}
      <section
        id="hero"
        className="bg-white tempo-0194d9e7-51e9-5094-a70e-f9d6550ae538"
        tempoelementid="tempo-0194d9e7-51e9-5094-a70e-f9d6550ae538">
        <HeroSection
          tempoelementid="tempo-a2ad2c5c-98bc-5910-98b3-e2a49d2887fc"
          className="tempo-a2ad2c5c-98bc-5910-98b3-e2a49d2887fc" />
      </section>
      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 tempo-310a5657-7b50-5d82-b93f-6ea4a7a8009b"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        tempoelementid="tempo-310a5657-7b50-5d82-b93f-6ea4a7a8009b">
        <div
          className="container mx-auto max-w-6xl tempo-b5e29fd8-dd65-5602-9468-bc3a675026b0"
          tempoelementid="tempo-b5e29fd8-dd65-5602-9468-bc3a675026b0">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center tempo-7ca07ea9-305f-50ff-9166-16d2715f37ed"
            tempoelementid="tempo-7ca07ea9-305f-50ff-9166-16d2715f37ed">
            About Me
          </h2>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 tempo-42de7eb2-6383-5447-8f8f-37398e05d44d"
            tempoelementid="tempo-42de7eb2-6383-5447-8f8f-37398e05d44d">
            <div
              tempoelementid="tempo-2b7db4da-8da5-58e7-b0b4-af202cf9e43b"
              className="tempo-2b7db4da-8da5-58e7-b0b4-af202cf9e43b">
              <p
                className="text-lg mb-6 text-gray-700 tempo-e3710d43-14ba-520b-a186-4ce2e061c856"
                tempoelementid="tempo-e3710d43-14ba-520b-a186-4ce2e061c856">
                I'm a Islamabad-based creative with 7+ years of experience in
                delivering high-quality graphic design, 3D modeling, animation,
                and visual storytelling. I specialize in creating visually
                stunning and purposeful content for brands, agencies, and
                individuals.
              </p>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 tempo-367b19c6-7bdb-5f16-8340-02218ae99640"
                tempoelementid="tempo-367b19c6-7bdb-5f16-8340-02218ae99640">
                <div
                  tempoelementid="tempo-2cd3199b-3c8a-5077-b7e8-d7fcb96208be"
                  className="tempo-2cd3199b-3c8a-5077-b7e8-d7fcb96208be">
                  <h4
                    className="font-medium text-gray-900 mb-1 tempo-bc00e333-0f0c-588d-b2d0-edd8aec1f63f"
                    tempoelementid="tempo-bc00e333-0f0c-588d-b2d0-edd8aec1f63f">Name:</h4>
                  <p
                    className="text-gray-700 tempo-f1aab32b-271a-5187-a1b5-b5fa2aadbc2f"
                    tempoelementid="tempo-f1aab32b-271a-5187-a1b5-b5fa2aadbc2f">Mudassir Ahmed</p>
                </div>
                <div
                  tempoelementid="tempo-9c624187-7349-55cc-9b34-ff969a2cd60a"
                  className="tempo-9c624187-7349-55cc-9b34-ff969a2cd60a">
                  <h4
                    className="font-medium text-gray-900 mb-1 tempo-d5899a75-d174-5d6e-beb8-9731470daeb6"
                    tempoelementid="tempo-d5899a75-d174-5d6e-beb8-9731470daeb6">Email:</h4>
                  <p
                    className="text-gray-700 tempo-de357e3e-08d3-56f8-9570-b409baeba1c7"
                    tempoelementid="tempo-de357e3e-08d3-56f8-9570-b409baeba1c7">mudassiranimator92@gmail.com</p>
                </div>
                <div
                  tempoelementid="tempo-199222d7-df27-54a4-862e-a2cdadb8d12f"
                  className="tempo-199222d7-df27-54a4-862e-a2cdadb8d12f">
                  <h4
                    className="font-medium text-gray-900 mb-1 tempo-6e0d26a4-72e1-51ed-9815-ae7afb9290a4"
                    tempoelementid="tempo-6e0d26a4-72e1-51ed-9815-ae7afb9290a4">Location:</h4>
                  <p
                    className="text-gray-700 tempo-86c8f04b-f8b6-5d2a-b5f3-d82ff87e7734"
                    tempoelementid="tempo-86c8f04b-f8b6-5d2a-b5f3-d82ff87e7734">Islamabad, Pakistan</p>
                </div>
                <div
                  tempoelementid="tempo-a1d0f277-7256-5790-b5ca-174521b1f805"
                  className="tempo-a1d0f277-7256-5790-b5ca-174521b1f805">
                  <h4
                    className="font-medium text-gray-900 mb-1 tempo-10b95350-90c0-59ec-bc62-70504371c089"
                    tempoelementid="tempo-10b95350-90c0-59ec-bc62-70504371c089">Freelance:</h4>
                  <p
                    className="text-gray-700 tempo-a7799954-bfa8-55a8-a79f-affb3b504ca7"
                    tempoelementid="tempo-a7799954-bfa8-55a8-a79f-affb3b504ca7">Available</p>
                </div>
                <div
                  tempoelementid="tempo-67c628b3-0179-5480-a989-4f8549704ce0"
                  className="tempo-67c628b3-0179-5480-a989-4f8549704ce0">
                  <h4
                    className="font-medium text-gray-900 mb-1 tempo-f112c7db-ee88-5dea-bd96-71997e93d87c"
                    tempoelementid="tempo-f112c7db-ee88-5dea-bd96-71997e93d87c">Languages:</h4>
                  <p
                    className="text-gray-700 tempo-01cb2a34-83a1-5654-8de2-3b4897859ed9"
                    tempoelementid="tempo-01cb2a34-83a1-5654-8de2-3b4897859ed9">English, Urdu</p>
                </div>
              </div>
            </div>

            <div
              tempoelementid="tempo-b0273d35-e72b-5306-ab54-d3ccaa964a39"
              className="tempo-b0273d35-e72b-5306-ab54-d3ccaa964a39">
              <h3
                className="text-xl font-semibold mb-4 tempo-c7eb73f6-82d8-5dbe-8d70-4160d3a3462d"
                tempoelementid="tempo-c7eb73f6-82d8-5dbe-8d70-4160d3a3462d">Tools & Skills</h3>
              <div
                className="flex flex-wrap gap-2 tempo-15ad59aa-f856-5d17-93ff-8d0e29e68a39"
                tempoelementid="tempo-15ad59aa-f856-5d17-93ff-8d0e29e68a39">
                {[
                  "Blender",
                  "Photoshop",
                  "Illustrator",
                  "After Effects",
                  "iClone",
                  "Wondershare Filmora",
                  "Zbrush",
                  "Character Creator",
                  "Daz Studio",
                  "Create Studio",
                  "Cartoon Animator",
                ].map((tool) => (
                  <Badge
                    key={tool}
                    variant="outline"
                    className="bg-white py-1.5 px-3 text-sm tempo-b1dc0a00-dcfe-5f2f-9d92-d2b536f68229"
                    tempoelementid="tempo-b1dc0a00-dcfe-5f2f-9d92-d2b536f68229">
                    {tool}
                  </Badge>
                ))}
              </div>

              <div
                className="mt-8 tempo-df9f2875-6a20-5614-a286-45e6db657588"
                tempoelementid="tempo-df9f2875-6a20-5614-a286-45e6db657588">
                <Button
                  className="bg-purple-700 hover:bg-purple-800 tempo-2cea20b0-a59f-5a55-b950-76a21e633fc3"
                  tempoelementid="tempo-2cea20b0-a59f-5a55-b950-76a21e633fc3">
                  <a
                    href="https://drive.google.com/file/d/12mdeotWHr5HYALV0IDESlLYGu-oeMRBm/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center tempo-76974ce4-e549-570f-b8d3-05f7c41515fe"
                    tempoelementid="tempo-76974ce4-e549-570f-b8d3-05f7c41515fe">
                    <span
                      className="flex items-center tempo-0fb6a0a7-0dd4-5bcf-815c-f91ed5669864"
                      tempoelementid="tempo-0fb6a0a7-0dd4-5bcf-815c-f91ed5669864">
                      Download CV <ChevronRight
                      className="ml-2 h-4 w-4 tempo-0b5b1d4f-68b1-5675-b396-0bdddf0673d2"
                      tempoelementid="tempo-0b5b1d4f-68b1-5675-b396-0bdddf0673d2" />
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 px-4 md:px-8 lg:px-16 bg-white tempo-e1c00fc1-0315-56b9-9c0f-6eecccaa4804"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        tempoelementid="tempo-e1c00fc1-0315-56b9-9c0f-6eecccaa4804">
        <div
          className="container mx-auto max-w-6xl tempo-19584b9c-a5cf-52f0-b928-c39c7f299d45"
          tempoelementid="tempo-19584b9c-a5cf-52f0-b928-c39c7f299d45">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center tempo-4c7d27cc-1342-5f05-8014-89d28857776a"
            tempoelementid="tempo-4c7d27cc-1342-5f05-8014-89d28857776a">
            My Services
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 tempo-89f8e961-ccca-5a68-bddd-78e4b4b683db"
            tempoelementid="tempo-89f8e961-ccca-5a68-bddd-78e4b4b683db">
            {[
              {
                title: "3D Modeling",
                description:
                  "Characters, Products, Cartoon models with high attention to detail and realism.",
                icon: <Box
                  className="h-10 w-10 text-purple-600 tempo-81e645f8-2836-59c8-a803-712d650292ee"
                  tempoelementid="tempo-81e645f8-2836-59c8-a803-712d650292ee" />,
              },
              {
                title: "Motion Graphics",
                description:
                  "Logo animations, Explainer Videos, and dynamic visual content for your brand.",
                icon: <Video
                  className="h-10 w-10 text-purple-600 tempo-2f202416-6719-597f-a3a2-f7207b4468de"
                  tempoelementid="tempo-2f202416-6719-597f-a3a2-f7207b4468de" />,
              },
              {
                title: "Video Editing",
                description:
                  "Social Media Reels, Commercials, and professional video content creation.",
                icon: <Video
                  className="h-10 w-10 text-purple-600 tempo-5e25383f-29be-52dc-bc45-04e1c5c0ace9"
                  tempoelementid="tempo-5e25383f-29be-52dc-bc45-04e1c5c0ace9" />,
              },
              {
                title: "Graphic Design",
                description:
                  "Posters, Banners, Branding, Packaging with modern and eye-catching aesthetics.",
                icon: <Palette
                  className="h-10 w-10 text-purple-600 tempo-37582fee-87fd-5a5e-8f15-2ff5995b5681"
                  tempoelementid="tempo-37582fee-87fd-5a5e-8f15-2ff5995b5681" />,
              },
              {
                title: "Character Animation",
                description:
                  "Lip sync, Expressions, Rigging for lifelike character movements and interactions.",
                icon: <Users
                  className="h-10 w-10 text-purple-600 tempo-adcb81de-5933-57ac-9bf3-b8a2f9b37457"
                  tempoelementid="tempo-adcb81de-5933-57ac-9bf3-b8a2f9b37457" />,
              },
              {
                title: "NFT/Metaverse Design",
                description:
                  "High-poly & Low-poly assets optimized for digital ownership and virtual worlds.",
                icon: <Layers
                  className="h-10 w-10 text-purple-600 tempo-52f2e06e-f3c9-5145-9c48-11284dbc5a0d"
                  tempoelementid="tempo-52f2e06e-f3c9-5145-9c48-11284dbc5a0d" />,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                tempoelementid="tempo-c9859b32-5af2-54e5-bf2b-ebd72e81553d"
                className="tempo-c9859b32-5af2-54e5-bf2b-ebd72e81553d">
                <Card
                  className="h-full hover:shadow-md transition-shadow duration-300 tempo-b440d4c8-6e61-52be-893f-9c1f1b9cd3c6"
                  tempoelementid="tempo-b440d4c8-6e61-52be-893f-9c1f1b9cd3c6">
                  <CardContent
                    className="p-6 flex flex-col items-center text-center tempo-4d9b077a-b947-52d8-97ba-4cbc9392fc7a"
                    tempoelementid="tempo-4d9b077a-b947-52d8-97ba-4cbc9392fc7a">
                    <div
                      className="mb-4 p-3 rounded-full bg-purple-100 tempo-ec822c44-c1ca-54a7-8b39-fb27b18c3c57"
                      tempoelementid="tempo-ec822c44-c1ca-54a7-8b39-fb27b18c3c57">
                      {service.icon}
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2 tempo-ac9919cc-1741-563c-8777-cef53209adfb"
                      tempoelementid="tempo-ac9919cc-1741-563c-8777-cef53209adfb">
                      {service.title}
                    </h3>
                    <p
                      className="text-gray-600 tempo-b8fa4bcf-a8ad-54e3-b09b-6d178ffe8822"
                      tempoelementid="tempo-b8fa4bcf-a8ad-54e3-b09b-6d178ffe8822">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 tempo-83a80605-a401-5795-93ef-83fbfcf95e0b"
        tempoelementid="tempo-83a80605-a401-5795-93ef-83fbfcf95e0b">
        <div
          className="container mx-auto max-w-6xl tempo-457b1469-c4e5-5f5a-bc60-629f6963360b"
          tempoelementid="tempo-457b1469-c4e5-5f5a-bc60-629f6963360b">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center tempo-5e39c339-9f74-5da8-82ce-36b0bdb971d9"
            tempoelementid="tempo-5e39c339-9f74-5da8-82ce-36b0bdb971d9">
            Portfolio Highlights
          </h2>
          <PortfolioGallery
            tempoelementid="tempo-04dabfec-c2cd-5670-a76b-0480c2bbfd8a"
            className="tempo-04dabfec-c2cd-5670-a76b-0480c2bbfd8a" />
        </div>
      </section>
      {/* Resume Section */}
      <motion.section
        id="resume"
        className="py-20 px-4 md:px-8 lg:px-16 bg-white tempo-4ae7ebed-4c69-5215-8e49-a6899c00bd6a"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        tempoelementid="tempo-4ae7ebed-4c69-5215-8e49-a6899c00bd6a">
        <div
          className="container mx-auto max-w-6xl tempo-eaf25cbf-9f5f-5723-abf9-c931d8a3acdf"
          tempoelementid="tempo-eaf25cbf-9f5f-5723-abf9-c931d8a3acdf">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center tempo-b79e293e-ab7d-54ff-a0c0-2be802916dd2"
            tempoelementid="tempo-b79e293e-ab7d-54ff-a0c0-2be802916dd2">
            Resume
          </h2>

          <Tabs
            defaultValue="experience"
            className="w-full tempo-8ffc612e-3f91-5435-b9b9-c8c8a23a1fb4"
            tempoelementid="tempo-8ffc612e-3f91-5435-b9b9-c8c8a23a1fb4">
            <TabsList
              className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 tempo-df6809eb-6e3e-5394-9e4d-f852cf5c6ac7"
              tempoelementid="tempo-df6809eb-6e3e-5394-9e4d-f852cf5c6ac7">
              <TabsTrigger
                value="experience"
                className="text-base tempo-75478d4d-80d1-5f69-8f89-a6fe3963116a"
                tempoelementid="tempo-75478d4d-80d1-5f69-8f89-a6fe3963116a">
                <Briefcase
                  className="mr-2 h-4 w-4 tempo-c316a143-c27a-5357-b2ce-0d56742c299b"
                  tempoelementid="tempo-c316a143-c27a-5357-b2ce-0d56742c299b" /> Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="text-base tempo-145d511d-db5e-5a35-bb1a-67286e576720"
                tempoelementid="tempo-145d511d-db5e-5a35-bb1a-67286e576720">
                <GraduationCap
                  className="mr-2 h-4 w-4 tempo-3b36611a-177e-554d-a7d3-f376785fc815"
                  tempoelementid="tempo-3b36611a-177e-554d-a7d3-f376785fc815" /> Education
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="experience"
              className="mt-6 tempo-ea95c4f1-0a3c-5dd5-a262-2a41eb47db69"
              tempoelementid="tempo-ea95c4f1-0a3c-5dd5-a262-2a41eb47db69">
              <div
                className="space-y-8 tempo-a1a09307-55eb-507e-9a55-00c4a4b62896"
                tempoelementid="tempo-a1a09307-55eb-507e-9a55-00c4a4b62896">
                <div
                  className="relative pl-8 border-l-2 border-purple-200 pb-8 tempo-a296f90d-e256-539a-8a62-9eb1236717c9"
                  tempoelementid="tempo-a296f90d-e256-539a-8a62-9eb1236717c9">
                  <div
                    className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600 tempo-7d13ac85-b590-5b8e-9f26-df4bad39d7f1"
                    tempoelementid="tempo-7d13ac85-b590-5b8e-9f26-df4bad39d7f1"></div>
                  <h3
                    className="text-xl font-semibold tempo-eeef7cb9-eac7-592e-a5b5-fcfbf8930465"
                    tempoelementid="tempo-eeef7cb9-eac7-592e-a5b5-fcfbf8930465">3D Artist</h3>
                  <p
                    className="text-purple-700 font-medium tempo-4704d99a-d913-5dc5-8427-29ff02422ba9"
                    tempoelementid="tempo-4704d99a-d913-5dc5-8427-29ff02422ba9">
                    BILAL CREATION PRODUCTION
                  </p>
                  <p
                    className="text-gray-500 text-sm mb-2 tempo-d8c3ee2e-8af0-57da-afa8-77f72db1e0fa"
                    tempoelementid="tempo-d8c3ee2e-8af0-57da-afa8-77f72db1e0fa">2017 - Present</p>
                  <p
                    className="text-gray-700 tempo-f0843efb-db43-5081-a9fa-41ce09d4eb04"
                    tempoelementid="tempo-f0843efb-db43-5081-a9fa-41ce09d4eb04">
                    Creating 3D models, animations, and visual assets for
                    various client projects.
                  </p>
                </div>

                <div
                  className="relative pl-8 border-l-2 border-purple-200 pb-8 tempo-03e54696-e3c5-51a8-8067-8d184f63541a"
                  tempoelementid="tempo-03e54696-e3c5-51a8-8067-8d184f63541a">
                  <div
                    className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600 tempo-50879b5d-d96c-5898-bd13-050cf37b261c"
                    tempoelementid="tempo-50879b5d-d96c-5898-bd13-050cf37b261c"></div>
                  <h3
                    className="text-xl font-semibold tempo-c3134b81-2e76-5f03-85a0-7571e0fffd0c"
                    tempoelementid="tempo-c3134b81-2e76-5f03-85a0-7571e0fffd0c">Graphic Designer</h3>
                  <p
                    className="text-purple-700 font-medium tempo-a88fd6d6-b7d0-5f49-8c73-0689dd346ce3"
                    tempoelementid="tempo-a88fd6d6-b7d0-5f49-8c73-0689dd346ce3">
                    FAJ IT Solutions
                  </p>
                  <p
                    className="text-gray-500 text-sm mb-2 tempo-5a8eccc0-df22-5a2a-8a61-8d7f5adbf532"
                    tempoelementid="tempo-5a8eccc0-df22-5a2a-8a61-8d7f5adbf532">2024 - 2025</p>
                  <p
                    className="text-gray-700 tempo-437b8e92-45c1-5a12-8716-1339bd67b86d"
                    tempoelementid="tempo-437b8e92-45c1-5a12-8716-1339bd67b86d">
                    Developing brand identities, marketing materials, and
                    digital assets.
                  </p>
                </div>

                <div
                  className="relative pl-8 border-l-2 border-purple-200 tempo-dca66ef6-c235-5e0b-bf4e-c58fa2f46bdf"
                  tempoelementid="tempo-dca66ef6-c235-5e0b-bf4e-c58fa2f46bdf">
                  <div
                    className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600 tempo-ed2a5975-686a-58bb-b7fe-15e236d38f72"
                    tempoelementid="tempo-ed2a5975-686a-58bb-b7fe-15e236d38f72"></div>
                  <h3
                    className="text-xl font-semibold tempo-b69cc3c9-dc79-5753-ad90-3f8dba89a0f5"
                    tempoelementid="tempo-b69cc3c9-dc79-5753-ad90-3f8dba89a0f5">Freelance</h3>
                  <p
                    className="text-purple-700 font-medium tempo-d2dae059-4efb-5b2e-8ba8-e5ac94c8e8b9"
                    tempoelementid="tempo-d2dae059-4efb-5b2e-8ba8-e5ac94c8e8b9">Fiverr</p>
                  <p
                    className="text-gray-500 text-sm mb-2 tempo-56f3db2c-76c5-5b31-bd4a-8e6ae16187d3"
                    tempoelementid="tempo-56f3db2c-76c5-5b31-bd4a-8e6ae16187d3">2017 - Present</p>
                  <p
                    className="text-gray-700 tempo-be362a64-2280-5426-b525-c4e9520954f9"
                    tempoelementid="tempo-be362a64-2280-5426-b525-c4e9520954f9">
                    Working with global clients on various design and 3D
                    modeling projects.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="education"
              className="mt-6 tempo-01515cf9-c7a5-57e2-8d35-eff690e2f678"
              tempoelementid="tempo-01515cf9-c7a5-57e2-8d35-eff690e2f678">
              <div
                className="space-y-8 tempo-00a38c2b-6afe-5612-a293-f68a80bfcfd1"
                tempoelementid="tempo-00a38c2b-6afe-5612-a293-f68a80bfcfd1">
                <div
                  className="relative pl-8 border-l-2 border-purple-200 pb-8 tempo-7d1b56cd-a437-5b3d-99ad-23958ac82cb0"
                  tempoelementid="tempo-7d1b56cd-a437-5b3d-99ad-23958ac82cb0">
                  <div
                    className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600 tempo-f78842a6-e0be-56d3-8c8d-b8077ebdd2b6"
                    tempoelementid="tempo-f78842a6-e0be-56d3-8c8d-b8077ebdd2b6"></div>
                  <h3
                    className="text-xl font-semibold tempo-5b3eb6e7-48a5-5a58-8b35-8a9aad99fcc0"
                    tempoelementid="tempo-5b3eb6e7-48a5-5a58-8b35-8a9aad99fcc0">
                    Intermediate in Computer Science
                  </h3>
                  <p
                    className="text-purple-700 font-medium tempo-9417fae4-b0ef-5558-9a0a-112b4dfd13a4"
                    tempoelementid="tempo-9417fae4-b0ef-5558-9a0a-112b4dfd13a4">
                    BAHRIA COLLEGE KARSAZ
                  </p>
                  <p
                    className="text-gray-500 text-sm mb-2 tempo-5d49c1d7-03c5-5387-a48c-e0b364ccbd97"
                    tempoelementid="tempo-5d49c1d7-03c5-5387-a48c-e0b364ccbd97">Completed</p>
                </div>

                <div
                  className="relative pl-8 border-l-2 border-purple-200 tempo-b254e6be-90b7-51bf-8653-43a9c3533fef"
                  tempoelementid="tempo-b254e6be-90b7-51bf-8653-43a9c3533fef">
                  <div
                    className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600 tempo-512c4581-30a9-5146-8cff-3fdc251e6df9"
                    tempoelementid="tempo-512c4581-30a9-5146-8cff-3fdc251e6df9"></div>
                  <h3
                    className="text-xl font-semibold tempo-0812b289-d784-534c-abd3-43944f49845a"
                    tempoelementid="tempo-0812b289-d784-534c-abd3-43944f49845a">
                    Matriculation in Computer Science
                  </h3>
                  <p
                    className="text-purple-700 font-medium tempo-959631fb-d47d-5f8c-bc75-b390e93419b4"
                    tempoelementid="tempo-959631fb-d47d-5f8c-bc75-b390e93419b4">
                    WESTMINSTER PRIVATE SCHOOL
                  </p>
                  <p
                    className="text-gray-500 text-sm mb-2 tempo-4172813d-926f-5fdf-8875-dc8c1170b55b"
                    tempoelementid="tempo-4172813d-926f-5fdf-8875-dc8c1170b55b">Completed</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>
      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 tempo-d0e6eba4-e170-5807-a0c3-9e4891f1c0c5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        tempoelementid="tempo-d0e6eba4-e170-5807-a0c3-9e4891f1c0c5">
        <div
          className="container mx-auto max-w-6xl tempo-093183d6-ef05-59b0-8d94-761b6a28e9c7"
          tempoelementid="tempo-093183d6-ef05-59b0-8d94-761b6a28e9c7">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center tempo-749513b7-1f68-5ab3-b45f-0a8145316987"
            tempoelementid="tempo-749513b7-1f68-5ab3-b45f-0a8145316987">
            Client Feedback
          </h2>

          <Carousel
            className="w-full max-w-4xl mx-auto tempo-dcfc7156-4a16-5956-b22f-e046d87e5170"
            tempoelementid="tempo-dcfc7156-4a16-5956-b22f-e046d87e5170">
            <CarouselContent
              tempoelementid="tempo-e912cfa6-a3f8-5487-8e65-6692e35dfc6f"
              className="tempo-e912cfa6-a3f8-5487-8e65-6692e35dfc6f">
              {[
                {
                  quote:
                    "Mudassir delivered exceptional 3D models that exceeded our expectations. His attention to detail and creativity brought our vision to life perfectly.",
                  name: "Sarah Johnson",
                  company: "Creative Director, DesignHub",
                  avatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
                },
                {
                  quote:
                    "Working with Mudassir was a pleasure. He understood our requirements quickly and delivered high-quality graphics that perfectly matched our brand identity.",
                  name: "Michael Chen",
                  company: "Marketing Manager, TechSolutions",
                  avatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
                },
                {
                  quote:
                    "The animation work Mudassir created for our product launch was outstanding. Professional, timely, and incredibly creative. Highly recommended!",
                  name: "Aisha Khan",
                  company: "Product Lead, InnovateX",
                  avatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
                },
              ].map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  tempoelementid="tempo-e6779d75-6cc5-588e-b333-589616f31e7e"
                  className="tempo-e6779d75-6cc5-588e-b333-589616f31e7e">
                  <Card
                    className="border-none shadow-sm bg-white tempo-a1969821-4b92-5b15-9f1d-19918c866bbf"
                    tempoelementid="tempo-a1969821-4b92-5b15-9f1d-19918c866bbf">
                    <CardContent
                      className="p-8 tempo-b72ba49c-e813-5be1-9ffd-0579edcbc4cb"
                      tempoelementid="tempo-b72ba49c-e813-5be1-9ffd-0579edcbc4cb">
                      <div
                        className="flex flex-col items-center text-center tempo-f7f7e03d-ea60-5558-a29c-480929f70b2f"
                        tempoelementid="tempo-f7f7e03d-ea60-5558-a29c-480929f70b2f">
                        <div
                          className="mb-6 tempo-79306a45-cb81-50cc-85cc-f40aeaf1128c"
                          tempoelementid="tempo-79306a45-cb81-50cc-85cc-f40aeaf1128c">
                          <Avatar
                            className="h-16 w-16 border-2 border-purple-200 tempo-f90b6c5c-495a-5f1a-a24c-e5d92070464b"
                            tempoelementid="tempo-f90b6c5c-495a-5f1a-a24c-e5d92070464b">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              tempoelementid="tempo-2ac9d205-5277-54b7-bc06-2b21e27ec72c"
                              className="tempo-2ac9d205-5277-54b7-bc06-2b21e27ec72c" />
                            <AvatarFallback
                              tempoelementid="tempo-b7f08d07-73d7-5bd0-a0fb-7567cacd8186"
                              className="tempo-b7f08d07-73d7-5bd0-a0fb-7567cacd8186">
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <p
                          className="text-gray-700 italic mb-6 tempo-2cf2cc5c-1b87-5154-a83f-a808272ed1ed"
                          tempoelementid="tempo-2cf2cc5c-1b87-5154-a83f-a808272ed1ed">
                          "{testimonial.quote}"
                        </p>
                        <h4
                          className="font-semibold text-lg tempo-8106c167-2206-52c4-85b0-051a0d928e7f"
                          tempoelementid="tempo-8106c167-2206-52c4-85b0-051a0d928e7f">
                          {testimonial.name}
                        </h4>
                        <p
                          className="text-gray-500 tempo-3b1b67ef-25fc-5371-b750-b58ec098c8c2"
                          tempoelementid="tempo-3b1b67ef-25fc-5371-b750-b58ec098c8c2">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div
              className="flex justify-center mt-4 gap-2 tempo-4750b714-0792-5c0b-90ac-1740da393eb0"
              tempoelementid="tempo-4750b714-0792-5c0b-90ac-1740da393eb0">
              <CarouselPrevious
                className="relative static tempo-e48d0941-4e86-5426-9ce5-3387f5488de6"
                tempoelementid="tempo-e48d0941-4e86-5426-9ce5-3387f5488de6" />
              <CarouselNext
                className="relative static tempo-559eb176-5434-5132-a28b-fbfdab490708"
                tempoelementid="tempo-559eb176-5434-5132-a28b-fbfdab490708" />
            </div>
          </Carousel>
        </div>
      </motion.section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 md:px-8 lg:px-16 bg-white tempo-0f648bff-cce3-529d-bd5e-a9a2b9aa2c8f"
        tempoelementid="tempo-0f648bff-cce3-529d-bd5e-a9a2b9aa2c8f">
        <div
          className="container mx-auto max-w-6xl tempo-ecdfc0d3-9f41-5441-8f2e-2c0cad7e9dd7"
          tempoelementid="tempo-ecdfc0d3-9f41-5441-8f2e-2c0cad7e9dd7">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center tempo-ac1db434-fce2-5687-9959-e9bba213b671"
            tempoelementid="tempo-ac1db434-fce2-5687-9959-e9bba213b671">
            Contact Me
          </h2>
          <ContactSection
            socialLinks={{
              linkedin: "https://www.linkedin.com/in/mudassir-ahmed-929195276/",
              behance: "https://www.behance.net/mudassianimato",
              instagram: "https://instagram.com",
              youtube: "https://www.youtube.com/@BilalCreation",
            }}
            tempoelementid="tempo-0b239aab-4ef0-5324-a1a2-f2123a7da578"
            className="tempo-0b239aab-4ef0-5324-a1a2-f2123a7da578" />
        </div>
      </section>
      {/* Footer */}
      <footer
        className="py-8 px-4 bg-gray-900 text-white text-center tempo-5fc3d635-3a91-5b64-a207-1f47d5c9f7f9"
        tempoelementid="tempo-5fc3d635-3a91-5b64-a207-1f47d5c9f7f9">
        <div
          className="container mx-auto tempo-bf0df937-208f-516c-8bae-098c85730386"
          tempoelementid="tempo-bf0df937-208f-516c-8bae-098c85730386">
          <p
            tempoelementid="tempo-ea340bfb-8359-5b9f-a705-d5c661806806"
            className="tempo-ea340bfb-8359-5b9f-a705-d5c661806806">
            © {new Date().getFullYear()} Mudassir Ahmed. All rights reserved.
          </p>
        </div>
      </footer>
    </div>)
  );
};

export default Home;
