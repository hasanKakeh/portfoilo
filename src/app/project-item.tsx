import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInSection from "./fade-in-section";

export default function ProjectItem({ project }: any) {
  return (
    <FadeInSection>
      <div className="row my-4">
        <div className="col-md-6">
          <div className="my-3 flex-center">
            <div
              style={{
                overflow: "hidden",
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px", borderRadius: "2rem",
              }}
            >
              <div className="position-relative">
                <img
                  style={{
                    height: "14rem",
                    objectFit: "contain",
                    border: "4px solid",
                    borderRadius: "2rem",
                  }}
                  src={process.env.PUBLIC_URL + project.img}
                  alt=""
                />
                {project.is_educational ? (
                  <div
                    style={{
                      position: "absolute",
                      inset: " 0 auto auto 0",
                      background: "#08769b",
                      transformOrigin: "100% 0" /* or top left */,
                      transform: "translate(-29.3%) rotate(-45deg)",
                      boxShadow: "0 0 0 999px #08769b",
                      clipPath: "inset(0 -100%)",
                    }}
                  >
                    <span className="white">Educational</span>
                  </div>
                ) : (
                  <></>
                )}

                {project.is_private ? (
                  <FontAwesomeIcon
                    style={{
                      fontSize: "4rem",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    icon={faLock}
                  ></FontAwesomeIcon>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className=" h-100 my-3 flex-center flex-column">
            <h3>{project.title}</h3>
            <p style={{ maxWidth: "75%" }}>{project.description} </p>
            <ul
              style={{
                listStyle: "none",
                gap: ".5rem",
                maxWidth: "75%",
              }}
              className="d-flex flex-wrap my-3 p-0"
            >
              {project.made_with.map((item: any) => (
                <li
                  key={item}
                  style={{ backgroundColor: "lightgray" }}
                  className="px-2 py-1"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a target='_blank'
                href={project.view_link}
                className={
                  project.is_private
                    ? "disabled btn me-3 px-3 btn-primary"
                    : "btn px-3  me-3  btn-primary"
                }
              >
                View
              </a>
              <a target='_blank'
                href={project.github_link}
                className={
                  project.is_private
                    ? "disabled btn  px-3 btn-secondary "
                    : "btn px-3 btn-secondary "
                }
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
