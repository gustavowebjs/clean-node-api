import { Tenant } from "../../entities/tenant";

export interface ICreateTenantUseCase {
  execute(name: string): Promise<Tenant>;
}
