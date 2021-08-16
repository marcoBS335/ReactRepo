import { VStack, Heading } from "@chakra-ui/react";

export default function Home() {
    return(
        <VStack align="center">
            <div className="welcom-title">
                <Heading as="h2" size="xl" color="green.100" style={{marginBottom: "5vh"}}>
                    Welcome to the LVC home page!
                </Heading>
            </div>
        </VStack>
    );
}