import { cinemas } from "./constants/mock";
import Cinemas from "./components/cinemas/component";
import Layout from "./components/layout/component";
import UserContextProvider from "./contexts/user";
import { useTranslation, Trans } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { NativeName: "English" },
    pol: { NativeName: "Polish" },
  };

  return (
    <UserContextProvider>
      <Layout>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng].NativeName}
            </button>
          ))}
        </div>
        {t("learn")}
        <p>
          <Trans i18nKey={"description"}>
            Buy tickets and enjoy our comfortable seats, delicious popcorn, and
            family time!
          </Trans>
        </p>
        <Cinemas cinemas={cinemas} />
      </Layout>
    </UserContextProvider>
  );
}
