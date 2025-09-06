import { motion } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Heart,
  Users,
  MapPin,
  Star,
} from "lucide-react";
import { HelpingHand } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-rose-400 rounded-full opacity-70 float-particles"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Hero Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gray-900 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="block"
            >
              SentryAid – Respond Faster, Save Lives
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Connecting users in distress with local volunteers in real time.
          </motion.p>

          {/* Login Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            {[
              {
                label: "Admin Login",
                icon: Shield,
                color: "blue",
                path: "/adminLogin",
                delay: 0,
              },
              {
                label: "User Login",
                icon: AlertTriangle,
                color: "red",
                path: "/usersLogin",
                delay: 0.2,
              },
              {
                label: "Volunteer Login",
                icon: Heart,
                color: "green",
                path: "/volunteerLogin",
                delay: 0.4,
              },
            ].map((button) => {
              const IconComponent = button.icon;

              return (
                <motion.div
                  key={button.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 4.5 + button.delay }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={button.path}
                    className={`
                px-8 py-6 text-lg font-semibold rounded-xl text-white shadow-2xl transition-all duration-300 flex items-center justify-center
                ${
                  button.color === "blue"
                    ? "bg-blue-600 hover:bg-blue-700 pulse-glow-blue"
                    : ""
                }
                ${
                  button.color === "red"
                    ? "bg-red-600 hover:bg-red-700 pulse-glow-red"
                    : ""
                }
                ${
                  button.color === "green"
                    ? "bg-green-600 hover:bg-green-700 pulse-glow-green"
                    : ""
                }
              `}
                  >
                    <IconComponent className="w-6 h-6 mr-3" />
                    {button.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-100 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-pink-500 to-rose-400 transform -translate-y-1/2"></div>

            {[
              {
                icon: AlertTriangle,
                title: "Send SOS",
                description:
                  "Users in distress can quickly send emergency alerts with their location.",
                color: "red",
                delay: 0,
              },
              {
                icon: Users,
                title: "Volunteers Respond",
                description:
                  "Nearby volunteers receive instant notifications and can offer immediate help.",
                color: "blue",
                delay: 0.2,
              },
              {
                icon: Shield,
                title: "Admins Oversee",
                description:
                  "Emergency coordinators monitor all activities and dispatch professional help when needed.",
                color: "green",
                delay: 0.4,
              },
            ].map((step) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: step.delay }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative z-10 flex"
              >
                {/* Make inner card stretch full height */}
                <div
                  className={`p-16 rounded-2xl bg-white/80 backdrop-blur-sm border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg flex-1 flex flex-col`}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto
                ${
                  step.color === "red"
                    ? "bg-gradient-to-br from-red-500 to-red-600 pulse-glow-red"
                    : ""
                }
                ${
                  step.color === "blue"
                    ? "bg-gradient-to-br from-blue-500 to-blue-600 pulse-glow-blue"
                    : ""
                }
                ${
                  step.color === "green"
                    ? "bg-gradient-to-br from-green-500 to-green-600 pulse-glow-green"
                    : ""
                }
              `}
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-pretty flex-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Risk Map Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-pink-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Live Risk Map
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real-time monitoring of emergency situations and safe zones across
            your community.
          </motion.p>

          <motion.div
            className="relative w-full max-w-4xl mx-auto h-96 rounded-2xl bg-gradient-to-br from-white to-pink-50 border border-pink-200 overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Abstract Globe/Map */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-rose-100/50">
              {/* Radar Sweep */}
              <div className="absolute top-1/2 left-1/2 w-64 h-64 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-full h-full border-2 border-green-500/50 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent transform -translate-x-1/2 -translate-y-1/2 origin-left radar-sweep"></div>
              </div>

              {/* Heat Zones */}
              {[
                { color: "red", size: "w-8 h-8", position: "top-1/4 left-1/3" },
                {
                  color: "red",
                  size: "w-6 h-6",
                  position: "top-1/2 right-1/4",
                },
                {
                  color: "green",
                  size: "w-10 h-10",
                  position: "bottom-1/3 left-1/2",
                },
                {
                  color: "green",
                  size: "w-7 h-7",
                  position: "top-2/3 left-1/4",
                },
              ].map((zone, index) => (
                <motion.div
                  key={index}
                  className={`
                    absolute ${zone.position} ${zone.size} rounded-full
                    ${
                      zone.color === "red" ? "bg-red-500/70" : "bg-green-500/70"
                    }
                  `}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                />
              ))}

              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-px bg-gray-400"
                    style={{ top: `${(i + 1) * 12.5}%` }}
                  />
                ))}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-full w-px bg-gray-400"
                    style={{ left: `${(i + 1) * 12.5}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full pulse-glow-red"></div>
                <span className="text-sm text-gray-700">High Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full pulse-glow-green"></div>
                <span className="text-sm text-gray-700">Safe Zone</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-100 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Community Heroes
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Emergency Volunteer",
                content:
                  "Thanks to SentryAid, I can provide immediate assistance during emergencies. The platform makes helping others seamless and efficient.",
                avatar:
                  "https://tse1.explicit.bing.net/th/id/OIP.wElTk2tpbD0LGcgvXAfVVQHaF9?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
              },
              {
                name: "Marcus Rodriguez",
                role: "Community Admin",
                content:
                  "Managing emergency responses has never been easier. The dashboard gives us complete visibility and control.",
                avatar:
                  "https://wallpapers.com/images/hd/professional-profile-pictures-1350-x-1080-sizz773bu8k11plw.jpg",
              },
              {
                name: "Emily Watson",
                role: "Rescued User",
                content:
                  "When I was being followed and felt unsafe, SentryAid instantly alerted nearby volunteers and helped me get to safety. It truly saved me from a dangerous situation.",
                avatar:
                  "https://st4.depositphotos.com/1006137/19992/i/450/depositphotos_199923454-stock-photo-beautiful-brunette-woman-profile-picture.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex"
              >
                <div className="p-6 bg-white/80 backdrop-blur-sm border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg flex flex-col h-full w-full">
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full ring-2 ring-rose-300"
                      />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full pulse-glow-green"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-pretty flex-grow">
                    "{testimonial.content}"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-100 to-pink-100 border-t border-pink-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex items-center mb-6 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center mr-3 heartbeat">
                <HelpingHand className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold text-gray-900">
                SentryAid
              </span>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              {["About", "Features", "Community", "Support", "Privacy"].map(
                (link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group"
                    whileHover={{ y: -2 }}
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                )
              )}
            </div>

            <div className="flex gap-4">
              {[MapPin, Users, Shield].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center cursor-pointer hover:bg-rose-100 transition-colors duration-300 border border-pink-200"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="text-center mt-8 pt-8 border-t border-pink-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600">
              SentryAid © 2025 – Together, We Respond Faster.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
