-- CreateTable
CREATE TABLE "Criminoso" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "bi" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "genero" TEXT NOT NULL,
    "imagem" TEXT
);

-- CreateTable
CREATE TABLE "HistoricoCriminal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "crime" TEXT NOT NULL,
    "data_ocorrencia" DATETIME NOT NULL,
    "data_detencao" DATETIME NOT NULL,
    "data_transferencia" DATETIME,
    "criminosoId" TEXT NOT NULL,
    CONSTRAINT "HistoricoCriminal_criminosoId_fkey" FOREIGN KEY ("criminosoId") REFERENCES "Criminoso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Transferencia" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "historicoCriminalId" TEXT NOT NULL,
    CONSTRAINT "Transferencia_historicoCriminalId_fkey" FOREIGN KEY ("historicoCriminalId") REFERENCES "HistoricoCriminal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Criminoso_bi_key" ON "Criminoso"("bi");

-- CreateIndex
CREATE UNIQUE INDEX "Transferencia_historicoCriminalId_key" ON "Transferencia"("historicoCriminalId");
