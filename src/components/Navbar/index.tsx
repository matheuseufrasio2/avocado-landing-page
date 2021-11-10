import Link from "next/link";
import { Container, List, ListItem } from "./styles";

export function NavBar() {
  return (
    <Container>
      <Link href="/">AV0CADO</Link>
      <List>
        <ListItem>
          <Link href="/products/design">DESIGN</Link>
        </ListItem>
        <ListItem>
          <Link href="/products/development">DEVELOPMENT</Link>
        </ListItem>
        <ListItem>
          <Link href="/products/production">PRODUCTION</Link>
        </ListItem>
        <ListItem>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </ListItem>
        <ListItem>
          <Link href="/products/contact">CONTACT</Link>
        </ListItem>
      </List>
    </Container>
  );
}
