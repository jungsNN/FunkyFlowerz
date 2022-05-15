import { Title } from "@/components/Foundation/Text";
import { Page } from "@/components/Layout";
import { Box, Col } from "@/components/Layout/styled";

const Intro = () => {
  return (
    <Page >
      <Box>
        <Col>
          <Title size="256px">
            J
          </Title>
          <Box>
            <Title size="128px">
              enny
            </Title>
            <Title size="128px">
              ung
            </Title>
          </Box>
        </Col>
      </Box>
    </Page>
  )
}

export default Intro;
