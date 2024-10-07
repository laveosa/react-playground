import { createAvatar } from '@dicebear/avatars';
import * as pixelStyle from '@dicebear/avatars-human-sprites';
import * as botStyle from '@dicebear/avatars-bottts-sprites';
import * as humanStyle from '@dicebear/avatars-avataaars-sprites';
import { Options as PixelOptions } from '@dicebear/avatars-human-sprites/dist/options';
import { Options as BotOptions } from '@dicebear/avatars-bottts-sprites/dist/options';
import { Options as HumanOptions } from '@dicebear/avatars-avataaars-sprites/dist/options';

const pixelOptions: PixelOptions = {
  mood: ['happy'],
};

const botsOptions: BotOptions = {};

const humanOptions: HumanOptions = {
  eyes: ['happy', 'default'],
  eyebrow: ['default', 'raisedExcitedNatural'],
  mouth: ['smile', 'default'],
};

const generateAvatar = (name: string, options: any, styles): string => {
  return createAvatar(styles, { ...options, seed: name });
};

class AvatarService {
  static generatePixelAvatar(name?: string, options?: PixelOptions): string {
    return generateAvatar(name, options || pixelOptions, pixelStyle);
  }

  static generateBotAvatar(name?: string, options?: BotOptions): string {
    return generateAvatar(name, options || botsOptions, botStyle);
  }

  static generateHumanAvatar(name?: string, options?: HumanOptions): string {
    return generateAvatar(name, options || humanOptions, humanStyle);
  }
}

export default AvatarService;
