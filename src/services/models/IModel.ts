interface IModel<T> {
  salvar(obj: T): Promise<T>;
  apagar(id: string): Promise<T>;
  actualizar(obj: Partial<T>): Promise<T>;
}

export default IModel;
