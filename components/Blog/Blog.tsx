"use client";

import {
  Button,
  Card,
  Center,
  Group,
  Text,
  useMantineTheme,
} from "@mantine/core";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Parser from "rss-parser";
import { CardGrid } from "../CardGrid/CardGrid";
import classes from "./Blog.module.css";

export function Blog() {
  const theme = useMantineTheme();
  const router = useRouter();
  const parser = new Parser();

  const [articles, setArticles] = useState<any>(null);

  useEffect(() => {
    const loadArticles = async () => {
      const feed = await parser.parseURL("/api/blog");
      setArticles(feed);
    };

    loadArticles();
  }, []);

  if (!articles) {
    return <div>loading...</div>;
  }
  const cards = articles.items.map((item) => (
    <Card withBorder radius="md" className={classes.card} key={item.title}>
      <Text
        className={classes.title}
        fz="lg"
        fw={500}
        ff="heading"
        component="a"
        href={item.link}
      >
        {item.title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {item.contentSnippet}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Text fz="sm" c="var(--mantine-color-gray-6)" inline>
            {dayjs(item.pubDate).format("MMMM D, YYYY")}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <Button
            radius="md"
            style={{ flex: 1 }}
            onClick={() => router.push(`${item.link}`)}
          >
            Read article
          </Button>
        </Group>
      </Group>
    </Card>
  ));

  return (
    <CardGrid containerId="blog" title="Blog">
      {cards}
    </CardGrid>
  );
}
