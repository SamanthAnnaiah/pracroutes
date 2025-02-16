import Urlshortner from "./Urlshortner";
import Urllister from "./Urllister";
import workingIllustration from "../assets/images/illustration-working.svg";
import iconBrand from "../assets/images/icon-brand-recognition.svg";
import iconDetailed from "../assets/images/icon-detailed-records.svg";
import iconFully from "../assets/images/icon-fully-customizable.svg";
import Highlights from "./Highlights";

function Home() {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-56">
        <div className="flex flex-col justify-start items-start w-[30%] gap-5">
          <h1 className="text-4xl font-bold">More than just shorter links</h1>
          <p className="text-gray-500">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <button className="bg-cyan-400 text-white-500 p-2 rounded-md btn">
            Get Started
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-[30%] mb-7">
          <img src={workingIllustration} alt="illustration" />
        </div>
      </div>
      <Urlshortner />
      <Urllister />
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-2xl font-bold mt-4">Advanced Statistics</h1>
        <p className="text-gray-500">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-10 w-[60%] m-auto mt-10 mb-5">
        <Highlights
          himg={iconBrand}
          hname="Brand Recognition"
          hdesc="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        />
        <Highlights
          himg={iconDetailed}
          hname="Detailed Records"
          hdesc="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <Highlights
          himg={iconFully}
          hname="Fully Customizable"
          hdesc="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </>
  );
}

export default Home;
