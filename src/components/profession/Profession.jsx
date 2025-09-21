import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Content & Communication",
    description:
      "I create, edit, and refine impactful content — from research-driven writing and critical essays to creative projects and promotional material. Skilled in proofreading, translation, and transcription, I ensure clarity, precision, and engagement in every piece.",
  },
  {
    id: 2,
    title: "Creative & Visual Arts",
    description:
      "I bring ideas to life through visual storytelling — painting, photography, caricature, poster design, and performance. With a strong artistic perspective, I apply design thinking and creativity to projects that demand originality and audience connection.",
  },
  {
    id: 3,
    title: "Research & Project Leadership",
    description:
      "I conduct in-depth research, analyze complex ideas, and structure interdisciplinary projects. Experienced in academic studies, event organization, and NGO work, I excel at problem-solving, team collaboration, and leading initiatives from concept to execution.",
  },
];


const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I combine research, creativity, and communication to deliver 
            impactful work across academic, creative, and organizational domains.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
          My expertise lies in analyzing ideas, crafting meaningful content, 
          and leading collaborative projects — with the adaptability to explore 
          opportunities in both creative and technology-driven fields.
          </p>
        </div>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
