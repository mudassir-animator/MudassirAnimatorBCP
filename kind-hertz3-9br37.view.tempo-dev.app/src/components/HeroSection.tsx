import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Download,
  ArrowDown,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface HeroSectionProps {
  name?: string;
  title?: string;
  subtitle?: string;
  tagline?: string;
  profileImage?: string;
  socialLinks?: {
    linkedin?: string;
    behance?: string;
    instagram?: string;
    youtube?: string;
  };
  onPortfolioClick?: () => void;
  cvDownloadUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name = "Mudassir Ahmed",
  title = "3D Artist & Graphic Designer",
  subtitle = "With over 7 years of creative experience in design, 3D animation, and post-production.",
  tagline = "7+ Years Experience | 3D Modelling Expert | Graphic Designer",
  profileImage = "https://media-hosting.imagekit.io/2a150dc583c24c4d/aifaceswap-output.png?Expires=1841393431&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wTg~6pe3PDctDTzEY-7ik73Ik9tQRXuEJ-B8vQjGqt3zSPy-pRXJ-JaEInANFhp4i0Yr5P7Ru3urFQqK8AJSiRSgRPz1zke6Aw9iBGYLGKnloPxz~cJJE8Y2BDQJ8~MtO3U1K~A2OT4aCxrc9oQatOlOaiOJc5NfbFdvhXfiLLBlv1y~R8UFItgr5vYIVwTRaH2~pGFrsVWQlzomafxioNuTmQ-kRkGD6XswJYrNdhahrNNRwWJzT3HUZRjrNheK8RnsfrkC74uJJjIx4ZgJ~cu-MbDhdPWj4wM4Wm1aZk-rZRBRcItLk85Q56MNk6UAX1XgQhrcb14-Xpo-0oIJDg__",
  socialLinks = {
    linkedin: "https://www.linkedin.com/in/mudassir-ahmed-929195276/",
    behance: "https://www.behance.net/mudassianimato",
    instagram: "https://instagram.com",
    youtube: "https://www.youtube.com/@BilalCreation",
  },
  onPortfolioClick = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  },
  cvDownloadUrl = "https://drive.google.com/file/d/12mdeotWHr5HYALV0IDESlLYGu-oeMRBm/view?usp=drive_link",
}) => {
  return (
    (<section
      className="w-full min-h-[700px] bg-white flex items-center py-16 px-4 md:px-8 lg:px-16 tempo-34cd92fe-d536-5717-94f5-04ce733ef470"
      tempoelementid="tempo-34cd92fe-d536-5717-94f5-04ce733ef470">
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 tempo-6b79b990-7dd7-5193-87a9-82a5c3b2df4e"
        tempoelementid="tempo-6b79b990-7dd7-5193-87a9-82a5c3b2df4e">
        {/* Profile Image */}
        <motion.div
          className="w-full md:w-5/12 flex justify-center md:justify-start tempo-e92ab9b4-4e2e-509b-baac-bb795398f641"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          tempoelementid="tempo-e92ab9b4-4e2e-509b-baac-bb795398f641">
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-600 shadow-xl tempo-ed30ab09-f0ea-52c5-b969-2c0f4662b99f"
            tempoelementid="tempo-ed30ab09-f0ea-52c5-b969-2c0f4662b99f">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover tempo-c05c988a-41f8-5aa6-b9ef-8db354b347e8"
              tempoelementid="tempo-c05c988a-41f8-5aa6-b9ef-8db354b347e8" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="w-full md:w-7/12 text-center md:text-left tempo-bf0e9f2f-a040-5535-8559-821f2ee00795"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          tempoelementid="tempo-bf0e9f2f-a040-5535-8559-821f2ee00795">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tempo-f049085c-a9ff-58a7-b37f-22409bde8847"
            tempoelementid="tempo-f049085c-a9ff-58a7-b37f-22409bde8847">
            I'm <span
            className="text-purple-600 tempo-5eb5924e-3ba7-58bd-a39d-faad9c720f42"
            tempoelementid="tempo-5eb5924e-3ba7-58bd-a39d-faad9c720f42">{name}</span> – {title}
          </h1>

          <p
            className="text-lg md:text-xl text-gray-600 mb-6 tempo-c516282a-4645-5d3f-a15a-64c4dd7dfa4b"
            tempoelementid="tempo-c516282a-4645-5d3f-a15a-64c4dd7dfa4b">{subtitle}</p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 tempo-72a7c5bb-362b-5778-b687-e466316b6655"
            tempoelementid="tempo-72a7c5bb-362b-5778-b687-e466316b6655">
            <Button
              onClick={onPortfolioClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full flex items-center gap-2 tempo-99f89063-391f-5dd5-809b-1ab13b49b7c1"
              tempoelementid="tempo-99f89063-391f-5dd5-809b-1ab13b49b7c1">
              See My Work <ArrowDown
              size={18}
              tempoelementid="tempo-cfbef6fc-e52d-5141-9683-9810cad19066"
              className="tempo-cfbef6fc-e52d-5141-9683-9810cad19066" />
            </Button>

            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 rounded-full flex items-center gap-2 tempo-d3c9e4b2-f320-5b61-86e2-ac50e9eb99ae"
              asChild
              tempoelementid="tempo-d3c9e4b2-f320-5b61-86e2-ac50e9eb99ae">
              <a
                href="https://drive.google.com/file/d/12mdeotWHr5HYALV0IDESlLYGu-oeMRBm/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                tempoelementid="tempo-d724f6bd-a78e-585f-8958-c45cb2f80f3a"
                className="tempo-d724f6bd-a78e-585f-8958-c45cb2f80f3a">
                Download CV <Download
                size={18}
                tempoelementid="tempo-bdb41ee2-0cc1-5a44-8b58-ca40a7538b05"
                className="tempo-bdb41ee2-0cc1-5a44-8b58-ca40a7538b05" />
              </a>
            </Button>
          </div>

          <p
            className="text-sm md:text-base text-gray-500 mb-6 tempo-de19dca2-e017-569f-b643-8ab98dc341d2"
            tempoelementid="tempo-de19dca2-e017-569f-b643-8ab98dc341d2">{tagline}</p>

          {/* Social Icons */}
          <div
            className="flex gap-4 justify-center md:justify-start tempo-4f1b01c4-f550-504c-bc71-bd519d5e6e52"
            tempoelementid="tempo-4f1b01c4-f550-504c-bc71-bd519d5e6e52">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors tempo-6666315e-a0fd-55f6-a76d-3c4895e42af6"
                tempoelementid="tempo-6666315e-a0fd-55f6-a76d-3c4895e42af6">
                <Linkedin
                  size={20}
                  tempoelementid="tempo-281b541f-d52d-5788-b269-3440641b673b"
                  className="tempo-281b541f-d52d-5788-b269-3440641b673b" />
              </a>
            )}

            {socialLinks.behance && (
              <a
                href={socialLinks.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors tempo-86bf5fde-3c2b-520a-95b2-f99f3d4d8f45"
                tempoelementid="tempo-86bf5fde-3c2b-520a-95b2-f99f3d4d8f45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  tempoelementid="tempo-cc6be279-8586-59ac-83c0-1027bf0ceb3a"
                  className="tempo-cc6be279-8586-59ac-83c0-1027bf0ceb3a">
                  <path
                    d="M22 7h-7V2H9v5H2c0 5.523 0 10 .001 15h20V7zM7 16.5H4.5v-5H7v5zm6.25-5a2.5 2.5 0 0 1 0 5h-3.75v-5h3.75zM18 16.5h-2.5v-5H18v5z"
                    tempoelementid="tempo-ff4d074c-ef2d-50a7-a014-aaa79b2b2a42"
                    className="tempo-ff4d074c-ef2d-50a7-a014-aaa79b2b2a42" />
                  <path
                    d="M7 16.5H4.5v-5H7v5zm6.25-5a2.5 2.5 0 0 1 0 5h-3.75v-5h3.75zM18 16.5h-2.5v-5H18v5z"
                    tempoelementid="tempo-ec69b1b3-58be-5ce3-9053-f1210c90ec0b"
                    className="tempo-ec69b1b3-58be-5ce3-9053-f1210c90ec0b" />
                </svg>
              </a>
            )}

            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors tempo-112543e2-f97d-56e3-adbe-e38fe55fde98"
                tempoelementid="tempo-112543e2-f97d-56e3-adbe-e38fe55fde98">
                <Instagram
                  size={20}
                  tempoelementid="tempo-6725c7a7-31f2-5a23-b476-59eb58d19baf"
                  className="tempo-6725c7a7-31f2-5a23-b476-59eb58d19baf" />
              </a>
            )}

            {socialLinks.youtube && (
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors tempo-d918ebf7-ab21-5557-b10d-590f944d8280"
                tempoelementid="tempo-d918ebf7-ab21-5557-b10d-590f944d8280">
                <Youtube
                  size={20}
                  tempoelementid="tempo-412da0f7-7fcf-5029-b14f-4dbff5a46b18"
                  className="tempo-412da0f7-7fcf-5029-b14f-4dbff5a46b18" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>)
  );
};

export default HeroSection;
