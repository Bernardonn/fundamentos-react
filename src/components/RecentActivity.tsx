import { Card, ColorPalette, Flex, FormatNumber, FormatNumberProps, Heading, Icon, Stat, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";




interface RecentActivityProps{
  time: string;
  title: string;
  icon: IconType;
  colorPallet: string;
}



export function RecentActivity({time, title, icon, colorPallet, ...rest }: RecentActivityProps) {

  return (

      <Card.Body flexDir="row" alignItems="start" gap={6}>
        <Flex justify="center" align="center" backgroundColor={`${colorPallet}.200`} rounded="lg" p={2}>
          <Icon as={icon} size="xl" color={`${colorPallet}.700`} />
        </Flex>

          <VStack align={"start"} gap={1}>
            <Heading> {title} </Heading>
            <Text fontSize={"sm"} color={"gray.500"}>
              {time}
            </Text>
          </VStack>
        </Card.Body>






  );
}
