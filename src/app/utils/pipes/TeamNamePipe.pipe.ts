
import { Pipe, PipeTransform } from '@angular/core';
import { DataStore } from '../api/data.store';

@Pipe({name: 'teamName'})
export class TeamNamePipe implements PipeTransform {

  constructor(private store: DataStore) {}

  transform(userId: string | null | undefined): string | undefined {
    const users = this.store.allUsers;
    return users.find((u) => userId === u.id)?.teamName;
  }
}
