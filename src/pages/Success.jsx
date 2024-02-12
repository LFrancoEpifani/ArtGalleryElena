import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

export default function Success() {

  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-6 md:p-12 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-green-600 mb-4">{t("success_title")}</h2>
        <p className="text-gray-700 mb-6">{t("success_message")}</p>
        <Link to={"/collections"}>
        <div className="flex justify-center">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          {t("button_text")}
          </button>
        </div>
        </Link>
      </div>
    </div>
  )
}
