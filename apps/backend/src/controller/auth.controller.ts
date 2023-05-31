import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post('create-account')
    public async create(){
        return 
    }
    
    @Post('login')
    public async login(){
        return
    }

    @Get('forgot-password')
    public async forgotPassword(){
        return
    }

}