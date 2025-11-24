import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AlbumsService {
  constructor (private readonly db: PrismaService) {}

  create(createAlbumDto: CreateAlbumDto) {
    return this.db.album.create({
      data: createAlbumDto
    });
  }

  addSong(albumid: number, songid: number) {
    return this.db.album.update({
      where: {
        id: albumid
      },
      data: {
        songs: {
          connect: {
            id: songid
          }
        }
      },
      include: {
        songs: true
      }
    });
  }

  findAll() {
    return `This action returns all albums`;
  }

  findOne(id: number) {
    return `This action returns a #${id} album`;
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return `This action updates a #${id} album`;
  }

  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
