"use client";

import { IconBrandGithub } from "@tabler/icons-react";
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
    link: "https://github.com/passportmidi/capstone-project-frontend",
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
      "A photo gallery website built for BrainStation. Includes tag filtering and pages for each individual photo with likes and comments. Grabs photo data from a backend API built in Node.js.",
    link: "https://github.com/passportmidi/bstn-photo-gallery",
    badges: ["HTML", "CSS", "Sass", "JavaScript", "Node.js", "REST API"],
  },
  {
    image: "/band.png",
    title: "BrainStation Band Website",
    description:
      "Responsive website for a band built for BrainStation. Grabs comments and show dates from an external API.",
    link: "https://github.com/passportmidi/bstn-band-website",
    badges: ["HTML", "CSS", "Sass", "JavaScript", "Axios", "REST API"],
  },
  {
    image: "/cafe.png",
    title: "BrainStation Café Website",
    description:
      "Responsive café website built for BrainStation. Includes about and menu pages.",
    link: "https://github.com/passportmidi/bstn-cafe",
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
        <Button
          radius="md"
          rightSection={<IconBrandGithub size={18} stroke={1.5} />}
          style={{ flex: 1 }}
          onClick={() => router.push(`${project.link}`)}
        >
          View on GitHub
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
