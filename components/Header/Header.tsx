"use client";

import { Title, Burger, Group, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { ActionToggle } from "../ActionToggle/ActionToggle";
import Link from "next/link";

const links = [
  { link: "#about", label: "About" },
  { link: "#projects", label: "Projects" },
  { link: "mailto:sydney.putnam@proton.me", label: "Contact" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Title component="p" order={4}>
            Sydney Putnam
          </Title>
        </Group>

        <Drawer opened={opened} onClose={toggle} title="Menu">
          {items}
        </Drawer>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <ActionToggle />
        </Group>
      </div>
    </header>
  );
}
