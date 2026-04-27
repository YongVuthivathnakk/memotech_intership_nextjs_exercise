import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

interface TodoItemProps {
  id: string;
  title: string;
  createAt: string;
  handleDelete: (id: string) => void;
}

export default function TodoItem({ id, title, createAt, handleDelete }: TodoItemProps) {
  const t = useTranslations("TodoItem");
  
  
  const [isComplete, setIsComplete] = useState(false);

  function handleCheck() {
    setIsComplete(!isComplete);
  }

  return (
    <div className="flex justify-between p-5 rounded-md border-2 broder-gray-500 bg-gray-50 hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-6">
        <input
          className="w-5 h-5 cursor-pointer"
          type="checkbox"
          checked={isComplete}
          onChange={handleCheck}
        />
        <p className={cn(isComplete ? "line-through" : "", "text-lg")}>
          {title}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <p
          className={cn(
            isComplete
              ? "bg-emerald-100 text-emerald-500 border-emerald-200"
              : "bg-amber-100 text-amber-500 border-amber-200",
            "border-2 text-center px-2 py-1 rounded-md transition-all",
          )}
        >
          {isComplete ? t("complete") : t("pending")}
        </p>

        <Dialog>
                  <DialogTrigger className="p-2 rounded-full text-red-500 cursor-pointer hover:bg-red-100 active:bg-red-200 transition-colors">
          <Trash2 className="w-5 h-5" />
                      
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">{t("dialogTitle")}</DialogTitle>
              <DialogDescription>
                {t("dialogDescription")}
              </DialogDescription>
                      </DialogHeader>
                         <DialogFooter>
          <DialogClose asChild>
                              <div className="flex gap-4">
                  <Button variant="outline" className="cursor-pointer">{ t("cancelLabel")}</Button>
                  <Button variant="destructive" className="cursor-pointer" onClick={() => handleDelete(id)}>{ t("deleteLabel")}</Button>
                                  
            </div>
          </DialogClose>
        </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
