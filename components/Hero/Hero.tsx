"use client";

import { Button, Container, Group, Image, Text, Title } from "@mantine/core";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import icon from "../../public/favicon.svg";
import classes from "./Hero.module.css";

export function Hero() {
  const router = useRouter();
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Hi! I'm Sydney 🧑‍💻</Title>
          <Text c="dimmed" mt="md">
            A Software Developer based in Halifax, Canada
          </Text>

          <Group mt={30}>
            <Button
              radius="md"
              size="md"
              className={classes.control}
              onClick={() => router.push("/Resume_SydneyPutnam.pdf")}
            >
              Download CV
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
