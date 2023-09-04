import { Component, OnInit } from '@angular/core';
import { UsernameService } from './username.service';
import { HttpClient } from '@angular/common/http';

export interface UserProps {
  avatar_url?: string;
  name: string;
  login?: string;
  bio?: string;
  public_repos?: number;
  created_at?: string;
  followers?: number;
  following?: number;
  location?: string;
  blog?: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'github-search-app';
  isDarkMode: boolean = false;
  term: string = "matthewkk01"

  userData: UserProps = {
    avatar_url: "",
    login: "",
    name: "",
    bio: "",
    public_repos: 0,
    created_at: "",
    followers: 0,
    following: 0,
    location: "",
    blog: "",
  }

  errorMsg: boolean = false;

  constructor(private http: HttpClient) { }

  data: UserProps = this.userData

  ngOnInit() {
    this.extractName(this.term)
  }
  moonImg = "/assets/images/moon.svg";
  sunImg = "/assets/images/sun.svg";


  async extractName(searchTerm: string) {
    this.term = searchTerm;

    // Build the API URL using the searchData
    const apiUrl: string = `https://api.github.com/users/${this.term}`;


    try {
      // Make the API request and await the response
      this.http.get<UserProps>(apiUrl).subscribe(
        (res: UserProps) => {
          // Handle successful response here
          this.userData = res;
        },
        (error) => {
          // Handle API request error here
          this.errorMsg = true;
        }
      );
    } catch (error) {
      // Handle synchronous errors here
      this.errorMsg = true;
    }
  }
  switchTheme() {
    const bodyClasses = window.document.body.classList;
    this.isDarkMode = !this.isDarkMode
    if (this.isDarkMode) {
      bodyClasses.add("dark")
    } else {
      bodyClasses.remove("dark")
    }
  }
}
