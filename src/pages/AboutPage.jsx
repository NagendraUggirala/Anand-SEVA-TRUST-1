import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Enhanced Hero Section with Dharmo Rakshati Rakshitah */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-yellow-600 via-orange-500 to-blue-700 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-24 -top-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -right-24 -bottom-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center text-white"
          >
            {/* Main Sanskrit Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 md:mb-10"
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 shadow-2xl mx-2">
                {/* Section Title */}
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-300 mb-4 md:mb-5 font-sans leading-tight">
                  सेवा धर्मो रक्षति
                </div>

                {/* Transliteration */}
                <div className="text-base sm:text-lg md:text-2xl text-blue-100 italic mb-4 md:mb-5">
                  "Seva Dharmo Rakshati"
                </div>

                {/* Separator */}
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-4 md:mb-5"></div>

                {/* Meaning / Description */}
                <div className="text-sm sm:text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
                  Extending care, guidance, and support protects those in need
                  and empowers individuals, families, and communities to rebuild
                  their lives with dignity and hope.
                </div>
              </div>
            </motion.div>

            {/* Main Title - Smaller Size */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-blue-100"
            >
              Our <span className="text-orange-300">Story</span>
            </motion.h1>

            {/* Philosophy Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed px-2 sm:px-4">
                Anand Seva Trust was founded on the belief that service is the
                highest form of duty. Guided by the timeless principle of “Seva
                Dharmo Rakshati,” our journey is dedicated to protecting
                dignity, nurturing hope, and empowering individuals and families
                through compassionate action.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section - Enhanced for Mobile */}
      <section className="py-12 md:py-15 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left: Image card with responsive sizing */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center w-full lg:justify-start order-2 lg:order-1"
              >
                <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                  {/* Responsive Image card */}
                  <div className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100 bg-white transform transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02] group-hover:ring-2 group-hover:ring-orange-200">
                    <img
                      src="/images/image.png"
                      alt="Founder & Chairman"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                    {/* Founder & Chairman Badge - On Image */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="absolute left-4 md:left-6 bottom-4 md:bottom-6 transform group-hover:scale-110 transition-transform duration-300"
                    >
                      <div className="bg-white/95 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full shadow-lg text-xs md:text-sm font-semibold text-gray-700 border border-gray-100 group-hover:border-orange-200 group-hover:shadow-xl transition-all duration-300">
                        <div className="text-xs text-gray-500 group-hover:text-orange-500 transition-colors">
                          Founder & Chairman
                        </div>
                        <div className="uppercase text-xs tracking-wide text-blue-600">
                          ANAND SEVA TRUST
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Quote Section Under Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-6 group"
                  >
                    <div className="bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-xl p-4 md:p-6 border-l-4 border-orange-500 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-orange-600 mx-2 sm:mx-0">
                      <p className="text-gray-700 italic text-sm sm:text-base md:text-lg leading-relaxed text-center">
                        "True service lies in uplifting others. Through
                        compassion, care, and guidance, we strive to restore
                        dignity, inspire hope, and create opportunities for a
                        brighter future for every individual we serve."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right: Content with improved mobile alignment */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8 order-1 lg:order-2 w-full"
              >
                <div className="w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-2 text-center lg:text-left">
                    Anand
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-orange-500 font-semibold mt-1 text-center lg:text-left">
                    Founder & Chairman
                  </p>

                  <div className="mt-4 md:mt-6 text-gray-700 space-y-4 w-full">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      A visionary leader driven by compassion and social
                      responsibility, Anand founded Anand Seva Trust to support
                      children, families, and  individuals who may be drifting toward negative influences or unsafe paths,families who have been left without care or stability

                    </p>

                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      With an engineering background and decades of hands-on
                      community engagement, Mr. Anand combines structured
                      planning with heartfelt service. Under his guidance, the
                      Trust has grown into a platform that empowers lives
                      through education, healthcare, emotional support, and
                      sustainable development initiatives.
                    </p>

                    {/* Added Imports & Exports Information */}
                    <div className="bg-blue-50 rounded-lg p-4 md:p-6 mt-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-800 text-base sm:text-lg md:text-xl mb-2">
                        About Anand Seva Trust
                      </h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        Is a compassionate initiative dedicated to supporting individuals and families
who are facing difficult or vulnerable circumstances. Our mission is to guide, uplift, and
empower those who may feel abandoned, unsupported, or at risk of falling into unhealthy
environments.
                      </p>
                    </div>
                  </div>

                  {/* Stats Section on Right Side Below Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="mt-8 w-full"
                  >
                    <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto lg:mx-0">
                      <EnhancedStatCard
                        title="25+"
                        subtitle="Years of Service"
                        delay={0}
                      />
                      <EnhancedStatCard
                        title="10,000+"
                        subtitle="Lives Impacted"
                        delay={0.1}
                      />
                      <EnhancedStatCard
                        title="100+"
                        subtitle="Communities Reached"
                        delay={0.2}
                      />
                      <EnhancedStatCard
                        title="300+"
                        subtitle="Volunteers & Supporters"
                        delay={0.3}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Section - Mobile Optimized */}
      <section ref={ref1} className="py-8 md:py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800 mb-2">
                About Anand Seva Trust
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
                Anand Seva Trust supports individuals and families in need,
                providing care, guidance, and hope for a brighter future.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-stretch px-2 sm:px-0">
              <motion.div variants={itemVariants} className="flex">
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full w-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-800 mb-2 text-left">
                        About Anand Seva Trust
                      </h3>
                      <div className="space-y-4 text-left">
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                          Anand Seva Trust is a compassionate initiative
                          dedicated to supporting individuals and families
                          facing difficult circumstances. We extend care,
                          guidance, and empowerment to children, families, and
                          individuals, helping them rebuild their lives with
                          hope, dignity, and a brighter future.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                          We provide Education & Learning Support: quality
                          education, academic guidance, skill development, and
                          moral values. Care, Protection & Guidance: safe,
                          supportive environment, emotional healing, counseling,
                          and confidence-building. A Pathway Toward a Better
                          Tomorrow: structured programs, compassionate care, and
                          opportunities for growth and stability. No child or
                          family is left behind; Anand Seva Trust ensures
                          guidance and the right direction to rise with hope and
                          purpose.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex">
                <div className="bg-gradient-to-br from-orange-50 to-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col h-full w-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-800 mb-2 text-left">
                        Our Journey of Service
                      </h3>

                      <div className="space-y-4 text-left">
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                          Anand Seva Trust began with a simple mission—to stand
                          beside those in need. Over the years, our efforts have
                          grown into structured programs that provide education,
                          guidance, protection, and hope to vulnerable
                          communities.
                        </p>

                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base md:text-lg">
                          <li>Education & learning support</li>
                          <li>Healthcare & emotional well-being</li>
                          <li>Child protection & safe environments</li>
                          <li>Community empowerment programs</li>
                        </ul>

                        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 px-2 sm:px-4">
                          Anand Seva Trust is committed to building a future
                          where every child, family, and individual has access
                          to care, guidance, and opportunity. Through structured
                          programs and compassionate service, we strive to
                          restore dignity and create lasting positive change.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Vision - Mobile Optimized */}
      <section ref={ref2} className="pt-5 md:pt-12 pb-4 md:pb-6 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
                Building Hope, Today
              </h2>
              <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 px-2 sm:px-4">
                Anand Seva Trust supports children, families, and individuals in
                need by providing care, guidance, education, and structured
                programs. Our mission is to empower lives, restore dignity, and
                create opportunities for a brighter, safer future for every
                person we reach.
              </p>
              <motion.div className="inline-block">
                <Link
                  to="/contact"
                  className="relative bg-orange-500 hover:bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300 text-sm sm:text-base inline-flex items-center"
                >
                  <span className="relative z-10">Join Our Mission</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-2xl font-bold mb-4 md:mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto px-2 sm:px-4">
              Join Anand Seva Trust in extending care, guidance, and support to
              families, children, and individuals in need. Be part of a journey
              that empowers lives and builds hope for a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

/* Enhanced Stat Card Component */
function EnhancedStatCard({ title, subtitle, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -4,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-5 flex flex-col items-start justify-center ring-1 ring-gray-100 hover:ring-2 hover:ring-orange-200 hover:shadow-xl transition-all duration-300">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 transform group-hover:scale-110">
          {title}
        </div>
        <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-600 transition-colors duration-300">
          {subtitle}
        </div>

        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>
    </motion.div>
  );
}
