import { Container } from "./styles";

type CircleProps = {
  backgroundColor?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

export function Circle(props: CircleProps) {
  return <Container style={{ ...props }} />;
}
