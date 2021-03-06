import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './app-top-nav.component.html',
  styleUrls: ['./app-top-nav.component.css']
})
export class AppTopNavComponent implements OnInit {
  currentPack: any;
  constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; });
  }
  changeLangToENG() {
      this.changeLangService.changeLangToENG();
  }
  changeLangToPL() {
      this.changeLangService.changeLangToPL();
  }
  setEventListenerResize() {
      const current_window_width = window.innerWidth;
      if (current_window_width <= 1060) {
          document.getElementById('nav-icon1').click();
          document.getElementById('nav-icon1').click();
      }
      window.addEventListener('resize', function() {
          const current_window_width = window.innerWidth;
          if ((current_window_width >= 1060 && !document.getElementById('nav-icon1').classList.contains('open')) ||
              (current_window_width <= 1060 && document.getElementById('nav-icon1').classList.contains('open'))) {
              document.getElementById('nav-icon1').click();
          }
      });
  }
  setEventListenerMenu() {
      document.getElementById('nav-icon1').addEventListener('click', function() {
          this.classList.toggle('open');
          const menu_items = document.getElementsByClassName('nav-hidden');
          const menu = this;
          for (let i = 0; i < menu_items.length; i++) {
              if (menu.classList.contains('open')) {
                  (<HTMLElement> menu_items[i]).style.display = 'flex';
              } else {
                  (<HTMLElement>menu_items[i]).style.display = 'none';
              }
          }
      });
  }
  ngOnInit() {
      this.setEventListenerMenu();
      this.setEventListenerResize();
  }
}

