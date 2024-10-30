import TecCard from "./TecCard";

const REACT_JS_COLOR = "#61DAFB";

export const TecsBeenUsedSection = () => (
  <section className="flex flex-col gap-16">
    <h3 className="text-gray-300">
      These are the
      <br />
      technologies I’ve been using
    </h3>
    <div className="flex flex-row justify-center">
      <div className="columns-1 sm:columns-1 md:columns-2 grid-flow-col gap-8">
        <TecCard title="Front-end Engineer Design">
          <TecCard.Item
            icon={"mdi:react"}
            iconColor={REACT_JS_COLOR}
            description="React JS"
          />
          <TecCard.Item
            icon={"mdi:react"}
            iconColor="var(--purple-300)"
            description="React Native"
          />
          <TecCard.Item
            iconColor="var(--white)"
            icon={"ri:nextjs-fill"}
            description="Next.JS"
          />
          <TecCard.Item icon={"devicon:figma"} description="Figma" />
          <TecCard.Item
            icon={"vscode-icons:file-type-jest"}
            description="Jest"
          />
          <TecCard.Item
            icon={"logos:testing-library"}
            description="React Testing Library"
          />
        </TecCard>
        <TecCard title="Back-end" className="break-after-column">
          <TecCard.Item icon={"logos:nodejs-icon"} description="Node.js" />
        </TecCard>
        <TecCard
          title="Languages"
          className="break-before-left md:break-before-auto"
        >
          <TecCard.Item icon={"devicon:javascript"} description="Javascript" />
          <TecCard.Item icon={"devicon:typescript"} description="Typescript" />
          <TecCard.Item icon={"devicon:java"} description="Java" />
        </TecCard>
        <TecCard title="Devops">
          <TecCard.Item
            icon={"devicon-plain:githubactions"}
            iconColor="var(--white)"
            description="Github Actions"
          />
          <TecCard.Item icon={"logos:nginx"} description="Nginx" />
        </TecCard>
      </div>
    </div>
  </section>
);
