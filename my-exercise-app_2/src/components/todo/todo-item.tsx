import { cn } from "@/lib/utils";
import { EditIcon, Trash2 } from "lucide-react";
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
import { Field, FieldGroup } from "../ui/field";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface TodoItemProps {
  id: string;
  title: string;
  createAt: string;
  isComplete: boolean;
  handleEdit: (id: string, title: string) => void;
  handleDelete: (id: string) => void;
  handleIsComplete: (id: string, isComplete: boolean) => void;
}

export default function TodoItem({
  id,
  title,
  handleIsComplete,
  isComplete,
  createAt,
  handleDelete,
  handleEdit,
}: TodoItemProps) {
  const t = useTranslations("TodoItem");
  const [titleInput, setTitleInput] = useState(title);

  const [complete, setComplete] = useState(isComplete);

  function handleCheck() {
    setComplete(!complete);
    handleIsComplete(id, !complete);
  }

  function onEdit() {
    if (titleInput === title) {
      return;
    }
    handleEdit(id, titleInput.trim());
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

      <div className="flex items-center gap-4">

          <Dialog>
          <DialogTrigger className="p-2 rounded-full text-blue-500 cursor-pointer hover:bg-blue-100 active:bg-blue-200 transition-colors">
            <EditIcon className="w-5 h-5" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">
                  {/* {t("dialogTitle")} */}
                  Edit Todo
              </DialogTitle>
                <DialogDescription>
                  {/* {t("dialogDescription")} */}
                  Click save when you're done.
              </DialogDescription>
              </DialogHeader>
              <FieldGroup>
                 <Field>
              <Label htmlFor="name-1">Title</Label>
              <Input id="name-1" name="title" onChange={(e) => setTitleInput(e.target.value)} defaultValue={titleInput} />
            </Field>
              </FieldGroup>
            <DialogFooter>
              <DialogClose asChild>
                <div className="flex gap-4">
                  <Button variant="outline" className="cursor-pointer">
                    {t("cancelLabel")}
                  </Button>
                  <Button
                    // variant="destructive"
                    className="cursor-pointer bg-blue-500"
                    onClick={onEdit}
                  >
                      {/* {t("deleteLabel")}| */}
                      Save Changes
                  </Button>
                </div>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>


        <Dialog>
          <DialogTrigger className="p-2 rounded-full text-red-500 cursor-pointer hover:bg-red-100 active:bg-red-200 transition-colors">
            <Trash2 className="w-5 h-5" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">
                {t("dialogTitle")}
              </DialogTitle>
              <DialogDescription>{t("dialogDescription")}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <div className="flex gap-4">
                  <Button variant="outline" className="cursor-pointer">
                    {t("cancelLabel")}
                  </Button>
                    <Button
                      variant={"destructive"}
                    className="cursor-pointer"
                    onClick={() => handleDelete(id)}
                  >
                    {t("deleteLabel")}
                  </Button>
                </div>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      </div>
    </div>
  );
}
