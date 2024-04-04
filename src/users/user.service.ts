import { Body, Injectable, Param, ParseIntPipe, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { log } from "console";
import { plainToClass } from "class-transformer";

@Injectable()
export class UserService{
    // @UsePipes(new ValidationPipe())
    createUser(user: any): any{
        user.createdAt = new Date();
        user.updatedAt = new Date();
        user.id = 1;
        return UserDto.plainToClass(user);
    }
    getUserById(@Param('id', ParseIntPipe) id: number){
        console.log(id);
        return 'ok';
    }
}