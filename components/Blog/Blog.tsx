"use client";

import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Center,
  Group,
  Image,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { CardGrid } from "../CardGrid/CardGrid";
import { useRouter } from "next/navigation";
import classes from "./Blog.module.css";

export function Blog() {
  const linkProps = {
    href: "https://mantine.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  };
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <CardGrid containerId="blog" title="Blog">
      <Card withBorder radius="md" className={classes.card}>
        <Text
          className={classes.title}
          fz="lg"
          fw={500}
          ff="heading"
          component="a"
          {...linkProps}
        >
          RecipeWizard
        </Text>

        <Text fz="sm" c="dimmed" lineClamp={4}>
          Resident Evil Village is a direct sequel to 2017’s Resident Evil 7,
          but takes a very different direction to its predecessor, namely the
          fact that this time round instead of fighting against various mutated
          zombies, you’re now dealing with more occult enemies like werewolves
          and vampires.
        </Text>

        <Group justify="space-between" className={classes.footer}>
          <Center>
            <Text fz="sm" c="var(--mantine-color-gray-6)" inline>
              May 9, 2025
            </Text>
          </Center>

          <Group gap={8} mr={0}>
            <Button
              radius="md"
              style={{ flex: 1 }}
              onClick={() => router.push(`${linkProps.href}`)}
            >
              Read article
            </Button>
          </Group>
        </Group>
      </Card>
    </CardGrid>
  );
}
