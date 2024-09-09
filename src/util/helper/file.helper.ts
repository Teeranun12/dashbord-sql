import * as xlsx from 'xlsx';

export function validateExportFile(data: unknown[], workbook: xlsx.WorkBook, fileName: string, headers?: object) {
  try {
    let sheet;
    
    if (!data || data.length === 0) {
      sheet = xlsx.utils.json_to_sheet([headers]);
    } else {
      sheet = xlsx.utils.json_to_sheet(data);
    }

    xlsx.utils.book_append_sheet(workbook, sheet, fileName);
  } catch (error) {
    console.error(error);
  }

  const buffer = xlsx.write(workbook, {
    bookType: 'xlsx',
    type: 'buffer',
  });

  return buffer;
}
