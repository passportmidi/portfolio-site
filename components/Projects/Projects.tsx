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
    title: "RecipeWizard",
    description:
      "An application that allows bakers to convert between cups and grams quickly and easily when measuring ingredients.",
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
            <Badge variant="light" key={badge} className={classes.badge}>
              {badge}
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
