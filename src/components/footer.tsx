import { Box, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "primary.dark", padding: "2rem" }}
      flexGrow="1"
    >
      <Container>
        <p>
          Desenvolvido Por Guilherme Daniel{" "}
          <Link href="#" target="_blank" sx={{ color: "black" }}>
            Github
          </Link>{" "}
          <Link href="#" target="_blank" sx={{ color: "black" }}>
            Linkedin
          </Link>{" "}
        </p>
      </Container>
    </Box>
  );
};

export default Footer;
