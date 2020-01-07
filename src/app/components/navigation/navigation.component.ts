import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faBell } from '@fortawesome/free-regular-svg-icons';
import { AuthenticationService } from 'src/app/providers/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('dropdown', { static: false }) dropdown: ElementRef;
  public faPlus = faPlus;
  public faBell = faBell;
  public faUserCircle = faUserCircle;
  public faChevronDown = faChevronDown;
  clickedMyAccount: boolean;

  constructor(private renderer2: Renderer2, private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  openDropdown() {
    this.renderer2.addClass(this.dropdown.nativeElement, 'show');
  }

  closeDropdown() {
    this.renderer2.removeClass(this.dropdown.nativeElement, 'show');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
