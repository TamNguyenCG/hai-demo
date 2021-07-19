import {Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from "../../IUser";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // để sử dụng thì tiem cac service can su dung vao contrustor
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  // sau khi copy thi de mang du lieu null (anh nghĩ xóa đi cũng k ảnh hưởng, vì mình lấy từ bên service qua rồi)
  // users: IUser[] = [];

  displayedColumns: string[] = ['No.', 'Name', 'Email', 'Phone', 'Address'];
  // vi minh da chuyen mang user sang service nen lay lai gia tri từ bên service
  dataSource = new MatTableDataSource<IUser>(this.userService.getAll());

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  // 1 số chức năng như tìm kiếm + delete thì em dựa theo bài a Luân demo là làm được

}

