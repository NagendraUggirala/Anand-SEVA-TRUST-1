import React, { useState, useEffect } from "react";
import { Heart, HelpingHand, School, UsersRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Industries() {
  const [monthlyOptions] = useState(["₹500","₹1000","₹1500","₹2500","₹5000"]);
  const [oneTimeOptions] = useState(["₹250","₹500","₹1000","₹2500","₹5000","₹10000","₹20000"]);

  const [mode, setMode] = useState("monthly");
  const [selectedMonthly, setSelectedMonthly] = useState(null);
  const [selectedOneTime, setSelectedOneTime] = useState(null);
  const [customMonthly, setCustomMonthly] = useState("");
  const [customOneTime, setCustomOneTime] = useState("");
  const [coverFees, setCoverFees] = useState(false);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  // IMAGE-ONLY CAROUSEL
  const carouselSlides = [
    "https://thumbs.dreamstime.com/b/applause-happy-teacher-kids-classroom-learning-support-assessment-group-celebration-child-development-401193168.jpg",
    "https://lirp.cdn-website.com/3f4c882c/dms3rep/multi/opt/Top+10+Genuine+Charity+Organizations+in+India+%281%29-21cf4d8a-640w.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkcCd2subBwtWy6T7k8Mc9rebdAbzRSIZ3w&s",
  ];

  // Auto-scroll every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselIndex]);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCarouselIndex((carouselIndex + 1) % carouselSlides.length);
      setFade(true);
    }, 150);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCarouselIndex(
        carouselIndex === 0 ? carouselSlides.length - 1 : carouselIndex - 1
      );
      setFade(true);
    }, 150);
  };

  const goToInfo = () => {
    const amount =
      mode === "monthly"
        ? selectedMonthly || customMonthly
        : selectedOneTime || customOneTime;

    if (!amount) {
      alert("Please select or enter an amount");
      return;
    }

    // Save to localStorage
    const donationData = { mode, amount, coverFees };
    localStorage.setItem("donationData", JSON.stringify(donationData));

    // Navigate to Info page
    navigate("/info");
  };

  return (
    <div className="overflow-hidden py-4"> {/* Further reduced from py-8 */}
      <div className="container mx-auto px-2 md:px-12">

        {/* TITLE - Further reduced gap above */}
        <div className="text-center mb-4"> {/* Further reduced from mb-6 */}
          <h2 className="text-3xl font-bold">EMPOWER CHILDREN & FAMILIES</h2>
          <p className="text-blue-600 mt-1 font-semibold uppercase"> {/* Reduced mt-2 to mt-1 */}
            Donate to Anand Seva Trust
          </p>
        </div>
<br></br><br></br>
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN: CAROUSEL + CONTENT */}
          <div className="space-y-6">

            {/* IMAGE CAROUSEL */}
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">

              <img
                src={carouselSlides[carouselIndex]}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
                alt="carousel content"
              />

              {/* LEFT ARROW */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow"
              >
                ◀
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow"
              >
                ▶
              </button>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-700 leading-relaxed text-lg">
              Anand Seva Trust supports families and children in need.
              We uplift, guide, and protect vulnerable individuals.
              Education and emotional care are our foundation.
              Your support restores hope and strengthens lives.
              Together, we build brighter and safer futures.
            </p>

            {/* THREE FIXED IMAGES BELOW */}
            <div className="grid grid-cols-3 gap-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjkD7RnYcSsnovmFJ7JSFNZUIXIa5VRm6IA&s" className="rounded-lg shadow h-28 object-cover" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-Srnfn_impAv1mu_qaH5VMU5dORfs__zHg&s" className="rounded-lg shadow h-28 object-cover" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-Srnfn_impAv1mu_qaH5VMU5dORfs__zHg&s" className="rounded-lg shadow h-28 object-cover" />
            </div>
          </div>

          {/* RIGHT DONATION CARD */}
          <div className="bg-white rounded-xl shadow-md border overflow-hidden">

            {/* TOGGLE */}
            <div className="flex items-center justify-center gap-4 p-6 border-b">
              <button
                onClick={() => setMode("monthly")}
                className={`px-6 py-3 rounded-full font-semibold border transition 
                  ${mode === "monthly" ? "bg-orange-500 text-white border-orange-600"
                  : "bg-white text-black border-gray-300 hover:bg-orange-100"}`}
              >
                MONTHLY
              </button>

              <button
                onClick={() => setMode("oneTime")}
                className={`px-6 py-3 rounded-full font-semibold border transition 
                  ${mode === "oneTime" ? "bg-orange-500 text-white border-orange-600"
                  : "bg-white text-black border-gray-300 hover:bg-orange-100"}`}
              >
                ONE-TIME
              </button>
            </div>

            <div className="p-8">

              {/* ICONS */}
              <div className="flex justify-center gap-6 mb-6">
                <Heart size={44} className="text-orange-500" />
                <HelpingHand size={44} className="text-blue-600" />
                <School size={44} className="text-green-600" />
                <UsersRound size={44} className="text-purple-600" />
              </div>

              {/* MONTHLY */}
              {mode === "monthly" && (
                <>
                  <h3 className="text-center text-lg font-bold mb-4">Monthly Support Plan</h3>

                  <div className="grid grid-cols-2 gap-4">
                    {monthlyOptions.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedMonthly(amount);
                          setCustomMonthly("");
                        }}
                        className={`px-4 py-3 rounded-lg border font-semibold transition 
                          ${selectedMonthly === amount
                            ? "bg-orange-500 text-white border-orange-600"
                            : "bg-white text-black border-gray-400 hover:bg-orange-200"}`}
                      >
                        {amount}/MO
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    placeholder="Custom Monthly Amount (₹)"
                    value={customMonthly}
                    onChange={(e) => {
                      setCustomMonthly(e.target.value);
                      setSelectedMonthly(null);
                    }}
                    className="w-full mt-5 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                  />
                </>
              )}

              {/* ONE-TIME */}
              {mode === "oneTime" && (
                <>
                  <h3 className="text-center text-lg font-bold mb-4">One-Time Donation</h3>

                  <div className="grid grid-cols-3 gap-4">
                    {oneTimeOptions.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedOneTime(amount);
                          setCustomOneTime("");
                        }}
                        className={`px-4 py-3 rounded-lg border font-bold transition 
                          ${selectedOneTime === amount
                            ? "bg-orange-500 text-white border-orange-600"
                            : "bg-white text-black border-gray-400 hover:bg-orange-200"}`}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    placeholder="Custom One-Time Amount (₹)"
                    value={customOneTime}
                    onChange={(e) => {
                      setCustomOneTime(e.target.value);
                      setSelectedOneTime(null);
                    }}
                    className="w-full mt-5 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                  />
                </>
              )}

              {/* COVER FEES */}
              <label className="flex items-center gap-3 mt-6 cursor-pointer">
                <input
                  type="checkbox"
                  checked={coverFees}
                  onChange={() => setCoverFees(!coverFees)}
                  className="w-4 h-4"
                />
                <span className="text-gray-700 text-sm">I'll cover my transaction fees.</span>
              </label>

              {/* DONATE BUTTON */}
              <div className="text-center mt-8">
                <button
                  onClick={goToInfo}
                  className="px-12 py-3 bg-green-600 text-white font-bold rounded-lg shadow hover:bg-green-700"
                >
                  {mode === "monthly" ? "Donate Monthly" : "Donate Once"}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;