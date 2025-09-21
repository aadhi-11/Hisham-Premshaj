import person from "../../assets/images/Hisham_Cover.png";
import "./introduction.css";

const Introduction = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center lg:items-start justify-between pt-6 sm:pt-8 lg:pt-16 xl:pt-20 pb-6 lg:pb-16 xl:pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 gap-6 lg:gap-8 xl:gap-12"
      id="introduction"
    >
      {/* Text Content */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center text-center lg:text-left">
        <div className="space-y-4 lg:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
            Hello, I'm
            <span className="block text-nowrap">
              Hisham Premshaj
            </span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700">
            I am a dedicated professional with a strong foundation in
            <span className="bg-highlight">art</span> and
            <span className="bg-highlight">writing</span>. Skilled in multitasking,
            organization, research, and both written and visual communication, I bring
            a well-rounded approach to every project. My expertise lies in producing
            <span className="bg-highlight">critical and analytical content</span>,
            supported by in-depth research on diverse social issues. With substantial
            exposure to <span className="bg-highlight">English literature</span> and
            renowned writers, I am eager to contribute fresh perspectives and creative
            value as I begin my professional journey.
          </p>

          <div className="pt-2 lg:pt-4">
            <a
              className="inline-block btn-primary btn btn-sm sm:btn-md lg:btn-lg text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              href="mailto:hishampremshaj@gmail.com"
            >
              Say Hello!
            </a>
          </div>
        </div>
      </div>

      {/* Image Content - Adjusted height to match paragraph */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg h-auto lg:h-[400px] xl:h-[450px] flex items-center">
          <img
            className="w-full h-full object-cover rounded-2xl lg:rounded-3xl shadow-2xl shadow-gray-200 bg-white"
            src={person}
            alt="Hisham Premshaj"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;