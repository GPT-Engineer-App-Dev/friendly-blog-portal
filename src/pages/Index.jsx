import { Container, VStack, Heading, Text, Box, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={10} align="stretch">
        {/* Blog Posts Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>Blog Posts</Heading>
          <Box mb={6}>
            <Heading as="h3" size="md">First Blog Post</Heading>
            <Text mt={2}>This is the summary of the first blog post. Click to read more...</Text>
          </Box>
          <Box mb={6}>
            <Heading as="h3" size="md">Second Blog Post</Heading>
            <Text mt={2}>This is the summary of the second blog post. Click to read more...</Text>
          </Box>
        </Box>

        {/* About Me Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>About Me</Heading>
          <Text>Hello! I'm a passionate blogger who loves to write about various topics. Welcome to my personal blog!</Text>
        </Box>

        {/* Contact Form Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>Contact Me</Heading>
          <FormControl id="name" mb={4}>
            <FormLabel>Your Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Your Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Your Message</FormLabel>
            <Textarea />
          </FormControl>
          <Button colorScheme="blue">Send Message</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;