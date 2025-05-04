import { Container, Title, Text } from "@mantine/core";

export function About() {
  return (
    <Container size="md" id="about">
      <Title>About</Title>
      <Text pt="md">
        My childhood interest in computers led me to a Bachelor of Computer
        Science degree that helped me learn the fundamentals of writing great
        code. After graduation I honed my data integration and scripting skills
        as a Technical Consultant at Endeavour Solutions, Inc., where I used
        SQL, PowerShell, Python, and other technologies to deliver projects for
        clients. Since then, I’ve been expanding my knowledge into computer
        networks and cybersecurity through Skills for Hire Atlantic’s
        Cybersecurity certification, and full-stack web development through
        BrainStation’s Software Engineering diploma. In my free time, you’ll
        find me tinkering with Linux or teaching myself a new fibre art.
      </Text>
      <Text pt="md">
        I’m always looking for ways to learn and improve as a developer, so if
        you’d like to build something together or just want to chat, let’s
        connect!
      </Text>
    </Container>
  );
}
