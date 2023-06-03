import DTO from "@/common/DTO/DTO";
import { Transformer } from "@/common/Transformer";
import { Expose } from "class-transformer";
import { Allow, IsNumber, IsOptional, IsString } from "class-validator";

export class SearchAccountDTO extends DTO {
  @Expose()
  @IsString()
  public name: string;

  @Expose()
  @IsString()
  @IsOptional()
  public description?: string;

  @IsNumber()
  @Expose()
  public page: number = 1;

  public static create(data: ClassProperties<SearchAccountDTO>) {
    data.page &&= +data.page;
    return Transformer.plainToInstance(SearchAccountDTO, data);
  }
}
