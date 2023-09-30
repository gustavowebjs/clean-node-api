import { ICreateTenantUseCase } from "@/domain/usecases/tenant/create-tenant-use-case";
import { Controller } from "@/presentation/protocols/controller";

export class CreateTenantController implements Controller {
  constructor(private readonly createTenantUseCase: ICreateTenantUseCase) {}

  async handle(request: CreateTenantController.Request): Promise<any> {
    try {
      const { name } = request;

      const tenant = await this.createTenantUseCase.execute(name);

      return {
        statusCode: 201,
        body: tenant,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          message: error.message || "Unexpected error.",
        },
      };
    }
  }
}

export namespace CreateTenantController {
  export type Request = {
    name: string;
  };
}
