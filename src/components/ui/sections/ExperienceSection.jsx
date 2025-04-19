import { ExperienceTimeline } from "./ExperienceTimeline";
import { experiences } from "../../data";

const ExperienceSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Experience</h1>
        <p className="text-muted-foreground">
          My professional journey and the companies I've worked with.
        </p>
      </div>
      <ExperienceTimeline experiences={experiences} />
    </div>
  );
};

export { ExperienceSection };
