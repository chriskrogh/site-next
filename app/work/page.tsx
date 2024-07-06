import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "../styles";

const Page: React.FC = () => {
  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={CONTENT_CONTAINER_CLASSNAME}>
        <h2 className="mb-8">Faire</h2>
        <div className="sm:flex justify-between items-end mb-3">
          <h4>Senior Frontend Engineer</h4>
          <p>Feb, 2024 - now</p>
        </div>
        <p className="mb-4">
          I&apos;m currently the lead frontend engineer on the order placement
          team where I steer the implementation of cart and checkout features.
          <br />
          <br />I also lead many speed initiatives to decrease page latency and
          share my learnings and implementation strategies with the team.
        </p>

        <div className="sm:flex justify-between items-end mb-3 mt-8">
          <h4>Frontend Engineer</h4>
          <p>Apr, 2022 - Feb, 2024</p>
        </div>
        <p className="mb-4">
          When I returned to Faire full-time, I hit the ground running on the
          brand acquisition team where I helped build our referral feature and
          dynamic landing pages.
          <br />
          <br />I also led the effort to migrate to{" "}
          <span>
            <a
              href="https://react.dev/reference/react/hooks"
              target="_blank"
              className="underline"
            >
              React hooks
            </a>
          </span>{" "}
          and drove the adoption of{" "}
          <span>
            <a href="https://nextjs.org" target="_blank" className="underline">
              NextJS
            </a>
          </span>{" "}
          to unlock performance wins and improve our codebase&apos;s
          maintainability.
        </p>

        <div className="sm:flex justify-between items-end mb-3 mt-8">
          <h4>Frontend Engineer Intern</h4>
          <p>Jan, 2021 - Apr, 2021</p>
        </div>
        <p className="mb-4">
          As an intern, I worked on the retailer apparel team and helped build
          features for our Winter market. I also worked on some of our internal
          tools to add UI for triggering Jira reminders & actions manually.
        </p>
      </div>
    </main>
  );
};

export default Page;
