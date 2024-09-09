import { validateExportFile } from "../../../util/helper/file.helper";
import { DataResponse } from "../model/data.reponse";
import { DataRepository } from "../repository/data.repository";
import * as xlsx from 'xlsx';

export class Domain1Service {
  private databaseRepo: DataRepository;

  constructor() {
    this.databaseRepo = new DataRepository();
  }

  async getDataByRepo(repo: string) {
    const response = await this.databaseRepo.getDataByRepo(repo);

    return response;
  }

  async getDataBase() {
    const getData = await this.databaseRepo.getAllData();
    const dataMap = new Map<
      string,
      {
        fields: [
          {
            column_name: string;
            data_type: string;
            data: object | null;
          }
        ];
      }
    >();
    const tableNames = new Set<string>();
    const reponse: DataResponse[] = [];

    for (const data of getData) {
      const tableName = data["table_name"].toString();
      const columnName = data["column_name"].toString();
      const dataType = data["data_type"].toString();

      if (dataMap.has(tableName)) {
        const exsistingTableName = dataMap.get(tableName);

        exsistingTableName.fields.push({
          column_name: columnName,
          data_type: dataType,
          data: null,
        });
      } else {
        tableNames.add(tableName);

        dataMap.set(tableName, {
          fields: [
            {
              column_name: columnName,
              data_type: dataType,
              data: null,
            },
          ],
        });
      }
    }

    tableNames.forEach((tableName) => {
      const exsistingTableName = dataMap.get(tableName);
      reponse.push({
        table_name: tableName,
        fields: exsistingTableName.fields.map((field) => {
          return {
            name: field.column_name,
            type: field.data_type,
            data: null,
          };
        }),
      });
    });

    return reponse;
  }

  async ExportDataTable(table: string , fileName: string) {
    const headerData = await this.databaseRepo.getBaseByTable(table);
    const data = await this.databaseRepo.getDataByRepo(table);
    
    let headers = {};

    for ( const item of headerData){
      const name = item["column_name"].toString();

      headers = {
        ...headers,
        [name] : name
      }
    }

    const workbook = xlsx.utils.book_new();

    const buffer = validateExportFile(data, workbook, fileName, headers);

    return buffer;
  }

}
