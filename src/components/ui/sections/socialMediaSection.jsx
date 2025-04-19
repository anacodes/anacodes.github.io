"use client";
import { Button } from "../blocks/button";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiMailLine
} from "@remixicon/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../blocks/tooltip";

function SocialMediaSection() {
  return (
    <div className="flex flex-wrap gap-2">
      <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
        <a href="mailto:anagha.ajnadkar@gmail.com" target="_blank">
        <Button variant="outline" size="md" aria-label="Add new item">
          <RiMailLine
            className="text-[#DB4437] dark:text-primary"
            size={16}
            aria-hidden="true"
          />
        </Button>
        </a>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-md tracking-tight text-muted-foreground">Mail to: anaghaajnadkar@gmail.com</TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
        <a href="https://www.linkedin.com/in/anagha-ajnadkar/" target="_blank">
        <Button variant="outline" size="md" aria-label="Add new item">
          <RiLinkedinFill
            className="text-[#1877f2] dark:text-primary"
            size={16}
            aria-hidden="true"
          />
        </Button>
        </a>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-md tracking-tight text-muted-foreground">Linkedin: anagha-ajnadkar</TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
        <a href="https://github.com/anacodes" target="_blank">
        <Button variant="outline" size="md" aria-label="Add new item">
          <RiGithubFill
            className="text-black dark:text-primary"
            size={16}
            aria-hidden="true"
          />
        </Button>
        </a>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-md tracking-tight text-muted-foreground">Github: anacodes</TooltipContent>
      </Tooltip>
    </TooltipProvider>
    </div>
  );
}

export { SocialMediaSection };
