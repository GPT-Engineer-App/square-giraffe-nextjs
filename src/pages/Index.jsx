import { Box, Button, Flex, Heading, Image, Input, Text, Textarea } from "@chakra-ui/react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.900" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Square Giraffe
          </Heading>
        </Flex>

        <Box display={{ base: "none", md: "flex" }}>
          <Button variant="ghost" mr={4}>
            Home
          </Button>
          <Button variant="ghost" mr={4}>
            About
          </Button>
          <Button variant="ghost" mr={4}>
            Services
          </Button>
          <Button variant="ghost">Contact</Button>
        </Box>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Flex maxW="1200px" mx="auto" direction={{ base: "column", md: "row" }} align="center">
          <Box flex={1} pr={{ md: 10 }}>
            <Heading as="h2" size="2xl" mb={4}>
              Unleash Your Creativity
            </Heading>
            <Text fontSize="xl" mb={8}>
              We help businesses like yours succeed in the digital world. Let us build an exceptional website that drives your success.
            </Text>
            <Button colorScheme="blue" size="lg">
              Get Started
            </Button>
          </Box>
          <Box flex={1}>
            <Image src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGlsbHVzdHJhdGlvbnxlbnwwfHx8fDE3MTA3NjMzNjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Development" />
          </Box>
        </Flex>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Our Services
        </Heading>
        <Flex maxW="1200px" mx="auto" wrap="wrap" justify="center">
          <Box width={{ base: "100%", md: "30%" }} p={5} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpY29ufGVufDB8fHx8MTcxMDc2MzEyOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Design" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Web Design
            </Heading>
            <Text>We create stunning and functional websites tailored to your brand and goals.</Text>
          </Box>
          <Box width={{ base: "100%", md: "30%" }} p={5} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGljb258ZW58MHx8fHwxNzEwNzYzMzY2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Development" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Web Development
            </Heading>
            <Text>Our expert developers build fast, secure, and scalable web applications.</Text>
          </Box>
          <Box width={{ base: "100%", md: "30%" }} p={5} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwaWNvbnxlbnwwfHx8fDE3MTA3NjMzNjd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Digital Marketing" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Digital Marketing
            </Heading>
            <Text>We help you reach your target audience and grow your business online.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Contact Section */}
      <Box bg="gray.100" py={20}>
        <Flex maxW="1200px" mx="auto" direction={{ base: "column", md: "row" }}>
          <Box flex={1} pr={{ md: 10 }}>
            <Heading as="h2" size="xl" mb={4}>
              Get In Touch
            </Heading>
            <Text fontSize="xl" mb={8}>
              Ready to take your business to the next level? Contact us today and let's discuss how we can help you achieve your goals.
            </Text>
            <Flex align="center" mb={4}>
              <FaMapMarkerAlt size={20} mr={2} />
              <Text>123 Main Street, City, Country</Text>
            </Flex>
            <Flex align="center" mb={4}>
              <FaPhone size={20} mr={2} />
              <Text>+1 234 567 8900</Text>
            </Flex>
            <Flex align="center">
              <FaEnvelope size={20} mr={2} />
              <Text>info@squaregiraffe.com</Text>
            </Flex>
          </Box>
          <Box flex={1}>
            <Box as="form" bg="white" p={8} borderRadius="md" boxShadow="md">
              <Input placeholder="Your Name" mb={4} />
              <Input placeholder="Your Email" mb={4} />
              <Textarea placeholder="Your Message" mb={4} />
              <Button colorScheme="blue" width="full">
                Send Message
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={10} textAlign="center">
        <Text>&copy; 2023 Square Giraffe. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
