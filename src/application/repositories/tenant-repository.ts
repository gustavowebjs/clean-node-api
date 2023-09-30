import { Tenant } from "../../domain/entities/tenant";

export interface ITenantRepository {
  list(): Promise<Tenant>;
  create(tenant: Tenant): Promise<Tenant>;
  update(tenant: Tenant): Promise<Tenant>;
  delete(id: string): Promise<void>;
}
