import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [{
        provide: 'XUAN_DAT_7',
        useClass: UserService
    }]
})
export class UserModule{

}