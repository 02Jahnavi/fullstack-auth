import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',           // your PostgreSQL username
      password: 'your_postgres_pass', // your PostgreSQL password
      database: 'authdb',             // your database name
      entities: [User],               // entities to auto-create tables
      synchronize: true,              // auto-create tables in dev mode
    }),
    AuthModule,                       // your auth module
  ],
})
export class AppModule {}
