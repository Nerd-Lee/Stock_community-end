import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";

interface ISeoProps {
  title: string;
  description?: string;
}

export function Seo({ title, description = "주커" }: ISeoProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${title} | 주커`}</title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
}
