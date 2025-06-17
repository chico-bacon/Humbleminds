-- CreateTable
CREATE TABLE "Genero" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Editora" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Livro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "id_genero" INTEGER NOT NULL,
    "id_editora" INTEGER NOT NULL,
    "data_lancamento" DATETIME NOT NULL,
    "paginas" INTEGER NOT NULL,
    CONSTRAINT "Livro_id_genero_fkey" FOREIGN KEY ("id_genero") REFERENCES "Genero" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Livro_id_editora_fkey" FOREIGN KEY ("id_editora") REFERENCES "Editora" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leitor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
