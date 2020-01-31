import React from "react";
import { Link } from "react-router-dom";
import "./404.css";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="block_container">
      <div className="NotFound">
        <div className="nf_block">
          <h1 className="nf_h1">4 0 4</h1>
          <p className="nf_p">{t("notFound")}</p>
          <Link to="/">
            <button className="nf_button">{t("backMainBtn")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
