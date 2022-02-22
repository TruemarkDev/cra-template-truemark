import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ROUTES from "constants/routes";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>{t("label.home")}</Link>
          </li>
          <li>
            <Link to={ROUTES.DASHBOARD}>{t("label.dashboard")}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
