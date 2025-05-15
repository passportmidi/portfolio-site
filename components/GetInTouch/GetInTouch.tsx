"use client";
import {
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
// import bg from "./bg.svg";
import { ContactIconsList } from "../ContactIcons/ContactIcons";
import classes from "./GetInTouch.module.css";
import { sendEmail } from "../../utils/sendEmail";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function GetInTouch() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { name: "", email: "", subject: "", message: "" },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      subject: (value) => (value.length < 1 ? "Subject cannot be empty" : null),
      message: (value) => (value.length < 1 ? "Message cannot be empty" : null),
    },
  });

  return (
    <Container size="lg" py="xl" id="contact">
      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              Contact information
            </Text>

            <ContactIconsList />
          </div>

          <form
            className={classes.form}
            // onSubmit={(event) => event.preventDefault()}
            onSubmit={form.onSubmit((values: FormData) => sendEmail(values))}
          >
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput
                  label="Your name"
                  placeholder="Your name"
                  key={form.key("name")}
                  {...form.getInputProps("name")}
                />
                <TextInput
                  label="Your email"
                  placeholder="email@example.com"
                  key={form.key("email")}
                  {...form.getInputProps("email")}
                />
              </SimpleGrid>

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                key={form.key("subject")}
                {...form.getInputProps("subject")}
              />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                key={form.key("message")}
                {...form.getInputProps("message")}
                minRows={3}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </Container>
  );
}
