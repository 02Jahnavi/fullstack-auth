import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(userData: { email: string; password: string; role: string }) {
    const existing = await this.userRepository.findOne({ where: { email: userData.email } });
    if (existing) throw new BadRequestException('User with this email already exists');

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = this.userRepository.create({ ...userData, password: hashedPassword });
    await this.userRepository.save(user);

    const payload = { email: user.email, sub: user.id, role: user.role };
    return { access_token: this.jwtService.sign(payload), user: { email: user.email, role: user.role } };
  }

  async login({ email, password }: { email: string; password: string }) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    const payload = { email: user.email, sub: user.id, role: user.role };
    return { access_token: this.jwtService.sign(payload), user: { email: user.email, role: user.role } };
  }
}
