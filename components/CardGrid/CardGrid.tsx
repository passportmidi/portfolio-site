import { Container, Title, SimpleGrid } from "@mantine/core";
import classes from "./CardGrid.module.css";

export function CardGrid({ children, containerId, title }) {
  return (
    <Container id={containerId} size="lg" py="xl">
      <Title className={classes.title} ta="center">
        {title}
      </Title>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {children}
      </SimpleGrid>
    </Container>
  );
}
