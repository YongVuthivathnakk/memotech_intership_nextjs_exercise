import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TodoInput() {

  const t = useTranslations("TodoInput");


  return (
    <div className="flex gap-6 p-6 rounded-lg bg-white shadow-xs mx-6 my-6 sm:mx-16 md:mx-32 lg:mx-64">
      <input type="text" placeholder={t("placeholder")} className="px-4 text-lg rounded-lg w-full border-2 border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:bg-white transition-all" />

      <button className="flex min-w-36 items-center gap-3 bg-emerald-500 px-4 py-4 rounded-lg shadow-sm font-bold text-white hover:bg-emerald-600 cursor-pointer active:bg-emerald-700">
        <Plus className="text-white w-6 h-6" />
        <span>{t("button-label")}</span>
      </button>
    </div>
  );
}
