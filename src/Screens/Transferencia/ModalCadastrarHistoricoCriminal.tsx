import React, { useRef, useState } from "react";
import Button from "@/Components/Buttons";
import Input from "@/Components/Input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { cadastrarHistoricoCriminal } from "@/actions/cadastrar-historico-criminal";
import { PlusCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";

function FormField({ status }: { status: string }) {
  const searchParams = useSearchParams();
  const { pending } = useFormStatus();

  return (
    <fieldset disabled={pending}>
      <input
        type="hidden"
        name="criminosoID"
        value={searchParams.get("prisioneiro")!}
      />
      <Input
        type="text"
        name="crime"
        className="py-2 w-full"
        placeholder="Crime cometido"
        required
      />

      <div className="mt-2">
        <label className="font-bold">Data de ocorrência</label>
        <Input
          type="date"
          name="data_ocorrencia"
          className="py-2 w-full"
          placeholder="Data de ocorrência"
          required
        />
      </div>
      <div className="mt-2">
        <label className="font-bold">Data de detenção</label>
        <Input
          type="date"
          name="data_detencao"
          className="py-2 w-full"
          placeholder="Data de detenção"
          required
        />
      </div>
      <div className="mt-2">
        <label className="font-bold">Data de tranferência</label>
        <Input
          type="date"
          name="data_transferencia"
          className="py-2 w-full"
          placeholder="Data de tranferência"
          required
        />
      </div>

      {status && (
        <div className="p-2 border rounded text-xs text-blue-600 mt-2">
          <p>{status}</p>
        </div>
      )}

      <Button className="text-sm mt-2">Cadastrar</Button>
    </fieldset>
  );
}

function ModalCadastrarHistoricoCriminal() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-auto ml-auto text-sm py-1 px-2">
          <PlusCircle />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-auto">
        <DialogHeader>
          <DialogTitle>Cadastrar histórico criminal</DialogTitle>
          <DialogDescription>
            Preencha os campos para cadastrar histórico
          </DialogDescription>
        </DialogHeader>
        <form
          ref={formRef}
          action={async (formData) => {
            setStatus("");
            const res = await cadastrarHistoricoCriminal(formData);
            if (typeof res === "string") {
              setStatus("Erro ao cadastrar histórico.");
            } else {
              setStatus("Histórico cadastrado!");
              formRef.current?.reset();
            }
          }}
        >
          <FormField status={status} />
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalCadastrarHistoricoCriminal;
