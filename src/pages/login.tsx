import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  Link as ChakraLink,
  Center,
  Field,
} from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import NextLink from "next/link";

import loginImage from "../../public/assets/login-image.gif";
import { PasswordInput } from "@/components/ui/password-input";

export default function Login() {
  return (
    <Flex w="100vw" h="100vh">
      <Flex w="50%" bg="#2C73EB" align="center" justify="center">
        <Image w={500} h={500} src={loginImage.src} />
      </Flex>
      <VStack w="50%" justify="center">
        <Stack>

          <Heading as="h1" fontSize="3xl" fontWeight={"bold"} color={"black"}>Account Login</Heading>

          <Text fontSize="lg" fontWeight={"normal"} color={"#8692A6"}>
            If you are already a member you can login with your email address
            and password.
          </Text>

          <VStack align={"flex-start"} gap={6} mt={10}>

          <Field.Root >
            <Field.Label color="gray.500" fontSize={"md"}>
             Email address
            </Field.Label>
          <Input type="email"
              h={16}
              colorPalette={"blue"}
              borderRadius={"md"}
              color={"black"}/>
          </Field.Root>

          <Field.Root >
            <Field.Label color="gray.500" fontSize={"md"}>
             Password
            </Field.Label>
          <PasswordInput type="password"
              h={16}
              colorPalette={"blue"}
              borderRadius={"md"}
              color={"black"}/>
          </Field.Root>

          <Checkbox colorPalette={"blue"} color={"#696F79"} fontSize={"md"}>
            Remember-me
          </Checkbox>

          <Button h={16}
              colorPalette={"blue"}
              _hover={ {opacity: 0.8}}
              borderRadius={"md"}
              fontSize={"md"}
              fontWeight={"medium"}
              w={"full"}>Register Account</Button>
          </VStack>

          <HStack justify="center" gap={1} mt={10}>
            <Text color={"#696F79"} >Não possui uma conta?</Text>
          <ChakraLink color={"#2C73EB"}asChild>
            <NextLink href="/sign-up">Clique aqui!</NextLink>
          </ChakraLink>
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  );
}
