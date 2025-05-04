"use client";

import { Button, Container, Group, Text, Title, Avatar } from "@mantine/core";
import { useRouter } from "next/navigation";
import classes from "./Hero.module.css";

export function Hero() {
  const router = useRouter();
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Hi! I'm Sydney 🧑‍💻</Title>
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
        <Avatar
          src="https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6"
          className={classes.image}
          alt="Placeholder photo of keyboard"
        />
      </div>
    </Container>
  );
}
