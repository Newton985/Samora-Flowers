import "reflect-metadata";
import { DataSource } from "typeorm";

let dataSource: DataSource;

export const getDataSource = async () => {
  if (!dataSource?.isInitialized) {
    dataSource = new DataSource({
      entities: [],
      synchronize: true,
      type: "postgres",
      logging: false,
      ssl: process.env.NODE_ENVIRONMENT !== "development",
      extra: process.env.NODE_ENVIRONMENT !== "development" && {
        ssl: { rejectUnauthorized: false },
      },
      url: process.env.DATABASE_URL,
    });

   // await dataSource.initialize();

    console.log("Database inizialisation complete >>");
  }

  return dataSource;
};
