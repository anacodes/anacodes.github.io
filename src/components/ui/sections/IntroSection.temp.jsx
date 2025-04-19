"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function IntroSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => [
    "Anagha Ajnadkar",
    "SDE at Goldman Sachs",
    "Problem Solver",
    "Always Learning",
    "Music & Book lover",
  ]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-44 items-center justify-center flex-col">
          <div className="flex gap-2 flex-col">
            <h1 className="text-5xl md:text-5xl tracking-tighter text-center font-regular border-b-2 border-solid border-gray-200">
              <span className="text-spektr-cyan-50">Hello world, I'm</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center sm:pb-8 md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 55, damping: 9 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center sm:pt-4">
              With a strong background in Computer Science, I enjoy turning
              complex problems into simple, efficient solutions. Passionate
              about building technology that creates real impact.
            </p>
          </div>
          <div className="flex flex-row gap-3"></div>
        </div>
      </div>
    </div>
  );
}

export { IntroSection };
