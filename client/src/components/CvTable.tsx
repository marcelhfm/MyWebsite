import {
  Table,
  Tbody,
  Tr,
  Td,
  useColorModeValue,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

interface CvTableProps {}

export const CvTable: React.FC<CvTableProps> = ({}) => {
  const schemeColor = useColorModeValue("gray", "white");
  return (
    <Box>
      <Table variant="simple" colorScheme={schemeColor}>
        <Tbody>
          <Tr>
            <Td isNumeric fontStyle={"italic"}>
              Period <br /> Elemantary School
            </Td>
            <Td>
              09/2008 - 07/2012 <br /> Klosterschule Dachau
            </Td>
          </Tr>
          <Tr>
            <Td isNumeric fontStyle={"italic"}>
              Period <br /> Highschool <br />
              Final Grade
            </Td>
            <Td>
              09/2012 - 07/2020 <br />
              Josef-Effner-Gymnasium Dachau <br />
              1.8
            </Td>
          </Tr>
          <Tr>
            <Td isNumeric fontStyle={"italic"}>
              Period <br />
              University <br />
              Course of study
            </Td>
            <Td>
              10/2020 - 10/2024 <br />
              Hochschule für angewandte Wissenschaften München
              <br />
              Business informatics
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Heading mt={4} fontSize="xl">
        Work experience
      </Heading>
      <Table variant="simple" colorScheme={schemeColor}>
        <Tbody>
          <Tr>
            <Td isNumeric fontStyle={"italic"}>
              Period <br /> Position <br /> Company <br /> ⠀
            </Td>
            <Td>
              03/07/2017 - 07/07/2017 <br /> Internship <br />
              Fraunhofer-Institut für Angewandte und Integrierte Sicherheit
              AISEC
            </Td>
          </Tr>
          <Tr>
            <Td isNumeric fontStyle={"italic"}>
              Period <br /> Position <br /> Company
            </Td>
            <Td>
              10/2012 - 05/2019 <br />
              Temporary employee as newspaper and brochure deliverer <br />
              Zeitung + Prospekt Verteilservice GmbH
            </Td>
          </Tr>
          <Tr>
            <Td isNumeric fontStyle={"italic"}>
              Period <br /> Position <br /> Company
            </Td>
            <Td>
              01/10/2020 - 01/10/2021 <br />
              Working student in food retailing
              <br />
              Lidl Vertriebs- GmbH & Co. KG
            </Td>
          </Tr>
          <Tr>
            <Td isNumeric fontStyle={"italic"}>
              Period <br /> Position <br /> Company
            </Td>
            <Td>
              17/09/2021 - 17/09/2022 <br />
              Working student in project management for digital projects
              <br />
              Siemens Betriebskrankenkasse
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
