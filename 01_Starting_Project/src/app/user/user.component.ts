import { Component, EventEmitter, input, Input , Output , output } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users'

// const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
// type User ={
//     id: string;
//     avatar: string;
//     name: string
// }
interface  User{
    id: string;
    avatar: string;
    name: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
}) 
export class UserComponent {
  @Input({required: true}) user!:User;
  // @Input({required: true}) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string
  // };
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select =output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() =>{
  //   return 'assets/users/'+ this.avatar;
  // })
  get imagePath(){
    return 'assets/users/'+ this.user.avatar;
  }

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/'+ this.selectedUser().avatar)

  // get imagePath(){
  //   return 'assets/users/'+ this.selectedUser.avatar
  // }

  onSelectUser(){
    // const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user.id);
    console.log('Clicked!');
  }
}
