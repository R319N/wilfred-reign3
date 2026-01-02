"useClient";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

const GlowingText = styled(Typography)`
color: ${({ theme }) => theme.palette.primary.main},
text-shadow:
"0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f, 0 0 60px #00f, 0 0 70px #00f",
animation: "$glow 1s ease-in-out infinite alternate",
`;
export default GlowingText;
