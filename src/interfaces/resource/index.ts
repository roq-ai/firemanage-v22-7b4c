import { FireDepartmentInterface } from 'interfaces/fire-department';
import { GetQueryInterface } from 'interfaces';

export interface ResourceInterface {
  id?: string;
  name: string;
  type: string;
  status: string;
  fire_department_id: string;
  created_at?: any;
  updated_at?: any;

  fire_department?: FireDepartmentInterface;
  _count?: {};
}

export interface ResourceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  status?: string;
  fire_department_id?: string;
}
