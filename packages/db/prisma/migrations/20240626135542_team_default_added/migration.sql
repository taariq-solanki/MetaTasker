-- AlterTable
CREATE SEQUENCE team_teamid_seq;
ALTER TABLE "Team" ALTER COLUMN "teamId" SET DEFAULT nextval('team_teamid_seq');
ALTER SEQUENCE team_teamid_seq OWNED BY "Team"."teamId";
