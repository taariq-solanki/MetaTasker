-- CreateEnum
CREATE TYPE "Status" AS ENUM ('incomplete', 'completed', 'inprogress');

-- CreateTable
CREATE TABLE "Task" (
    "taskId" SERIAL NOT NULL,
    "taskTitle" TEXT NOT NULL,
    "taskDescription" TEXT NOT NULL,
    "taskStatus" "Status" NOT NULL DEFAULT 'incomplete',
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("taskId")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("teamId") ON DELETE RESTRICT ON UPDATE CASCADE;
