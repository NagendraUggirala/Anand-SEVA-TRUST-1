import React, { useState } from "react";
import { Link } from "react-router-dom";
 
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);
 
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Our Programs" },
    { path: "/industries", label: "Donations" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" }
  ];
 
  const openLegalModal = (type) => {
    setActiveModal(type);
  };
 
  const closeLegalModal = () => {
    setActiveModal(null);
  };
 
  const SocialIcons = {};
 
  const legalContent = {
    Privacy: {
      title: "Privacy Policy",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700"><strong>Last Updated:</strong> ${currentYear}</p>
         
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Information We Collect</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Donation history and preferences</li>
              <li>Communication history and inquiries</li>
              <li>Volunteer information and interests</li>
            </ul>
          </div>
 
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">How We Use Your Information</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Process donations and maintain records</li>
              <li>Coordinate volunteer activities</li>
              <li>Send updates about our programs and initiatives</li>
              <li>Improve our services and community outreach</li>
            </ul>
          </div>
 
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Data Protection</h4>
            <p class="text-gray-600">We implement security measures to protect your personal information and maintain confidentiality in all trust activities.</p>
          </div>
        </div>
      `
    },
    Terms: {
      title: "Terms & Conditions",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700"><strong>Effective Date:</strong> ${currentYear}</p>
         
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Donation Policy</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>All donations are voluntary and non-refundable</li>
              <li>Funds are utilized for charitable activities as per trust objectives</li>
              <li>Donation receipts are provided for all contributions</li>
              <li>Transparency in fund utilization is maintained</li>
            </ul>
          </div>
 
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Volunteer Guidelines</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Volunteers must adhere to trust code of conduct</li>
              <li>Respect and confidentiality towards beneficiaries is mandatory</li>
              <li>Timely commitment to assigned activities is expected</li>
              <li>Background verification may be required for certain activities</li>
            </ul>
          </div>
 
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Legal Compliance</h4>
            <p class="text-gray-600">All trust activities are governed by applicable laws and regulations. We maintain proper documentation and transparency in all operations.</p>
          </div>
        </div>
      `
    },
    Disclaimer: {
      title: "Disclaimer",
      content: `
        <div class="space-y-4">
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Information Accuracy</h4>
            <p class="text-gray-600">While we strive to provide accurate and up-to-date information about our programs and activities, we cannot guarantee the completeness or accuracy of all content. Visitors should:</p>
            <ul class="list-disc list-inside space-y-1 text-gray-600 mt-2">
              <li>Verify program details before participation</li>
              <li>Contact trust representatives for specific queries</li>
              <li>Check official communications for updates</li>
            </ul>
          </div>
 
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">External Links</h4>
            <p class="text-gray-600">Our website may contain links to third-party sites. We are not responsible for the content or privacy practices of these external sites.</p>
          </div>
 
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Program Variations</h4>
            <p class="text-gray-600">Program schedules, activities, and beneficiary details may change based on community needs and resource availability.</p>
          </div>
        </div>
      `
    }
  };
 
  return (
    <>
      <footer
        className="text-white"
        style={{ background: "linear-gradient(135deg, #1e3c72, #2a5298)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 
          <div className="py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
 
              {/* Company Info */}
              <div className="lg:col-span-4 text-left">
                <div className="flex items-start space-x-4 mb-6">
 
                  <div className="flex items-center space-x-3 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-white/30 overflow-hidden shadow-lg">
                      <img src="/images/image.png" alt="Founder" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="w-14 h-14">
                      <img src="/images/Anandhlogo.png" alt="Anand Seva Trust" className="w-full h-full object-contain" />
                    </div>
                  </div>
 
                  {/* ★ UPDATED RESPONSIVE TITLE HERE ★ */}
                  <div className="flex flex-col">
                    <h4 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold leading-tight">
                      <span className="text-orange-500">ANAND</span>{" "}
                      <span className="text-white">SEVA TRUST</span>
                    </h4>
                    <p className="text-gray-300 text-sm italic mt-1">
                      "Serving Humanity with Compassion"
                    </p>
                  </div>
                </div>
 
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  A spiritual and social welfare trust devoted to serving humanity with compassion and devotion.
                </p>
 
                <p className="text-gray-300 text-sm leading-relaxed">
                  We work to provide support, guidance, and welfare services that enrich lives and strengthen communities.
                </p>
              </div>
 
              {/* Quick Links */}
              <div className="lg:col-span-2 text-left">
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="block text-gray-300 py-1 text-sm hover:text-white transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
 
              {/* Contact */}
              <div className="lg:col-span-3 text-left">
                <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-map-marker-alt text-white" />
                    <span className="text-gray-300">
                      Hiko, 131/A, 2nd Floor<br />
                      Banjara Hills, Hyderabad<br />
                      Telangana - 500034
                    </span>
                  </div>
 
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-phone text-white" />
                    <span className="text-gray-300">+91 1800 123 4857</span>
                  </div>
 
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-envelope text-white" />
                    <span className="text-gray-300">info@anandsevatrust.com</span>
                  </div>
                </div>
              </div>
 
              {/* Follow Us */}
              <div className="lg:col-span-3 text-left">
                <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-all">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-all">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-all">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-all">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-all">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
 
            </div>
          </div>
 
          {/* Bottom Footer */}
          <div className="border-t border-white/20 pt-6 pb-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
              <p className="text-gray-300 text-sm">
                © {currentYear} <span className="text-white font-semibold">Anand Seva Trust</span>. All rights reserved.
              </p>
 
              <div className="flex gap-4">
                {["Privacy", "Terms", "Disclaimer"].map((item) => (
                  <button
                    key={item}
                    onClick={() => openLegalModal(item)}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium hover:underline"
                  >
                    {item}
                  </button>
                ))}
              </div>
 
              <p className="text-gray-300 text-sm">
                Designed by{" "}
                <Link to="https://designcareermetrics.com" className="text-white hover:underline font-medium">
                  Design Career Metrics
                </Link>
              </p>
            </div>
          </div>
 
        </div>
      </footer>
 
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {legalContent[activeModal]?.title}
                </h3>
                <button
                  onClick={closeLegalModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
 
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: legalContent[activeModal]?.content }}
              />
 
              <div className="flex justify-end mt-6">
                <button
                  onClick={closeLegalModal}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
 
export default Footer;
