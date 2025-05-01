import { IconCheck } from "@tabler/icons-react";
import { Button, Container, Group, Image, Text, Title } from "@mantine/core";
import image from "../../public/favicon.svg";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Hello world!</Title>
          <Text c="dimmed" mt="md">
            This is a placeholder, I'm working on a portfolio website that I'll
            upload here soon. For now you can check out my blog at{" "}
            <a href="https://blog.putnam.computer/">this link</a>.
          </Text>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Placeholder button
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}
