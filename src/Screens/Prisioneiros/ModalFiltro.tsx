"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { DatePicker } from "@/Components/DatePicker";
import { useState } from "react";
import Button from "@/Components/Buttons";
import Input from "@/Components/Input";

function ModalFiltro() {
  const [crimeDate, setCrimeDate] = useState<Date>();
  const [arrestedDate, setArrestedDate] = useState<Date>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" className="w-auto p-2 rounded border ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M6.17 18a3.001 3.001 0 015.66 0H22v2H11.83a3.001 3.001 0 01-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 015.66 0H22v2h-4.17a3.001 3.001 0 01-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 015.66 0H22v2H11.83a3.001 3.001 0 01-5.66 0H2V4h4.17z"></path>
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-auto">
        <DialogHeader>
          <DialogTitle>Filtrar prisioneiros</DialogTitle>
          <DialogDescription>Pesquisa de prisioneiros</DialogDescription>
        </DialogHeader>
        <form action="#">
          <Input
            type="text"
            className="py-2 w-full"
            placeholder="Nome do prisioneiro"
          />

          <Input
            type="text"
            className="py-2 w-full"
            placeholder="Local do crime"
          />

          <div className="flex flex-row gap-2 mt-2">
            <div className="w-1/2">
              <DatePicker
                date={crimeDate}
                onSelectDate={(date) => {
                  date && setCrimeDate(date);
                }}
                title="Data do crime"
              />
            </div>
            <div className="w-1/2">
              <DatePicker
                date={arrestedDate}
                onSelectDate={(date) => {
                  date && setArrestedDate(date);
                }}
                title="Data de prisão"
              />
            </div>
          </div>

          <Button className="text-sm mt-2">Pesquisar</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalFiltro;
