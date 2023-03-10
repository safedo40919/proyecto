import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number
  constructor(private readonly ConfigService: ConfigService){
    AppModule.port = this.ConfigService.get('PORT')
  }
}
