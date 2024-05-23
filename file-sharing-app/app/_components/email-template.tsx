import * as React from 'react';
import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";

export const EmailTemplate = ({ response }) => (
  <Html>
    <Head />
    <Preview>DropIt Welcome</Preview>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#2250f4",
              offwhite: "#fafbfb",
            },
            spacing: {
              0: "0px",
              20: "20px",
              45: "45px",
            },
          },
        },
      }}
    >
      <Body className="bg-offwhite text-base font-sans">
        <Container className="bg-white p-45">
          <Heading className="text-center my-0 leading-8">
            Welcome to DropIt
          </Heading>

          <Section>
            <Row>
              <Text className="text-base">
                Congratulations! You're joining over 3 million developers
                around the world who use Netlify to build and ship sites,
                stores, and apps.
              </Text>
              <Text className="text-base">Here's how to get started:</Text>
            </Row>
          </Section>

          <Section className="text-center mt-20">
            <Link href={response?.shortURL} className="bg-brand text-white rounded-lg py-3 px-[18px] inline-block">
              Click to Download The File
            </Link>
          </Section>

          <Section className="mt-45">
            <Row>
              <Column>
                <Link className="text-black underline font-bold">
                  Hi {response?.emailToSend?.split("@")[0]}
                </Link>{" "}
                <span className="text-green-500">→</span>
              </Column>
            </Row>
          </Section>
          <Section className="mt-45">
            <Row>
              <Column>
                <Link className="text-black underline font-bold">
                  File Name: {response?.fileName}
                </Link>{" "}
                <span className="text-green-500">→</span>
              </Column>
            </Row>
          </Section>
          <Section className="mt-45">
            <Row>
              <Column>
                <Link className="text-black underline font-bold">
                  File Size: {response?.fileSize}
                </Link>{" "}
                <span className="text-green-500">→</span>
              </Column>
            </Row>
          </Section>
          <Section className="mt-45">
            <Row>
              <Column>
                <Link className="text-black underline font-bold">
                  File Type: {response?.fileType}
                </Link>{" "}
                <span className="text-green-500">→</span>
              </Column>
            </Row>
          </Section>
        </Container>

        <Container className="mt-20">
          <Section>
            <Row>
              <Column className="text-right px-20">
                <Link>Unsubscribe</Link>
              </Column>
              <Column className="text-left">
                <Link>Manage Preferences</Link>
              </Column>
            </Row>
          </Section>
          <Text className="text-center text-gray-400 mb-45">
            DropIt, SaroorNagar Hyderabad, Telangana
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
