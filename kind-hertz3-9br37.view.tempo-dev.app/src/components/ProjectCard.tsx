import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  image: string;
  title: string;
  tools: string[];
  description: string;
  onViewProject?: () => void;
  projectUrl?: string;
}

const ProjectCard = ({
  image = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwebneel.com%2F3d-character-designs&psig=AOvVaw2oes5cmi6rnNUcFlG9rHIj&ust=1746877657542000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDok-6olo0DFQAAAAAdAAAAABAE",
  title = "3D Character Design",
  tools = ["Blender", "ZBrush"],
  description = "Detailed 3D character modeling with realistic textures and expressions.",
  onViewProject = () => console.log("View project clicked"),
  projectUrl,
}: ProjectCardProps) => {
  const toolsArray =
    typeof tools === "string"
      ? tools.split(",").map((tool) => tool.trim())
      : tools;

  return (
    (<motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full tempo-e3f40f90-510b-5fb0-9ce1-a8c04ffbb0b2"
      tempoelementid="tempo-e3f40f90-510b-5fb0-9ce1-a8c04ffbb0b2">
      <Card
        className="overflow-hidden h-full flex flex-col bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 tempo-f246eae2-1ce9-55f2-8e5a-b4bf8a70c522"
        tempoelementid="tempo-f246eae2-1ce9-55f2-8e5a-b4bf8a70c522">
        <div
          className="relative overflow-hidden aspect-[4/3] tempo-ca71e8a1-c9cd-5f96-b80f-f90a072daa9f"
          tempoelementid="tempo-ca71e8a1-c9cd-5f96-b80f-f90a072daa9f">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover tempo-f7bc201c-e37c-5d18-b032-8e37b042bfa9"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            tempoelementid="tempo-f7bc201c-e37c-5d18-b032-8e37b042bfa9" />
        </div>

        <CardContent
          className="flex-grow p-5 tempo-1246c471-1eea-502a-9c4a-213f989bc73d"
          tempoelementid="tempo-1246c471-1eea-502a-9c4a-213f989bc73d">
          <div
            className="flex flex-wrap gap-2 mb-3 tempo-4d5bf5b9-c739-5c68-9a31-db7085dbae59"
            tempoelementid="tempo-4d5bf5b9-c739-5c68-9a31-db7085dbae59">
            {toolsArray.map((tool, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-purple-100 text-purple-700 hover:bg-purple-200 tempo-b10bdf17-4cba-5f32-b644-53c68e1bf42b"
                tempoelementid="tempo-b10bdf17-4cba-5f32-b644-53c68e1bf42b">
                {tool}
              </Badge>
            ))}
          </div>

          <h3
            className="text-xl font-semibold text-gray-800 mb-2 tempo-cc030870-ba38-5a06-9779-2e2824091f60"
            tempoelementid="tempo-cc030870-ba38-5a06-9779-2e2824091f60">{title}</h3>
          <p
            className="text-gray-600 text-sm tempo-b4560e59-6338-5342-aa30-19828a7fc18c"
            tempoelementid="tempo-b4560e59-6338-5342-aa30-19828a7fc18c">{description}</p>
        </CardContent>

        <CardFooter
          className="p-5 pt-0 tempo-187835a9-36bc-53e9-ae3b-bbe961913d60"
          tempoelementid="tempo-187835a9-36bc-53e9-ae3b-bbe961913d60">
          <Button
            onClick={
              projectUrl
                ? () => window.open(projectUrl, "_blank")
                : onViewProject
            }
            className="w-full bg-purple-600 hover:bg-purple-700 text-white tempo-a8d90a23-698c-5cac-afd8-8a7eba7cff37"
            tempoelementid="tempo-a8d90a23-698c-5cac-afd8-8a7eba7cff37">
            View Full Project
          </Button>
        </CardFooter>
      </Card>
    </motion.div>)
  );
};

export default ProjectCard;
