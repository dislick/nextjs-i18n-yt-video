import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  let { t } = useTranslation();

  return (
    <Layout>
      <h1>{t("common:greeting")}</h1>
    </Layout>
  );
}
