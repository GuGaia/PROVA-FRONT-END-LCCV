export interface Projeto {
    id_projeto: number;  
    projeto: string;  
    id_financiador: number;  
    id_area_tecnologica: number;
    coordenador: string;  
    ativo: boolean; 
    inicio_vigencia: string | Date;  
    fim_vigencia: string | Date;  
  }
  