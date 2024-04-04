import { Expose } from "class-transformer";
import { IsAlpha, IsAlphanumeric, IsAscii, IsNotEmpty, Length, isNotEmpty } from "class-validator";
import { BaseDto } from "src/common/base.dto";

export class UserDto extends BaseDto{
    @IsNotEmpty()
    @IsAlphanumeric()
    @Expose()
    username: string;

    @IsNotEmpty()
    @Length(8)
    @Expose()
    password: string;
}