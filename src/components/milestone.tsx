import { motion } from "framer-motion";

const milestones = [
  {
    year: "01-02-2025",
    title: "Vasu Paul Srikar - ECE",
    description: "IEEE YESIST'12 2025 Ambassador"
  },
  {
    year: "03-03-2025",
    title: "N. Sudhakar Reddy (Principal)",
    description: "IEEE YP STEP funding"
  },
  {
    year: "10-03-2025",
    title: "M. Kavya Reddy",
    description: "IEEE PES Ambassador"
  },
  {
    year: "19-04-2025",
    title: "T.S. Afzal",
    description: "MBU College Project Expo - 3rd Prize"
  },
  {
    year: "11-05-2025",
    title: "IEEE Hyderabad Section Internship",
    description: [
      "S. Hemachandrika - CSE",
      "B. Sameera - CSE",
      "K. Lahari - CSE",
      "Y. Harshitha - ECE"
    ]
  }, {
    year: "18-06-2025",
    title: "Vasu Paul Srikar",
    description: "Selected as an Asia Pacific IPV6 Fellow representing India"
  },
   {
    year: "12-07-2025",
    title: "Attended and received IISc Banglore Summer School Appreciation",
    description: ["1. Mounisha - EEE","2.Mydeesh - EEE"]
  },
   {
    year: "28-08-2025",
    title: "Sruthi - EEE",
    description: "Ambassador of AISYWLC 25 (All India Students Young Professional Women Engineering Congress 2025)"
  },
   {
    year: "04-09-2025",
    title: "M. Kavya Reddy",
    description: "PES Funding (hsbcp)"
  },
];

const Milestones = () => {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 py-8 px-4">
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Our Milestones
      </h2>

      <div className="relative max-w-3xl mx-auto">

        {/* vertical line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-slate-700 to-purple-900 h-full"></div>

        {milestones.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex w-full 
              ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
              justify-start`}
            
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >

            <div className="w-full md:w-5/12 bg-blue-100 p-5 rounded-xl shadow-md ml-10 md:ml-0 border-l-4 border-blue-500 hover:shadow-xl transition duration-300">
              
              {/* Year Badge */}
              <span className="inline-block px-3  text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                {item.year}
              </span>

              {/* Title */}
              <h4 className="text-base md:text-lg font-bold mt-1 text-gray-800">
                {item.title}
              </h4>

              {/* Description */}
              {Array.isArray(item.description) ? (
                <ul className="mt-2 text-sm md:text-base text-purple-600 font-medium list-disc pl-5 space-y-1">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm md:text-base text-gray-600 whitespace-pre-line">
                  <span className="text-purple-600 font-medium">
                    {item.description}
                  </span>
                </p>
              )}

            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;