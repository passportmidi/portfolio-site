"use client";

import { Button, Container, Group, Text, Title, Image } from "@mantine/core";
import { useRouter } from "next/navigation";
import classes from "./Hero.module.css";

export function Hero() {
  const router = useRouter();
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Hi! I&apos;m Sydney 💾</Title>
          <Text mt="md">A Software Developer based in Halifax, Canada</Text>

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
          src="/icon.png"
          className={classes.image}
          alt="Placeholder photo"
          radius="lg"
          mb="xl"
        />
      </div>
    </Container>
  );
}
