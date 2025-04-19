import React from "react";
import { EducationCard } from "../blocks/educationCard";
import { educations } from "../../data";

const EducationSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Education</h1>
        <p className="text-muted-foreground pb-2">
          My journey in Computer Science, building a strong tech foundation.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {educations.map((education, index) => (
            <EducationCard
            key={index}
            variant="gradient"
            {...education}
            className="max-w-[600px] bg-background"
            />
          )
        )}
      </div>
    </div>
  );
};

export { EducationSection };
