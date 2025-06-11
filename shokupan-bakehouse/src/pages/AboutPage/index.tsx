import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#fff9f6] text-[#333] font-sans">
      {/* Banner  Section */}
      <div >
        
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-0">
        <div className="md:flex md:items-start gap-10">
          <img src="/images/team-photo.jpg" alt="Shokupan Bakehouse Team" className="w-full md:w-1/2 rounded shadow-md" />
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h2 className="text-3xl font-semibold text-[#8B0000]">About Shokupan Bakehouse</h2>
            <p className="mt-4 text-lg">
                text            
            </p>
            <p className="mt-4 text-lg">
                text
            </p>
          </div>
        </div>

        {/* Our History */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#8B0000] mb-4">Our History</h2>
          <p className="text-lg">
            text
          </p>
        </div>

        {/* Our Values */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#8B0000] mb-4">Our Values</h2>
          <div className="flex flex-col md:flex-row justify-center gap-10 mt-8">
            <div className="flex-1"> 
              <img src="" alt="Craftsmanship Icon" className="mx-auto h-12 mb-4" />
              <h3 className="text-xl font-semibold">Craftsmanship</h3>
              <p className="mt-2 text-base">text</p>
            </div>
            <div className="flex-1">
              <img src="" alt="Community Icon" className="mx-auto h-12 mb-4" />
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="mt-2 text-base">text</p>
            </div>
            <div className="flex-1">
              <img src="" alt="Quality Icon" className="mx-auto h-12 mb-4" />
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="mt-2 text-base">text</p>
            </div>
          </div>
          <button className="mt-8 bg-[#8B0000] text-white px-6 py-2 rounded hover:bg-[#a30f0f] transition">Explore Our Menu</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
