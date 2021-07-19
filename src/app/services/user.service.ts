import { Injectable } from '@angular/core';
import {IUser} from "../components/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // copy mang du lieu tu ben user-list sang service
  users: IUser[] = [
    {
      id: 1,
      name: 'Nguyen Van A',
      email: 'test@example.com',
      phone: '0123456789',
      address: 'Viet Nam'
    },
    {
      id: 2,
      name: 'Nguyen Van B',
      email: 'test@example.com',
      phone: '0123456789',
      address: 'Viet Nam'
    },
    {
      id: 3,
      name: 'Nguyen Van C',
      email: 'test@example.com',
      phone: '0123456789',
      address: 'Viet Nam'
    }
  ]

  // tao 1 ham get all de lay gia tri
  // IUser la kieu du lieu nhe'
  getAll(): IUser[]{
    return this.users;
  }
}
