import { IconCloud } from "@/components/magicui/icon-cloud";
import './../assets/skillsCloud.css'
import { Highlighter } from "./magicui/highlighter";
import { ChevronDownIcon } from "lucide-react";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "html5",
    "css3",
    "postgresql",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "python",
    ".NET",
    "flask",
    "php",
    "symfony",
    "mysql",
    "vite",

];

export function IconCloudDemo() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div className="skill-cloud-container">
            <a href="#skills">
                <ChevronDownIcon className="arrow-icon" />
            </a>
            <p className="skill-cloud-title">
                <Highlighter action="highlight" color="#007BFF">
                    SKILLS
                </Highlighter></p>
            <IconCloud images={images} />
        </div>
    );
}
