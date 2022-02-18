import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import {
  FcAssistant,
  FcCustomerSupport,
  FcDonate,
  FcInTransit,
  FcRedo,
} from "react-icons/fc";
import { IoReloadCircleOutline } from "react-icons/io5";

const Feature = ({ title, text, icon }) => {
  return (
    <>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
        officia natus quasi molestias mollitia voluptatem voluptatum, ut nam
        possimus maiores.
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit rerum
        consequatur similique? Facilis beatae natus quisquam quibusdam assumenda
        saepe repellat excepturi quasi, corporis maiores placeat, aliquid non
        doloribus? Porro, dignissimos?
      </div>
    </>
  );
};

export default function Values() {
  return (
    <Box background={"gray.50"} m={4} p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcCustomerSupport} w={10} h={10} />}
          title={"Easy Support"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon color={"green.400"} as={FcRedo} w={10} h={10} />}
          title={"Easy Retuns"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Instant Delivery"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
