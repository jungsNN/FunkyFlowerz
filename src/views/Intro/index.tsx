import { Title } from "@/components/Foundation/Text";
import { Page } from "@/components/Layout";
import { Box, Col } from "@/components/Layout/styled";

const Intro = () => {
  return (
    <Page >
      <Box>
        <Col>
          <Title size="256px">
            Title
          </Title>
        </Col>
      </Box>
    </Page>
  )
}

export default Intro;
