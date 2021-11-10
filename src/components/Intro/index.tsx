import { Circle } from "components/Circle";
import Image from "next/image";

import { Card, Container } from "./styles";

export function Intro() {
  return (
    <Container>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-50vh" />
      <Card>
        <h1>
          <span>AV0CADO</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button>DISCOVER</button>
      </Card>
      <Card>
        <Image
          src="/img/Avocado.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </Card>
    </Container>
  );
}
