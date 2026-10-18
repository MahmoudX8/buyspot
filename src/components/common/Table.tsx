import React from "react";
import styles from "./Table.module.css";

interface tableProps {
  columns: string[];
  data: Record<string, string | number>[];
  striped?: boolean;
}
export const Table = ({ columns, data, striped = false }: tableProps) => {
  return (
    <>
      <div className={styles.tablediv}>
        {/* <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col}>{row[col.toLowerCase()]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </>
  );
};
