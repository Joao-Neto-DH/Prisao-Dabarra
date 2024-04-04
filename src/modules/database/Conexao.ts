import prisma from ".";

interface IConexao {}

class Conexao {
  private readonly db;
  constructor() {
    this.db = prisma;
  }
  /**
   * getDB
   */
  public getDB() {
    return this.db;
  }
}

export default Conexao;
