import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import useLocales from "../hooks/useLocales";
import Iconify from "./Iconify";

const ButtonStyle = styled(Button)({
  background: "#745ACB",
  borderRadius: "12px",
  padding: "16px 32px",
  color: "#fff",
  border: "1px solid #ccc",
  transition: "all 300ms ease",
  "&:hover": {
    background: "#453380",
  },
});

export default function DefaultBtn({ text, icon, href, hreftype }) {
  const { translate } = useLocales();
  return (
    <>
      {hreftype === "section" ? (
        <ButtonStyle href={href} color="default" variant="button">
          {translate(text)}
          <Iconify icon={icon} width={20} height={20} ml={1} />
        </ButtonStyle>
      ) : (
        <ButtonStyle
          href={href}
          color="default"
          variant="button"
          target="_blank"
        >
          {translate(text)}
          <Iconify icon={icon} width={20} height={20} ml={1} />
        </ButtonStyle>
      )}
    </>
  );
}
