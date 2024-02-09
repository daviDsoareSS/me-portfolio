import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
  } from "@react-email/components";
  import { Tailwind } from "@react-email/tailwind";
  import * as React from "react";
  
  interface EmailProps {
    name: string;
    subject: string,
  }
  
  export const Email = ({
    name,
    subject,
  }: EmailProps) => {
  
    return (
      <Html>
        <Head />
        <Preview>{subject} {name}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans px-2">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                Join <strong>{name}</strong>
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                {subject},
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default Email;
  