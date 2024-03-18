"use client";

import Button from "@/Components/Buttons";
import Input from "@/Components/Input";
import { useForm } from "react-hook-form";

type Login = { numeroAgente: string; senha: string };

function LoginForm() {
  const { register, handleSubmit } = useForm<Login>();

  const submit = (data: Login) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="p-8 w-80 rounded-lg border shadow-xl">
      <p className="text-2xl font-bold text-center mb-4 uppercase">Polícia</p>
      <form onSubmit={handleSubmit(submit)} className="space-y-4">
        <Input
          {...register("numeroAgente", { required: true })}
          type="text"
          // name="agente"
          // id="agente"
          // required
          placeholder="Número de Agente"
          label="Número de Agente"
        />
        <Input
          {...register("senha", { required: true })}
          type="password"
          // name="senha"
          // id="senha"
          // required
          placeholder="Senha"
          label="Senha"
        />
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
}

export default LoginForm;
