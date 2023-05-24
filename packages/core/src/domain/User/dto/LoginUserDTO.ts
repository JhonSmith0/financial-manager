import DTO from "@/common/DTO/DTO";
import UserProps from "../types/UserProps";
import { Expose, plainToInstance } from "class-transformer";
import { IsEmail, MaxLength, MinLength } from "class-validator";
import plainToInstanceConfigs from "@/common/configs/plainToInstanceConfigs";

export default class LoginUserDTO
  extends DTO
  implements Pick<UserProps, "email" | "password">
{
  @Expose()
  @IsEmail()
  public email: string;
  @Expose()
  @MinLength(8)
  @MaxLength(256)
  public password: string;

  public static create(data: ClassProperties<LoginUserDTO>) {
    return plainToInstance(LoginUserDTO, data, plainToInstanceConfigs);
  }
}