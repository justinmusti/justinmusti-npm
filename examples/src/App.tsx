"use client"

import { Button, Flex, Stack, Text } from "@chakra-ui/react"

import Storage from "@justinmusti/storage/browser"

import { genHash, strToASCII } from "@justinmusti/utils"

// Don’t forget to keep the Uppy instance outside your component.

function App() {
    const st = new Storage({ prefix: "jm/" })

    return (
        <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
            <Flex w={["100%", "full"]} p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={6} w={"full"} maxW={"lg"}>
                    <Text>Use the following the test Storage object.</Text>
                    <Button onClick={() => st.set("hello", 123)}> Save to storage</Button>
                    <Button onClick={() => console.log(st.get("hello", "notacos"))}> Retrieve from storage</Button>
                    <Button onClick={() => console.log(st.has("hello"))}> Check is exist in storage</Button>
                    <Button onClick={() => st.unset("hello")}> Remove from storage</Button>
                    <Button onClick={() => st.clear()}> Clear storage.</Button>
                    <Button onClick={() => console.log(strToASCII("HelloAscii é, à, ö, ñ._---_"))}>
                        {" "}
                        Get ASCII CHARS
                    </Button>
                    <Button onClick={() => console.log("HASH FOR getMeHashedUpFam", genHash("getMeHashedUpFam"))}>
                        {" "}
                        GenHash.
                    </Button>
                </Stack>
            </Flex>
        </Stack>
    )
}

export default App
