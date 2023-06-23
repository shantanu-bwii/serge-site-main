import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import useLocales from "../../hooks/useLocales";

export default function Footer() {
  const { translate } = useLocales();

  return (
    <Box
      component="footer"
      py={4}
      textAlign="center"
      sx={{
        borderTop: "1px solid #c6c6da",
      }}
    >
      <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
        {translate("footer_text")}
      </Typography>
    </Box>
  );
}
