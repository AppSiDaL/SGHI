import { ColumnBodyOptions } from "primereact/column";
import { ReactNode } from "react";

export interface ColumnProps {
    field: string;
    header: string;
    
    body: undefined|ReactNode | ((data: any, options: ColumnBodyOptions) => ReactNode);
  }