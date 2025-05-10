import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, Send, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

interface ContactSectionProps {
  email?: string;
  phone?: string;
  whatsapp?: string;
  socialLinks?: {
    linkedin?: string;
    behance?: string;
    instagram?: string;
    youtube?: string;
  };
}

const ContactSection = ({
  email = "mudassiranimator92@gmail.com",
  phone = "+92 311 786 9234",
  whatsapp = "https://wa.me/923117869234",
  socialLinks = {
    linkedin: "https://www.linkedin.com/in/mudassir-ahmed-929195276/",
    behance: "https://www.behance.net/mudassianimato",
    instagram: "https://instagram.com",
    youtube: "https://www.youtube.com/@BilalCreation",
  },
}: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (form.current) {
      try {
        // Replace these with your actual EmailJS service, template, and user IDs
        await emailjs.sendForm(
          "Contact-Service", // EmailJS service ID
          "template_p9znuwa", // EmailJS template ID
          form.current,
          "suEV6ueLfJMoas7zM", // Replace this with your actual EmailJS public key
        );

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } catch (err) {
        console.error("Failed to send email:", err);
        setIsSubmitting(false);
        setError("Failed to send message. Please try again later.");
      }
    }
  };

  return (
    (<section
      className="py-16 px-4 md:px-8 bg-white tempo-dfbac7f1-3471-5b54-b980-057e32d7b819"
      id="contact"
      tempoelementid="tempo-dfbac7f1-3471-5b54-b980-057e32d7b819">
      <div
        className="container mx-auto max-w-6xl tempo-5e3f8979-b4e9-5478-bce4-8c2afff2e4fe"
        tempoelementid="tempo-5e3f8979-b4e9-5478-bce4-8c2afff2e4fe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 tempo-b93f4765-ba57-58de-afc1-efd5cbf6e926"
          tempoelementid="tempo-b93f4765-ba57-58de-afc1-efd5cbf6e926">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tempo-b3d00014-87e7-5c09-a8c0-1676f55f0059"
            tempoelementid="tempo-b3d00014-87e7-5c09-a8c0-1676f55f0059">Get In Touch</h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto tempo-9137f0d4-d78b-5876-b856-c14a8034056c"
            tempoelementid="tempo-9137f0d4-d78b-5876-b856-c14a8034056c">
            Have a project in mind or want to collaborate? Feel free to reach
            out and let's create something amazing together.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 tempo-373cdc6a-1253-5685-b12c-59ec2ffbee17"
          tempoelementid="tempo-373cdc6a-1253-5685-b12c-59ec2ffbee17">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            tempoelementid="tempo-dad7618a-707e-53cf-9d8b-50bdb29b24eb"
            className="tempo-dad7618a-707e-53cf-9d8b-50bdb29b24eb">
            <Card
              className="overflow-hidden border-0 shadow-lg rounded-xl tempo-5958b273-ff1f-5286-b5b9-eb236cd46990"
              tempoelementid="tempo-5958b273-ff1f-5286-b5b9-eb236cd46990">
              <CardContent
                className="p-8 tempo-56df9708-ff7b-5a46-8db9-822bd8a2983b"
                tempoelementid="tempo-56df9708-ff7b-5a46-8db9-822bd8a2983b">
                {isSubmitted ? (
                  <div
                    className="text-center py-8 tempo-64fee095-ad5c-5ab2-9e8e-08cf248510f0"
                    tempoelementid="tempo-64fee095-ad5c-5ab2-9e8e-08cf248510f0">
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4 tempo-01edd6a8-8030-50c7-a774-ef074f32feaf"
                      tempoelementid="tempo-01edd6a8-8030-50c7-a774-ef074f32feaf">
                      <Send
                        className="h-8 w-8 text-purple-600 tempo-b7e4ad2b-8c84-58b9-8665-291a4ea304b1"
                        tempoelementid="tempo-b7e4ad2b-8c84-58b9-8665-291a4ea304b1" />
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2 tempo-5197de14-5b95-5416-80d4-ea9e3424d326"
                      tempoelementid="tempo-5197de14-5b95-5416-80d4-ea9e3424d326">
                      Message Sent!
                    </h3>
                    <p
                      className="text-gray-600 tempo-4a0a1596-6026-5907-8e3c-d4b34289409f"
                      tempoelementid="tempo-4a0a1596-6026-5907-8e3c-d4b34289409f">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    tempoelementid="tempo-2a5036b7-80e6-552f-ac87-289c8d215cf4"
                    className="tempo-2a5036b7-80e6-552f-ac87-289c8d215cf4">
                    <div
                      className="space-y-5 tempo-cd5bc311-f7bc-59be-8db3-f5f10b5e45f3"
                      tempoelementid="tempo-cd5bc311-f7bc-59be-8db3-f5f10b5e45f3">
                      <div
                        tempoelementid="tempo-77c28cf7-15c3-5d75-b6e2-3848acc024c6"
                        className="tempo-77c28cf7-15c3-5d75-b6e2-3848acc024c6">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1 tempo-6c4005ef-31ed-56f0-9326-626f2b6fbae7"
                          tempoelementid="tempo-6c4005ef-31ed-56f0-9326-626f2b6fbae7">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Mudassir Ahmed"
                          required
                          className="w-full tempo-b36a32d4-12f7-5109-bed4-ecb8e7d71206"
                          tempoelementid="tempo-b36a32d4-12f7-5109-bed4-ecb8e7d71206" />
                      </div>

                      <div
                        tempoelementid="tempo-7d293bc3-9373-5569-8d85-3efb793650b4"
                        className="tempo-7d293bc3-9373-5569-8d85-3efb793650b4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1 tempo-42a65bd9-6bce-5ede-9382-49eae4927135"
                          tempoelementid="tempo-42a65bd9-6bce-5ede-9382-49eae4927135">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full tempo-e48783fb-5325-512b-80af-466c84551346"
                          tempoelementid="tempo-e48783fb-5325-512b-80af-466c84551346" />
                      </div>

                      <div
                        tempoelementid="tempo-21ac53e8-b27c-5ba0-9102-3b3448508ef8"
                        className="tempo-21ac53e8-b27c-5ba0-9102-3b3448508ef8">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1 tempo-8eb80ed1-467a-5102-95bd-4157c8dd1b87"
                          tempoelementid="tempo-8eb80ed1-467a-5102-95bd-4157c8dd1b87">
                          Your Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project..."
                          required
                          className="min-h-[150px] w-full tempo-16707a42-20a9-5912-a4a0-ffb0632819ea"
                          tempoelementid="tempo-16707a42-20a9-5912-a4a0-ffb0632819ea" />
                        <input
                          type="hidden"
                          name="to_email"
                          value="mudassiranimator92@gmail.com"
                          tempoelementid="tempo-b4b7dada-5213-5702-aa6f-76d98458bc37"
                          className="tempo-b4b7dada-5213-5702-aa6f-76d98458bc37" />
                      </div>

                      {error && (
                        <div
                          className="text-red-500 text-sm mb-3 tempo-b51c573d-bf6a-52e4-8267-781d6189aa55"
                          tempoelementid="tempo-b51c573d-bf6a-52e4-8267-781d6189aa55">{error}</div>
                      )}
                      <Button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white tempo-6515edf6-72fb-5212-809e-4ba8759964dd"
                        disabled={isSubmitting}
                        tempoelementid="tempo-6515edf6-72fb-5212-809e-4ba8759964dd">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8 tempo-2f77afde-c1b3-53cd-bf3a-371b4626c153"
            tempoelementid="tempo-2f77afde-c1b3-53cd-bf3a-371b4626c153">
            {/* Direct Contact */}
            <Card
              className="overflow-hidden border-0 shadow-lg rounded-xl tempo-a6099bd7-5d30-5dc3-b4a0-1db0a4cd8dde"
              tempoelementid="tempo-a6099bd7-5d30-5dc3-b4a0-1db0a4cd8dde">
              <CardContent
                className="p-8 tempo-47f73db6-0927-5848-ac6c-db5df1958f36"
                tempoelementid="tempo-47f73db6-0927-5848-ac6c-db5df1958f36">
                <h3
                  className="text-xl font-semibold mb-6 tempo-e06a4859-6621-5f6a-958f-a6db33cb6f2e"
                  tempoelementid="tempo-e06a4859-6621-5f6a-958f-a6db33cb6f2e">
                  Contact Information
                </h3>

                <div
                  className="space-y-4 tempo-62270bfb-881e-5263-b5ef-51a79c0befc6"
                  tempoelementid="tempo-62270bfb-881e-5263-b5ef-51a79c0befc6">
                  <div
                    className="flex items-center tempo-aa903df7-f7bb-5b14-b56d-e6cf59bbc4cb"
                    tempoelementid="tempo-aa903df7-f7bb-5b14-b56d-e6cf59bbc4cb">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 mr-4 tempo-01ddb84c-22f0-5fa6-b712-5063d507da79"
                      tempoelementid="tempo-01ddb84c-22f0-5fa6-b712-5063d507da79">
                      <Mail
                        className="h-5 w-5 text-purple-600 tempo-6f0fa81a-d65c-5192-a8ce-9c9167c36487"
                        tempoelementid="tempo-6f0fa81a-d65c-5192-a8ce-9c9167c36487" />
                    </div>
                    <div
                      tempoelementid="tempo-a3427935-a0b2-5b38-8358-aa21f000c1a1"
                      className="tempo-a3427935-a0b2-5b38-8358-aa21f000c1a1">
                      <p
                        className="text-sm text-gray-500 tempo-331ed7bd-e31f-5995-a364-d118c0250441"
                        tempoelementid="tempo-331ed7bd-e31f-5995-a364-d118c0250441">Email</p>
                      <a
                        href={`mailto:${email}`}
                        className="text-gray-800 hover:text-purple-600 transition-colors tempo-a82efc0e-2479-5fb1-9377-3b47ae7c3545"
                        tempoelementid="tempo-a82efc0e-2479-5fb1-9377-3b47ae7c3545">
                        {email}
                      </a>
                    </div>
                  </div>

                  <div
                    className="flex items-center tempo-eb209e61-5fbe-5597-a07a-9d5a207cbac8"
                    tempoelementid="tempo-eb209e61-5fbe-5597-a07a-9d5a207cbac8">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 mr-4 tempo-746af31b-e13a-5711-8759-edd73567eb54"
                      tempoelementid="tempo-746af31b-e13a-5711-8759-edd73567eb54">
                      <Phone
                        className="h-5 w-5 text-purple-600 tempo-a9a66289-8b2b-5e06-8016-d488b2a3245e"
                        tempoelementid="tempo-a9a66289-8b2b-5e06-8016-d488b2a3245e" />
                    </div>
                    <div
                      tempoelementid="tempo-f5e5acd5-6c7e-57cb-8279-43d631bdb506"
                      className="tempo-f5e5acd5-6c7e-57cb-8279-43d631bdb506">
                      <p
                        className="text-sm text-gray-500 tempo-ae7fa5cc-924a-536e-92a1-c37000305c11"
                        tempoelementid="tempo-ae7fa5cc-924a-536e-92a1-c37000305c11">Phone</p>
                      <a
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="text-gray-800 hover:text-purple-600 transition-colors tempo-bc7fe725-0367-58a6-be9c-d8822803e2a8"
                        tempoelementid="tempo-bc7fe725-0367-58a6-be9c-d8822803e2a8">
                        {phone}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card
              className="overflow-hidden border-0 shadow-lg rounded-xl tempo-9895a6a1-0b51-50a2-b191-fc16072d96e1"
              tempoelementid="tempo-9895a6a1-0b51-50a2-b191-fc16072d96e1">
              <CardContent
                className="p-8 tempo-69ec1ade-1365-5a3a-8b93-25600f4d0c04"
                tempoelementid="tempo-69ec1ade-1365-5a3a-8b93-25600f4d0c04">
                <h3
                  className="text-xl font-semibold mb-6 tempo-7936395f-0ab1-59f1-9a96-7f554667f3ea"
                  tempoelementid="tempo-7936395f-0ab1-59f1-9a96-7f554667f3ea">Connect With Me</h3>

                <div
                  className="flex flex-wrap gap-4 tempo-008df11c-e52b-50ca-b7c8-c5dd6a3d8cdc"
                  tempoelementid="tempo-008df11c-e52b-50ca-b7c8-c5dd6a3d8cdc">
                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors tempo-db191de0-c55e-5b4c-b8d7-09c31d9403ff"
                      tempoelementid="tempo-db191de0-c55e-5b4c-b8d7-09c31d9403ff">
                      <Linkedin
                        className="h-6 w-6 text-purple-600 tempo-e56a671a-3af2-5e19-8f05-aa3aa002165a"
                        tempoelementid="tempo-e56a671a-3af2-5e19-8f05-aa3aa002165a" />
                    </a>
                  )}

                  {socialLinks.behance && (
                    <a
                      href={socialLinks.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors tempo-c217cbb2-a8a4-5c68-9cab-6476d975b7a9"
                      tempoelementid="tempo-c217cbb2-a8a4-5c68-9cab-6476d975b7a9">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-purple-600 tempo-fcb6bdc7-3f26-5902-b7eb-8e68bb286372"
                        tempoelementid="tempo-fcb6bdc7-3f26-5902-b7eb-8e68bb286372">
                        <path
                          d="M22 7h-7V2H9v5H2c0 5.523 0 10 .001 15h20V7zM7 16.5H4.5v-5H7v5zm6.25-5a2.5 2.5 0 0 1 0 5h-3.75v-5h3.75zM18 16.5h-2.5v-5H18v5z"
                          tempoelementid="tempo-c3729c0b-e49f-5454-bf46-fb7767fcebc9"
                          className="tempo-c3729c0b-e49f-5454-bf46-fb7767fcebc9" />
                        <path
                          d="M7 16.5H4.5v-5H7v5zm6.25-5a2.5 2.5 0 0 1 0 5h-3.75v-5h3.75zM18 16.5h-2.5v-5H18v5z"
                          tempoelementid="tempo-ae0f3c21-a3cc-57d9-be9a-81ad67918908"
                          className="tempo-ae0f3c21-a3cc-57d9-be9a-81ad67918908" />
                      </svg>
                    </a>
                  )}

                  {socialLinks.instagram && (
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors tempo-774bc0b7-0cdb-5873-a5f8-8dd31dcc181d"
                      tempoelementid="tempo-774bc0b7-0cdb-5873-a5f8-8dd31dcc181d">
                      <Instagram
                        className="h-6 w-6 text-purple-600 tempo-7f62d4b2-a0f5-584d-9f5d-35ff84e444e5"
                        tempoelementid="tempo-7f62d4b2-a0f5-584d-9f5d-35ff84e444e5" />
                    </a>
                  )}

                  {socialLinks.youtube && (
                    <a
                      href={socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors tempo-123d85c2-71da-5b3a-a0c6-4671cde35968"
                      tempoelementid="tempo-123d85c2-71da-5b3a-a0c6-4671cde35968">
                      <Youtube
                        className="h-6 w-6 text-purple-600 tempo-34a0d556-9454-598e-835f-a4619bb99fc7"
                        tempoelementid="tempo-34a0d556-9454-598e-835f-a4619bb99fc7" />
                    </a>
                  )}

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors tempo-d7a801ec-3a9c-5bc6-b4d5-24856268d16b"
                    tempoelementid="tempo-d7a801ec-3a9c-5bc6-b4d5-24856268d16b">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 text-purple-600 tempo-bbe47144-67f9-5ad9-9fe2-576601575c75"
                      tempoelementid="tempo-bbe47144-67f9-5ad9-9fe2-576601575c75">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.463 3.488C18.217 1.24 15.231 0.001 12.05 0C5.495 0 0.16 5.334 0.157 11.892c0 2.096 0.547 4.142 1.588 5.946L0.057 24l6.304-1.654c1.737 0.948 3.693 1.447 5.683 1.448h0.005c6.554 0 11.89-5.335 11.893-11.893 0-3.181-1.237-6.168-3.48-8.413ZM12.05 21.785h-0.004c-1.774 0-3.513-0.477-5.031-1.378l-0.361-0.214-3.741 0.981 0.999-3.648-0.235-0.374c-0.99-1.574-1.512-3.393-1.511-5.259 0.002-5.45 4.437-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898 1.866 1.869 2.893 4.352 2.892 6.993-0.003 5.45-4.44 9.885-9.885 9.885Zm5.43-7.403c-0.3-0.15-1.767-0.872-2.04-0.972-0.273-0.097-0.472-0.15-0.67 0.15-0.2 0.3-0.773 0.972-0.945 1.17-0.175 0.202-0.349 0.223-0.647 0.075-0.3-0.15-1.263-0.465-2.403-1.485-0.888-0.795-1.484-1.77-1.66-2.07-0.174-0.3-0.019-0.465 0.13-0.615 0.134-0.135 0.3-0.345 0.449-0.52 0.149-0.172 0.198-0.296 0.298-0.497 0.099-0.2 0.05-0.375-0.025-0.524-0.075-0.15-0.672-1.62-0.922-2.206-0.242-0.584-0.487-0.51-0.672-0.51-0.172-0.015-0.371-0.015-0.571-0.015-0.2 0-0.523 0.074-0.797 0.374-0.273 0.3-1.045 1.02-1.045 2.475 0 1.455 1.057 2.884 1.206 3.069 0.15 0.187 2.105 3.208 5.1 4.485 0.713 0.306 1.27 0.489 1.704 0.626 0.716 0.226 1.366 0.194 1.884 0.118 0.574-0.085 1.767-0.72 2.016-1.413 0.25-0.693 0.25-1.29 0.175-1.413-0.074-0.124-0.272-0.198-0.571-0.347Z"
                        tempoelementid="tempo-94c5b668-d865-5a75-9d8d-244afbf1d667"
                        className="tempo-94c5b668-d865-5a75-9d8d-244afbf1d667" />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card
              className="overflow-hidden border-0 shadow-lg rounded-xl tempo-7325b8cc-3b9b-5877-856c-3e58f12ff9a5"
              tempoelementid="tempo-7325b8cc-3b9b-5877-856c-3e58f12ff9a5">
              <CardContent
                className="p-8 tempo-944ed566-e8fc-5ffb-a3fc-48e963b16bc4"
                tempoelementid="tempo-944ed566-e8fc-5ffb-a3fc-48e963b16bc4">
                <h3
                  className="text-xl font-semibold mb-2 tempo-ad4bf78f-a5bd-501e-af68-7e5df70080fe"
                  tempoelementid="tempo-ad4bf78f-a5bd-501e-af68-7e5df70080fe">Location</h3>
                <p
                  className="text-gray-600 tempo-73781486-f10a-53ca-82e9-70ee44a0dffe"
                  tempoelementid="tempo-73781486-f10a-53ca-82e9-70ee44a0dffe">Islamabad, Pakistan</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>)
  );
};

export default ContactSection;
