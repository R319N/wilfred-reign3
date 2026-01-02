import { Aldrich, Exo, Poppins, Saira_Stencil_One } from "next/font/google";

const aldrich = Aldrich({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});
const exo = Exo({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});
const saira_stencil_one = Saira_Stencil_One({
    weight: ["400",],
    subsets: ["latin"],
    display: "swap",
});

export function SairaStencilWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className={saira_stencil_one.className}>{children}</div>;
}

export function ExoFontWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className={exo.className}>{children}</div>;
}
