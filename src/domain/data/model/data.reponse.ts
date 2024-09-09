export class DataResponse {
    table_name: string;
    fields: {
        name: string;
        type: string;
        data?: object | null;
    }[];
}
