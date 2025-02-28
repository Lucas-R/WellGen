import { DataSource, DataSourceOptions } from "typeorm";
import ormconfig from "./ormconfig";

export const conn = new DataSource(ormconfig);