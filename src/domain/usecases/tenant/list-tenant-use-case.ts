import { Tenant } from "../../entities/tenant";

export interface IListTenantUseCase {
  execute(page?: number): Promise<Tenant[]>;
}
