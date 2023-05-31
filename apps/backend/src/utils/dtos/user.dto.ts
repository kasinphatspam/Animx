import { ArrayMinSize, IsArray, IsBase64, IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength } from 'class-validator';


export class CreateUserByEmailDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    public id: string

    @IsNotEmpty()
    @IsEmail()
    @MaxLength(150)
    public email: string

    @IsOptional()
    @IsNotEmpty()
    @IsPhoneNumber('TH')
    public tel?: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    public password: string
    public firstname: string
    public lastname: string

    @IsOptional()
    @IsNotEmpty()
    @IsBase64()
    public image?: string
}