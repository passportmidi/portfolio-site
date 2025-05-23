"use client";

import { IconCode, IconExternalLink } from "@tabler/icons-react";
import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { CardGrid } from "../CardGrid/CardGrid";
import NextImage from "next/image";
import classes from "./Projects.module.css";
import { useRouter } from "next/navigation";

const data = [
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
  const theme = useMantineTheme();
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

      <Card.Section className={classes.section} mt="md">
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
          Source code
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
