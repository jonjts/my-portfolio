import {
  GithubLogo,
  LinkedinLogo,
  Envelope,
} from "@phosphor-icons/react/dist/ssr";

const ICON_SIZE = 24;
const ICON_COLOR = "var(--purple-300)";
const LINKS = {
  github: "https://github.com/jonjts",
  linkedin: "https://linkedin.com/in/jonjts",
  email: "mailto:jonjts@gmail.com",
};

export const Footer = () => (
  <footer className="w-full flex flex-row bg-gray-800 justify-between p-6 pr-10 pl-10  rounded-full">
    <p>Follow me</p>
    <div className="flex flex-row gap-4">
      <a
        href={`${LINKS.github}`}
        target="_blank"
        rel="noreferrer"
        aria-label="github"
      >
        <GithubLogo color={ICON_COLOR} size={ICON_SIZE} />
      </a>
      <a
        href={`${LINKS.linkedin}`}
        target="_blank"
        rel="noreferrer"
        aria-label="linkedin"
      >
        <LinkedinLogo color={ICON_COLOR} size={ICON_SIZE} />
      </a>
      <a
        href={`${LINKS.email}`}
        target="_blank"
        rel="noreferrer"
        aria-label="email"
      >
        <Envelope color={ICON_COLOR} size={ICON_SIZE} />
      </a>
    </div>
  </footer>
);
