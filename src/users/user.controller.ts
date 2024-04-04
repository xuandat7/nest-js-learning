import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller('users')

export class UserController{
    constructor (@Inject('XUAN_DAT_7') private readonly userService: UserService){}
    // @UsePipes(new ValidationPipe())
    @Post()
    createUser(@Body() user: UserDto): UserDto{
        return this.userService.createUser(user);
    }
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id : number){
        return this.userService.getUserById(id);
    }
}