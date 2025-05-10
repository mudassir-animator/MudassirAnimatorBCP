import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  category: string;
  tools: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
}

interface PortfolioGalleryProps {
  projects?: Project[];
}

const PortfolioGallery = ({ projects = [] }: PortfolioGalleryProps) => {
  const defaultProjects: Project[] = [
    {
      id: "1",
      title: "3D Realistic Character Modelling",
      category: "3d-Modeling",
      tools: "Blender, ZBrush, Character Creator, Daz Studio",
      description:
        "Detailed character model with high-poly sculpting and texturing",
      imageUrl:
        "https://media-hosting.imagekit.io/fd4f206dbe794ab5/posing-ezgif.com-video-to-webp-converter.webp?Expires=1841415266&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=m4nNAc~tHB04JqPoszLFK86VQhQ5Kx6g104kCM4tyuL5iUl-Xc3Ro1ENDdILLS6mRue42sLrR2r~Q7NXIv37tVYlpNmunQL9hsHHBqu5elSrkgdoJ34UJIdcegO3ShCKbKKaC7DIbwwQcBExlvD7ps8o8g~5miobbA1EdkL1O0~OXa5Cxqy4YVr9c16Z4cjTYMUtdYZ2gEqODpnEmfPknpK6G2SRl7yhIyTSC4AGyy00Xj11qDDq4amJcWiYscp3KjxqufNxZm29tdV3vnQU472DEmtS1rOGkN~Fs5UflWVThBDqPVBunJSD85TMriQ2DN41h7ZhN01ILoMyysmrTA__",
      projectUrl:
        "https://drive.google.com/drive/folders/19iwYkFXI019ncm0dpnKVtRLHaeUAyHGb?usp=drive_link",
    },
    {
      id: "2",
      title: "3D Product Modelling",
      category: "3d-Modeling",
      tools: "Blender, Zbrush",
      description: "Sleek product showcase with dynamic camera movements",
      imageUrl:
        "https://cdn.prod.website-files.com/634053de3cf351fe4c9ff01b/634053de3cf351a34a9ff54b_3D_visualization_process.gif",
      projectUrl:
        "https://drive.google.com/drive/folders/19iwYkFXI019ncm0dpnKVtRLHaeUAyHGb?usp=drive_link",
    },
    {
      id: "3",
      title: "Brand Identity Package",
      category: "Graphic-Design",
      tools: "Illustrator, Photoshop, Canva",
      description:
        "Complete visual identity including logo, colors, and typography",
      imageUrl:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmxiOHRzMGdveGIzd2p0d25tNzdxNGFtOTEzaWlwYXZlaGh6b3pieSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b40gBn8sl9A68QXRU8/giphy.gif",
      projectUrl:
        "https://drive.google.com/drive/folders/1K-TWdmxUdQoKDRz4htJF3Wud8zjz_WuU?usp=drive_link",
    },
    {
      id: "4",
      title: "Explainer Video",
      category: "Motion-Graphics",
      tools: "After Effects, Premiere Pro, Video Scribe",
      description: "Engaging animated explainer for a tech startup",
      imageUrl:
        "https://duttainnovations.com/wp-content/uploads/2024/01/DUTTA-INNOVATIONS-WHITEBOARD-VIDEO.gif",
      projectUrl: "https://youtu.be/yZLTmM8-LIs?si=OkLf2KRT4rWzrZBB",
    },
    {
      id: "5",
      title: "3D Animation",
      category: "3d-Modeling, 3d Animation",
      tools: "Blender, Iclone",
      description: "Detailed character model with animations",
      imageUrl:
        "https://media-hosting.imagekit.io/0ca1b49c9b0b436f/facialriggingcheck-ezgif.com-gif-to-webp-converter.webp?Expires=1841409781&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fFK57jkZwY5B8-ZBiyWVDubv-lV~eb4e5Y1VU5DegrnkJJ1iRYrOMijeiJsSf2f6xx4fkLn8kIVwhLec0uGi7WCKKv~k5E2xcOLu8r~aSH-57yVEO71AbxF9x2Zk85is7GgZxVoZOSrKwh9MN9uz9XJMTBZvdd170KO5vR5~KVlhl7AhDr1x82bOAAzYHMP~sckmrHxY-GdwWi7f~SqS3M9kR2jyAvgwNHX8peQlTCFus3SdOie9WYPkdFlwU~fUUSrqbB2k6saQRsbUfEK7Ch4DBPk40OgHyJnI8s9HM7uFq35kAe~MfPeWJD6OZoNHCclSSx9oOpKR7gaIqQUVOQ__",
      projectUrl:
        "https://www.youtube.com/watch?v=DSW3EQtAQXM&list=PLlzR0rI8r6vmVsqh25DnZsIh6XIf099sr&ab_channel=BilalCreationProduction",
    },
    {
      id: "6",
      title: "3d Sculpting",
      category: "3d-Modeling",
      tools: "Character Creator, Zbrush, Blender",
      description:
        "Expressive character modelling, sculpting, posing, lighting and texturing",
      imageUrl: "https://cdn.80.lv/api/upload/content/19/5d2885b6e4a97.gif",
      projectUrl:
        "https://drive.google.com/drive/folders/19iwYkFXI019ncm0dpnKVtRLHaeUAyHGb?usp=drive_link",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    (<section
      className="w-full py-16 px-4 md:px-8 bg-white tempo-939a10c0-b0d2-5ebc-8c0d-fe7c2a37c72b"
      id="portfolio"
      tempoelementid="tempo-939a10c0-b0d2-5ebc-8c0d-fe7c2a37c72b">
      <div
        className="max-w-7xl mx-auto tempo-e78fff3d-dc49-5eb9-b85e-dad0a7aebe48"
        tempoelementid="tempo-e78fff3d-dc49-5eb9-b85e-dad0a7aebe48">
        <div
          className="text-center mb-12 tempo-e8611bf9-8b23-5a94-931e-c683b8b7588d"
          tempoelementid="tempo-e8611bf9-8b23-5a94-931e-c683b8b7588d">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 tempo-d26f70d2-9bf7-5460-b1a0-93f9180880c2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            tempoelementid="tempo-d26f70d2-9bf7-5460-b1a0-93f9180880c2">
            My Portfolio
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto tempo-268aa788-5fb1-519d-bd35-eca4411c0d48"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            tempoelementid="tempo-268aa788-5fb1-519d-bd35-eca4411c0d48">
            Explore my recent projects showcasing expertise in 3D modeling,
            graphic design, and motion graphics.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 tempo-39b82771-ba74-59e9-b3ce-86cd48c8f307"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          tempoelementid="tempo-39b82771-ba74-59e9-b3ce-86cd48c8f307">
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tools={project.tools}
              description={project.description}
              image={project.imageUrl}
              projectUrl={project.projectUrl}
              tempoelementid="tempo-e42081ba-b9e0-514e-bdc5-9e6cf64d09cf"
              className="tempo-e42081ba-b9e0-514e-bdc5-9e6cf64d09cf" />
          ))}
        </motion.div>

        {displayProjects.length === 0 && (
          <div
            className="text-center py-12 tempo-3e265f1d-bed8-580e-9758-b4eb3cab8762"
            tempoelementid="tempo-3e265f1d-bed8-580e-9758-b4eb3cab8762">
            <p
              className="text-gray-500 tempo-cb66a52f-16bf-57c7-a420-7ea602d8a358"
              tempoelementid="tempo-cb66a52f-16bf-57c7-a420-7ea602d8a358">No projects found.</p>
          </div>
        )}

        <div
          className="text-center mt-12 tempo-bb0a0360-f4b6-595c-bd86-40b6b7fc11bc"
          tempoelementid="tempo-bb0a0360-f4b6-595c-bd86-40b6b7fc11bc">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors tempo-2b136d36-1f8a-53be-b927-1123725cc192"
            tempoelementid="tempo-2b136d36-1f8a-53be-b927-1123725cc192">
            Let's Work Together
          </a>
        </div>
      </div>
    </section>)
  );
};

export default PortfolioGallery;
