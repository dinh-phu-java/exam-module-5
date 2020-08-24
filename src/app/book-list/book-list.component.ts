import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  loggedIn=false;
  constructor(private bookService: BookService, private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.getBookList();
    this.loggedIn=this.authService.getCredential();
  }

  bookList;
  searchValue:string;
  isFind=false;
  booksNumber: number;

  search(){
    for(var i=0;i<this.bookList.length;i++){
      if(this.bookList[i].title==this.searchValue){
        this.isFind=true;
        this.bookList=[];
        this.bookList.push(this.bookList[i]);
      }
    }
    
  }
  getBookList = () => {
    this.bookService.getBookList().subscribe(
      response => {this.bookList = response; this.booksNumber = this.bookList.length;},
      error => console.error(error)
    );
  }

  detail(book: any) {
    this.bookService.setBook(book);
    this.router.navigate(["/book-detail"])
  }

  edit(book: any) {
    this.bookService.setBook(book);
    this.router.navigate(["/book-edit"]);
  }

  delete(book: any) {
    this.bookService.setBook(book);
    this.router.navigate(["/book-delete"]);
  }

  logout(){
    
    this.authService.logout();
    this.loggedIn=false;
    this.router.navigate(['/']);
    
  }

  
}
