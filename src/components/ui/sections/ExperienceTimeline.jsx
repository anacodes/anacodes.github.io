import React from "react";
import { Card, CardContent } from "../blocks/card";
import { Badge } from "../blocks/badge";
import { Building2, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {experiences.map((experience, index) => (
        <Card
          key={index}
          className="group transition-all duration-300 hover:shadow-lg border-0 bg-gray-50 hover:bg-white"
        >
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-600" />
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                      <Link target="_blank" href={experience.link}>{experience.company}</Link>
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                </div>
              </div>

              <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
                {experience.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {experience.skills && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {experience.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { ExperienceTimeline };
