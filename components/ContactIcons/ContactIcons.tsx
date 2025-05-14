import {
  IconAt,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { Box, Stack, Text } from "@mantine/core";
import classes from "./ContactIcons.module.css";
import React from "react";
import Link from "next/link";

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconAt;
  title: React.ReactNode;
  description: React.ReactNode;
  link: string;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  link,
  ...others
}: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Link className={classes.description} href={link}>
          {description}
        </Link>
      </div>
    </div>
  );
}

const data = [
  {
    title: "Email",
    description: "sydney.putnam@proton.me",
    icon: IconAt,
    link: "mailto:sydney.putnam@proton.me",
  },
  {
    title: "LinkedIn",
    description: "in/sydney-putnam",
    icon: IconBrandLinkedin,
    link: "https://linkedin.com/in/sydney-putnam/",
  },
  {
    title: "GitHub",
    description: "github.com/passportmidi",
    icon: IconBrandGithub,
    link: "https://github.com/passportmidi/",
  },
];

export function ContactIconsList() {
  const items = data.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
