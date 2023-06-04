import DTO from "@/common/DTO/DTO";
import { Transformer } from "@/common/Transformer";
import { Expose } from "class-transformer";
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from "class-validator";

export class CreateTransactionDTO extends DTO {
  @Expose()
  @IsNumber()
  @Min(0)
  public amount: number;

  @Expose()
  @IsString()
  public fromAccountId: string;

  @Expose()
  @IsString()
  public toAccountId: string;

  @Expose()
  @IsString()
  @IsOptional()
  @MaxLength(128)
  public description?: string = "";

  @Expose()
  @IsDateString()
  @IsOptional()
  public date?: string = new Date().toISOString();

  constructor(data: ClassProperties<CreateTransactionDTO>) {
    super();

    Object.assign(
      this,
      Transformer.plainToInstance(CreateTransactionDTO, data)
    );
  }
}