import { Expose, Transform, plainToClass, plainToInstance } from "class-transformer";

export abstract class BaseDto{
    @Expose()
    id: number;

    firstName: string;

    lastName: string;

    @Expose()
    @Transform(({obj})=> obj.firstName + ' ' + obj.lastName)
    fullName:string;

    @Expose()
    createdAt: Date;
    
    @Expose()
    updatedAt: Date;



    static plainToClass<T> (this: new(...args: any[]) => T, obj: T): T{
        return plainToInstance(this, obj, {excludeExtraneousValues:true});
    }
}