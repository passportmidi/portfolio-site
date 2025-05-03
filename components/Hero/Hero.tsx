import { Button, Container, Group, Image, Text, Title } from "@mantine/core";
import NextImage from "next/image";
import icon from "../../public/favicon.svg";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Hello world!</Title>
          <Text c="dimmed" mt="md">
            This is a placeholder, I&apos;m working on a portfolio website that
            I&apos;ll upload here soon. For now you can check out my blog at{" "}
            <a href="https://blog.putnam.computer/">this link</a>.
          </Text>

          <Group mt={30}>
            <Button radius="md" size="md" className={classes.control}>
              Placeholder button
            </Button>
          </Group>
        </div>
        <Image
          component={NextImage}
          src={icon.src}
          className={classes.image}
          alt="Placeholder image"
          width={100}
          height={100}
          mb="md"
        />
      </div>
    </Container>
  );
}
