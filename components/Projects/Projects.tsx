"use client";

import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconCode, IconExternalLink } from "@tabler/icons-react";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { CardGrid } from "../CardGrid/CardGrid";
import classes from "./Projects.module.css";

const data = [
  {
    image: "/portfolio.png",
    title: "Portfolio website",
    description:
      "Built using the Mantine component library and Nodemailer for the contact form.",
    code: "https://github.com/passportmidi/portfolio-site",
    link: "https://www.putnam.computer/",
    badges: ["React", "Next.js", "TypeScript", "Mantine UI", "Nodemailer"],
  },
  {
    image: "/wizard.png",
    title: "RecipeWizard",
    description:
      "An application that allows bakers to convert between cups and grams quickly and easily when measuring ingredients.",
    code: "https://github.com/passportmidi/capstone-project-frontend",
    badges: [
      "React",
      "Node.js",
      "MySQL",
      "Express",
      "Axios",
      "Fraction.js",
      "Knex",
    ],
  },
  {
    image: "/snaps.png",
    title: "BrainStation Photo Gallery",
    description:
      "A photo gallery website with backend API built for BrainStation. Includes tag filtering and pages for each individual photo with likes and comments.",
    code: "https://github.com/passportmidi/bstn-photo-gallery",
    link: "https://bstn-photo-gallery.vercel.app/",
    badges: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "Node.js",
      "Express",
      "REST API",
    ],
  },
  {
    image: "/band.png",
    title: "BrainStation Band Website",
    description:
      "Responsive website for a band built for BrainStation. Grabs comments and show dates from an external API.",
    code: "https://github.com/passportmidi/bstn-band-website",
    link: "https://bstn-band-website.vercel.app/",
    badges: ["HTML", "CSS", "Sass", "JavaScript", "Axios", "REST API"],
  },
  {
    image: "/cafe.png",
    title: "BrainStation Café Website",
    description:
      "Responsive café website built for BrainStation. Includes about and menu pages.",
    code: "https://github.com/passportmidi/bstn-cafe",
    link: "https://bstn-cafe.vercel.app/",
    badges: ["HTML", "CSS", "Sass", "JavaScript"],
  },
];

export function Projects() {
  const router = useRouter();

  const projects = data.map((project) => (
    <Card
      key={project.title}
      withBorder
      radius="md"
      p="md"
      className={classes.card}
    >
      <Card.Section>
        <Image
          component={NextImage}
          src={project.image}
          alt={project.title}
          height={863}
          width={757}
          className={classes.image}
        />
      </Card.Section>

      <Card.Section className={classes.section} mt="md" flex={1}>
        <Group justify="apart">
          <Text fz="lg" fw={500} ff="heading">
            {project.title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs" c="dimmed">
          {project.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Technologies
        </Text>
        <Group gap={7} mt={5}>
          {project.badges.map((badge) => (
            <Badge variant="light" key={badge} className={classes.badge}>
              {badge}
            </Badge>
          ))}
        </Group>
      </Card.Section>

      <Group mt="xs">
        {project.link && (
          <Button
            radius="md"
            rightSection={<IconExternalLink size={18} stroke={1.5} />}
            style={{ flex: 1 }}
            onClick={() => router.push(`${project.link}`)}
          >
            Website
          </Button>
        )}
        <Button
          radius="md"
          rightSection={<IconCode size={18} stroke={1.5} />}
          style={{ flex: 1 }}
          onClick={() => router.push(`${project.code}`)}
        >
          Code
        </Button>
      </Group>
    </Card>
  ));

  return (
    <CardGrid containerId="projects" title="Projects">
      {projects}
    </CardGrid>
  );
}
