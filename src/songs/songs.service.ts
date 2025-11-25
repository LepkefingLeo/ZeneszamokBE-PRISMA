import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';
import { contains } from 'class-validator';

@Injectable()
export class SongsService {
  constructor(private readonly db: PrismaService) {

  }
  create(createSongDto: CreateSongDto) {
    return 'This action adds a new song';
  }

  findAll(start: number, count: number) {
    return this.db.song.findMany({
      skip: start,
      take: count
    });
  }

  search(title: string) {
    return this.db.song.findMany({
      where: {
        title: {
          contains: title
        }
      }
    });
  }

  findOne(id: number) {
    return this.db.song.findUniqueOrThrow({
      where: {
        id
      },
      include: {
        album: {
          omit: {
            id: true
          }
        }
      }
    });
  }

  getLongest(top: number) {
  return this.db.song.findMany({
    orderBy: {
      lenght: 'desc'
    },
    take: top
  });
}

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
