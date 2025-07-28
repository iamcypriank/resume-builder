import React from "react";
import Button from "./Button";
import { motion} from "motion/react"

export default function Preview({ data, setShowPreview }) {
  function handleShow() {
    setShowPreview(false);
  }

  return (
    <motion.div
    initial={{scale:0 , opacity : 0}}
    animate={{ scale: 1 , opacity : 1 }}
    className=" resume-container print:bg-white flex  gap-4 flex-col-reverse items-center">
      <div
        id="resume-preview"
        className="
        max-[380px]:scale-40
        max-[430px]:scale-45
        max-[530px]:scale-50
        max-[625px]:scale-60
        max-[700px]:scale-70
        max-[850px]:scale-80
        origin-top font-inter p-[40px] min-h-[1123px] w-[794px] bg-white"
      >
        <div>
          {data.personalData.fname !== "" && (
            <h1 className="text-[32px] font-bold text-center">
              {data.personalData.fname} {data.personalData.lname}
            </h1>
          )}
        </div>

        <div className="text-[12px] flex justify-center gap-1 flex-wrap">
          {data.personalData.contact && <p>+91-{data.personalData.contact}</p>}
          {data.personalData.email && <p>| {data.personalData.email}</p>}
          {data.personalData.linkedin && (
            <p>
              |{" "}
              <a
                href={data.personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </p>
          )}
          {data.personalData.github && (
            <p>
              |{" "}
              <a
                href={data.personalData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
          )}
        </div>
        {data.personalData.fname && <hr className="my-2" />}

        {/* Education Section */}
        {data.education.length !== 0 && (
          <div className="flex flex-col mt-2">
            <h2 className="text-[16px] font-bold">Education</h2>
            <div className="flex flex-col gap-2">
              {data.education.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-[16px] font-bold">{item.degree}</h3>
                  <p className="text-[14px] font-medium">{item.institute}</p>
                  <p className="text-[14px]">{item.location}</p>
                  <p className="text-[14px]">
                    {item.start} - {item.end}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {data.experience.length !== 0 && (
          <div className="flex flex-col mt-2">
            <h2 className="text-[16px] font-bold">Experience</h2>
            <div className="flex flex-col gap-1">
              {data.experience.map((item) => (
                <div key={item.id}>
                  <h3 className="text-[16px] font-bold">
                    {item.jobTitle} - {item.company}
                  </h3>
                  <p className="text-[14px] font-medium">
                    {item.location} - {item.start} - {item.end}
                  </p>
                  <ul className="text-[14px] list-disc ml-4">
                    {item.responsibilities.map((res, index) => (
                      <li key={index}>{res}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {data.projects.length !== 0 && (
          <div className="flex flex-col mt-2">
            <h2 className="text-[16px] font-bold">Projects</h2>
            <div className="flex flex-col gap-1">
              {data.projects.map((item, index) => (
                <div key={index}>
                  <h3 className="text-[16px] font-bold">{item.title}</h3>
                  <p className="text-[14px] font-bold">
                    Tech Stack: {item.techstack}
                  </p>
                  <p className="text-[14px] font-medium">{item.description}</p>
                  <ul className="text-[14px] list-disc ml-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        <div className="mt-2 text-[14px]">
          {data.technicalskills.length !== 0 && (
            <div>
              <p>
                <b className="text-[16px]">Technical Skills:</b>{" "}
                {data.technicalskills.join(", ")}
              </p>
            </div>
          )}
          {data.softskills.length !== 0 && (
            <div>
              <p>
                <b className="text-[16px]">Soft Skills:</b>{" "}
                {data.softskills.join(", ")}
              </p>
            </div>
          )}
          {data.language.length !== 0 && (
            <div>
              <p>
                <b className="text-[16px]">Languages:</b>{" "}
                {data.language.join(", ")}
              </p>
            </div>
          )}
        </div>

        {/* Certifications Section */}
        {data.certifications.length !== 0 && (
          <div className="mt-2 text-[14px]">
            <h2 className="text-[16px] font-bold">Certifications</h2>
            <ul className="list-disc ml-4">
              {data.certifications.map((cer, index) => (
                <li key={index}>{cer}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements Section */}
        {data.achivements.length !== 0 && (
          <div className="mt-2 text-[14px]">
            <h2 className="text-[16px] font-bold">Achievements</h2>
            <ul className="list-disc ml-4">
              {data.achivements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <Button type="button" handle={handleShow}>
          Close
        </Button>
      </div>
    </motion.div>
  );
}


