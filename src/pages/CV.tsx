import "./CV.css";
import data from "../assets/data.json";
import { i18n } from "../I18nService";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";

type LocalizedText = Record<string, string>;
type SkillRef = { id: string; type: "featured" | "normal" | "extra" };

function localized(value?: LocalizedText) {
  return i18n.getString(value);
}

function hasDescription(item: unknown): item is { description: LocalizedText } {
  return (
    typeof item === "object" &&
    item !== null &&
    "description" in item &&
    typeof (item as { description?: unknown }).description === "object"
  );
}

function hasGithub(item: unknown): item is { github: string } {
  return (
    typeof item === "object" &&
    item !== null &&
    "github" in item &&
    typeof (item as { github?: unknown }).github === "string"
  );
}

function sectionTitle(
  key: "aboutme" | "experience" | "education" | "projects",
) {
  const sections = data.sections as Record<string, LocalizedText>;
  return localized(sections[key]) ?? "";
}

function getHighlightedSkills() {
  const skillIds = new Set<string>();

  const allItems = [
    ...Object.values(data.experiences),
    ...Object.values(data.educations),
    ...Object.values(data.projects),
  ] as Array<{ skills?: SkillRef[] }>;

  for (const item of allItems) {
    for (const skill of item.skills ?? []) {
      if (skill.type !== "extra") {
        skillIds.add(skill.id);
      }
    }
  }

  return [...skillIds]
    .map((id) => {
      // @ts-expect-error: dynamic JSON key lookup
      const skill = data.skills[id];
      if (!skill) return undefined;
      return localized(skill.name) ?? id;
    })
    .filter(Boolean)
    .sort((first, second) => first!.localeCompare(second!));
}

function CV() {
  const contacts = [
    {
      icon: <EmailIcon />,
      label: data.contact.email.label,
      link: data.contact.email.link,
    },
    {
      icon: <PhoneIcon />,
      label: data.contact.phone.label,
      link: data.contact.phone.link,
    },
    {
      icon: <LinkedInIcon />,
      label: data.contact.linkedin.label,
      link: data.contact.linkedin.link,
    },
    {
      icon: <GitHubIcon />,
      label: data.contact.github.label,
      link: data.contact.github.link,
    },
  ];

  const role = localized(data.title) ?? "Computer Science Engineering Student";
  const about = localized(data.aboutme) ?? "";
  const experiences = Object.values(data.experiences);
  const educations = Object.values(data.educations);
  const projects = Object.values(data.projects).slice(0, 4);
  const skills = getHighlightedSkills();
  const isEnglish = i18n.getLang() === "en";

  return (
    <div className="cv-page">
      <article className="cv-sheet">
        <header className="cv-header">
          <div>
            <h1>Rupert De Ruyver</h1>
            <p className="cv-role">{role}</p>
          </div>
          <ul className="cv-contact">
            {contacts.map((contact) => (
              <li>
                <a href={contact.link}>{contact.label}</a>
              </li>
            ))}
          </ul>
        </header>

        <section className="cv-section">
          <h2>{sectionTitle("aboutme")}</h2>
          <p>{about}</p>
        </section>

        <div className="cv-grid">
          <main className="cv-main">
            <section className="cv-section">
              <h2>{sectionTitle("experience")}</h2>
              {experiences.map((experience, index) => (
                <div key={`experience-${index}`} className="cv-item">
                  <h3>{localized(experience.name)}</h3>
                  <p className="cv-meta">
                    {localized(experience.institution)} •{" "}
                    {localized(experience.period)}
                  </p>
                  {hasDescription(experience) && (
                    <p>{localized(experience.description)}</p>
                  )}
                </div>
              ))}
            </section>

            <section className="cv-section">
              <h2>{sectionTitle("education")}</h2>
              {educations.map((education, index) => (
                <div key={`education-${index}`} className="cv-item">
                  <h3>{localized(education.name)}</h3>
                  <p className="cv-meta">
                    {localized(education.institution)} •{" "}
                    {localized(education.period)}
                  </p>
                  {hasDescription(education) && (
                    <p>{localized(education.description)}</p>
                  )}
                </div>
              ))}
            </section>
          </main>

          <aside className="cv-sidebar">
            <section className="cv-section">
              <h2>{isEnglish ? "Core Skills" : "Kernvaardigheden"}</h2>
              <ul className="cv-tag-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>

            <section className="cv-section">
              <h2>{isEnglish ? "Projects" : "Projecten"}</h2>
              {projects.map((project, index) => (
                <div
                  key={`project-${index}`}
                  className="cv-item cv-item-compact"
                >
                  <h3>{localized(project.name)}</h3>
                  <p>{localized(project.description)}</p>
                  {hasGithub(project) && (
                    <p className="cv-link-line">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        {isEnglish ? "Repository" : "Repository"}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
}

export default CV;
