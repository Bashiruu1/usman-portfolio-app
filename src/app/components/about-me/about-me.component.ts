import { Component, OnInit } from '@angular/core';
import { skillsData } from './about-me-data';

@Component({
  selector: 'portfolio-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  skills = skillsData;
  ngOnInit(): void {}
}
