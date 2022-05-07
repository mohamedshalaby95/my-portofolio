import { Box } from "@mui/material";
import ContactCard from "../components/ContactCard";
import Heading from "../components/Heading";

const Contact = () => {
  return (
    <>
      <Box sx={{ background: "#10121B", overflow: "auto" }}>
        <section>
          <Heading value="contact us " />
        </section>
        <section>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ContactCard />
          </Box>
        </section>
      </Box>
    </>
  );
};

export default Contact;
