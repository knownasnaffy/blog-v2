export type Skill = {
  name: string;
  category: string;
  experience: number;
  highlights: string[];
  href?: string;
};

export const skills: Skill[] = [
  {
    name: "Frontend Engineering",
    category: "Web Development",
    experience: 4,
    highlights: [
      "Component architecture, state management",
      "Responsive UI, accessibility, UX patterns",
    ],
  },
  {
    name: "TypeScript Development",
    category: "Programming",
    experience: 3,
    highlights: [
      "Type-safe application design",
      "Generics, interfaces, complex types",
    ],
  },
  {
    name: "Backend & API Development",
    category: "Backend",
    experience: 3,
    highlights: [
      "REST APIs, authentication flows",
      "Database integration, validation",
    ],
  },
  {
    name: "Desktop Application Development",
    category: "Applications",
    experience: 2,
    highlights: [
      "Cross-platform desktop apps",
      "Native integrations, local data handling",
    ],
  },
  {
    name: "System Tooling",
    category: "Systems",
    experience: 2,
    highlights: [
      "CLI utilities and system integrations",
      "Process management, IPC workflows",
    ],
  },
  {
    name: "Automation & Scripting",
    category: "Systems",
    experience: 2,
    highlights: [
      "Shell scripting, workflow automation",
      "Developer productivity tooling",
    ],
  },
  {
    name: "Linux Systems",
    category: "Systems",
    experience: 1,
    highlights: [
      "Wayland ecosystem tooling",
      "Environment configuration and debugging",
    ],
  },
  {
    name: "Developer Experience",
    category: "Engineering",
    experience: 3,
    highlights: [
      "Tooling, editor workflows",
      "Automation for faster development",
    ],
  },
  {
    name: "Application Architecture",
    category: "Engineering",
    experience: 3,
    highlights: [
      "Structuring maintainable projects",
      "Balancing performance and developer ergonomics",
    ],
  },
];
