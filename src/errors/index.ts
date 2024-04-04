export class AppError extends Error {
  public readonly status;
  constructor(message: string, status: number = 400) {
    super(message);
    this.status = status;
  }
}
