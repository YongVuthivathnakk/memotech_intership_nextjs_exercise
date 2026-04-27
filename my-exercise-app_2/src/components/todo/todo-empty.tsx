import { ClipboardList } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TodoEmpty() {
    const t = useTranslations("TodoEmpty")
  return (
      

    <div className="flex  flex-col border-2 broder-gray-50 items-center text-gray-400 bg-gray-50 py-6 gap-6 rounded-md">
          <ClipboardList className="w-12 h-12"/>
            <p className="text-md sm:text-lg">{t("label")}</p>
    </div>

  );
}
