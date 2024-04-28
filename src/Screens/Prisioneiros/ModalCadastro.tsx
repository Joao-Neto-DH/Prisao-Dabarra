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
import { cadastrarCriminoso } from "@/actions/cadastrar-criminoso";
import { isEmptyString } from "@/lib/utils";
import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";

function FormField({ status }: { status: string }) {
  const { pending } = useFormStatus();

  return (
    <fieldset disabled={pending}>
      <Input
        type="text"
        name="nome"
        className="py-2 w-full"
        placeholder="Nome do prisioneiro"
        required
      />

      <Input
        type="text"
        name="bi"
        className="py-2 w-full"
        placeholder="BI"
        required
      />
      <Input
        type="text"
        name="nacionalidade"
        className="py-2 w-full"
        placeholder="Nacionalidade"
        required
      />
      <Input
        type="text"
        name="provincia"
        className="py-2 w-full"
        placeholder="Província"
        required
      />
      <Input
        type="text"
        name="genero"
        className="py-2 w-full"
        placeholder="Gênero"
        required
      />
      <Input
        type="text"
        name="imagem"
        className="py-2 w-full"
        placeholder="Imagem"
        required
      />
      <Input
        type="date"
        name="data_nascimento"
        className="py-2 w-full"
        placeholder="Data de nascimento"
        required
      />
      {status && (
        <div className="p-2 border rounded text-xs text-blue-600 mt-2">
          <p>{status}</p>
        </div>
      )}

      <Button className="text-sm mt-2">Cadastrar</Button>
    </fieldset>
  );
}

function ModalCadastro() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-auto ml-auto text-sm py-1 px-2">
          Cadastrar prisioneiro
        </Button>
      </DialogTrigger>
      <DialogContent className="w-auto">
        <DialogHeader>
          <DialogTitle>Cadastrar criminoso</DialogTitle>
          <DialogDescription>
            Preencha os campos para cadastrar criminoso
          </DialogDescription>
        </DialogHeader>
        <form
          ref={formRef}
          action={async (formData) => {
            setStatus("");
            const res = await cadastrarCriminoso(formData);
            if (typeof res === "string" || isEmptyString(res.bi)) {
              setStatus(
                "Erro ao cadastrar prisioneiro. Por favor certifique-se que não há outro prisioneiro com estes dados e tente novamente!"
              );
            } else {
              setStatus("Prisioneiro cadastrado!");
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

export default ModalCadastro;
