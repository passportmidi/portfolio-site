"use client";

import { IconCode } from "@tabler/icons-react";
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
import classes from "./Projects.module.css";

const mockdata = [
  {
    image:
      "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    title: "Verudela Beach 1",
    country: "Croatia",
    description:
      "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    badges: [
      { emoji: "☀️", label: "Sunny weather" },
      { emoji: "🦓", label: "Onsite zoo" },
      { emoji: "🌊", label: "Sea" },
      { emoji: "🌲", label: "Nature" },
      { emoji: "🤽", label: "Water sports" },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    title: "Verudela Beach 2",
    country: "Croatia",
    description:
      "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    badges: [
      { emoji: "☀️", label: "Sunny weather" },
      { emoji: "🦓", label: "Onsite zoo" },
      { emoji: "🌊", label: "Sea" },
      { emoji: "🌲", label: "Nature" },
      { emoji: "🤽", label: "Water sports" },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    title: "Verudela Beach 3",
    country: "Croatia",
    description:
      "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    badges: [
      { emoji: "☀️", label: "Sunny weather" },
      { emoji: "🦓", label: "Onsite zoo" },
      { emoji: "🌊", label: "Sea" },
      { emoji: "🌲", label: "Nature" },
      { emoji: "🤽", label: "Water sports" },
    ],
  },
];

export function Projects() {
  const theme = useMantineTheme();

  const projects = mockdata.map((project) => (
    <Card
      key={project.title}
      withBorder
      radius="md"
      p="md"
      className={classes.card}
    >
      <Card.Section>
        <Image src={project.image} alt={project.title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {project.title}
          </Text>
          <Badge size="sm" variant="light">
            {project.country}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {project.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Technologies
        </Text>
        <Group gap={7} mt={5}>
          {project.badges.map((badge) => (
            <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
              {badge.label}
            </Badge>
          ))}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button
          radius="md"
          leftSection={<IconCode size={18} stroke={1.5} />}
          style={{ flex: 1 }}
        >
          View source code
        </Button>
      </Group>
    </Card>
  ));

  return (
    <Container id="projects" size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center">
        Projects
      </Title>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {projects}
      </SimpleGrid>
    </Container>
  );
}
