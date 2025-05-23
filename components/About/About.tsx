"use client";

import { Container, Title, Text, Grid, Badge, Group } from "@mantine/core";
import classes from "./About.module.css";
import { Fragment } from "react";

const data = [
  {
    title: "Languages",
    badges: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Python",
      "Java",
      "C",
      "Bash",
      "PowerShell",
    ],
  },
  {
    title: "Libraries",
    badges: ["React", "Node.js", "Next.js", "Express", "Sass", "Vite"],
  },
  {
    title: "Technologies",
    badges: [
      "REST API",
      "MySQL",
      "Microsoft SQL Server",
      "Microsoft Azure",
      "Power BI",
      "Linux",
      "Git",
      "Docker",
    ],
  },
  {
    title: "Other Skills",
    badges: ["Automated Testing", "Data Visualization", "Agile Development"],
  },
];

const skills = data.map((section) => (
  <Fragment key={section.title}>
    <Title order={3} pt="md">
      {section.title}
    </Title>
    <Group gap={7} mt={5} pb="md">
      {section.badges.map((badge) => (
        <Badge variant="light" key={badge} className={classes.badge}>
          {badge}
        </Badge>
      ))}
    </Group>
  </Fragment>
));

export function About() {
  return (
    <Container size="md" py="xl" id="about">
      <Title>About</Title>
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 8, sm: 6 }}>
          <Text py="md">
            My childhood interest in computers led me to a Bachelor of Computer
            Science degree that helped me learn the fundamentals of writing
            great code. After graduation I honed my data integration and
            scripting skills as a Technical Consultant at Endeavour Solutions,
            Inc., where I used SQL, PowerShell, Python, and other technologies
            to deliver projects for clients.
          </Text>
          <Text py="md">
            Since then, I’ve been expanding my knowledge into computer networks
            and cybersecurity through Skills for Hire Atlantic’s Cybersecurity
            certification, and full-stack web development through BrainStation’s
            Software Engineering diploma. In my free time, you’ll find me
            tinkering with Linux or teaching myself a new fibre art.
          </Text>
          <Text py="md">
            I’m always looking for ways to learn and improve as a developer, so
            if you’d like to build something together or just want to chat,
            let’s connect!
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, sm: 6 }}>{skills}</Grid.Col>
      </Grid>
    </Container>
  );
}
