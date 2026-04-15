import React, { useState } from "react";
import { Card, Modal, Button } from "flowbite-react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import Image from "../assets/ghatan.jpeg";
import ImageAbsensi from "../assets/project.png";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800">

            {/* Header */}
            <div className="px-6 md:px-10 pb-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
                
                <div className="flex flex-col md:flex-row md:items-end gap-5">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative"
                  >
                    <img
                      src={Image}
                      alt="Profile"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover border-4 border-white dark:border-gray-800 shadow-md group-hover:scale-105 transition"
                    />
                  </button>

                  <div>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      Muhammad Farrel Ghatan Nugraha
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Frontend Developer
                    </p>
                    <div className="flex items-center gap-2 text-sm mt-2 text-gray-500">
                      <FaMapMarkerAlt />
                      Indonesia
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href="https://github.com/GhatanFarrel27" target="_blank">
                    <Button className="bg-gray-900 text-white">
                      GitHub
                    </Button>
                  </a>
                  <a href="mailto:nugrahaghatan45@gmail.com">
                    <Button color="light">Contact</Button>
                  </a>
                </div>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

                {/* LEFT */}
                <div className="space-y-6">

                  {/* About */}
                  <div className="rounded-lg border p-6 bg-white dark:bg-gray-800">
                    <h2 className="text-xl font-bold mb-3">About Me</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Saya seorang <strong>Frontend Developer</strong> yang
                      bersemangat membangun UI modern menggunakan React,
                      Tailwind CSS, dan JavaScript.
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="rounded-lg border p-6 bg-white dark:bg-gray-800">
                    <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                      <span className="flex gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded">
                        <FaReact /> React
                      </span>
                      <span className="flex gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded">
                        <SiTailwindcss /> Tailwind
                      </span>
                      <span className="flex gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded">
                        <SiJavascript /> JS
                      </span>
                      <span className="flex gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded">
                        <SiHtml5 /> HTML
                      </span>
                      <span className="flex gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded">
                        <SiCss3 /> CSS
                      </span>
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h2 className="text-xl font-bold mb-4">Projects</h2>

                    <div className="rounded-lg border p-4 bg-white dark:bg-gray-800 shadow hover:shadow-xl hover:-translate-y-1 transition">
                      <img
                        src={ImageAbsensi}
                        className="rounded mb-3 h-40 w-full object-cover"
                      />
                      <h3 className="font-semibold">Absensi App</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Aplikasi absensi berbasis web untuk karyawan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="space-y-6">

                  {/* Contact */}
                  <div className="rounded-lg border p-6 bg-white dark:bg-gray-800">
                    <h2 className="text-xl font-bold mb-6 flex gap-2 items-center">
                      <FaPhoneAlt /> Contact
                    </h2>

                    <div className="space-y-4">

                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/6283822694932"
                        target="_blank"
                        className="group flex justify-between items-center p-4 rounded-xl bg-green-100 dark:bg-green-900 hover:scale-105 hover:shadow-xl transition"
                      >
                        <div className="flex gap-4 items-center">
                          <div className="p-3 bg-white rounded-full group-hover:rotate-12 transition">
                            <FaPhoneAlt className="text-green-600" />
                          </div>
                          <div>
                            <p className="text-xs font-bold">WhatsApp</p>
                            <p className="text-sm">+62 838 2269 4932</p>
                          </div>
                        </div>
                        <span className="opacity-0 group-hover:opacity-100">
                          →
                        </span>
                      </a>

                      {/* Email */}
                      <a
                        href="mailto:nugrahaghatan45@gmail.com"
                        className="group flex justify-between items-center p-4 rounded-xl bg-blue-100 dark:bg-blue-900 hover:scale-105 hover:shadow-xl transition"
                      >
                        <div className="flex gap-4 items-center">
                          <div className="p-3 bg-white rounded-full group-hover:rotate-12 transition">
                            <FaEnvelope className="text-blue-600" />
                          </div>
                          <div>
                            <p className="text-xs font-bold">Email</p>
                            <p className="text-sm break-all">
                              nugrahaghatan45@gmail.com
                            </p>
                          </div>
                        </div>
                        <span className="opacity-0 group-hover:opacity-100">
                          →
                        </span>
                      </a>

                      {/* GitHub */}
                      <a
                        href="https://github.com/GhatanFarrel27"
                        target="_blank"
                        className="group flex justify-between items-center p-4 rounded-xl bg-gray-200 dark:bg-gray-700 hover:scale-105 hover:shadow-xl transition"
                      >
                        <div className="flex gap-4 items-center">
                          <div className="p-3 bg-white rounded-full group-hover:rotate-12 transition">
                            <FaGithub />
                          </div>
                          <div>
                            <p className="text-xs font-bold">GitHub</p>
                            <p className="text-sm">
                              github.com/GhatanFarrel27
                            </p>
                          </div>
                        </div>
                        <span className="opacity-0 group-hover:opacity-100">
                          →
                        </span>
                      </a>

                    </div>
                  </div>

                  {/* Education */}
                  <div className="rounded-lg border p-6 bg-white dark:bg-gray-800">
                    <h2 className="text-xl font-bold mb-4">Education</h2>
                    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
                      <h3 className="font-semibold">
                        SMK PRAKARYA INTERNASIONAL
                      </h3>
                      <p className="text-sm">
                        Pengembangan Perangkat Lunak dan Gim
                      </p>
                      <p className="text-xs">2023 - 2026</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Modal */}
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Body>
          <img src={Image} className="rounded-lg" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Profile;``