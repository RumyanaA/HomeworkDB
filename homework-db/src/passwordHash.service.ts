import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordService {
  private saltOurRounds = 10;
  public async hashPassword(userPassword: string) {
    try {
      const hashedPassword = await bcrypt.hash(
        userPassword,
        this.saltOurRounds,
      );
      return hashedPassword;
    } catch (e) {
      console.log(e.message);
    }
  }
  //   public async comparePassword(inputPassword: string, userPassword: string) {
  //     return await bcrypt.compare(inputPassword, userPassword);
  //   }
}
