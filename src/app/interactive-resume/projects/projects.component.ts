import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ks-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects = [
    {
      id: "url-shortener",
      link: "",
      router_link: "/url-shortener",
      image_version: "1500603809",
      title: "URL Shortener",
      caption: "Take long URLs and compress them into short links which are easy to share, tweet, email! Created entirely from scratch in both an Angular 2 version and a PHP version.",
      theme_color: "#FE993A",
      github_link: "https://github.com/kellenschmidt/urlshortener.kellenschmidt.com",
      description: "",
    },
    {
      id: "geodeals",
      link: "",
      router_link: "",
      image_version: "1500603809",
      title: "GeoDeals Web App",
      caption: "A web application enabling people to share the great deals they find in their daily lives with their local community and share their opinion on deals in their area for everyone's mutual benefit.",
      theme_color: "#FD55CD",
      github_link: "https://github.com/kellenschmidt/GeoDeals",
      description: "",
    },
    {
      id: "groceryquest",
      link: "",
      router_link: "",
      image_version: "1500603809",
      title: "GroceryQuest Web App",
      caption: "A web application to create and organize grocery lists then sort items by their location in the store to optimize the shopping experience.",
      theme_color: "#905FFF",
      github_link: "https://github.com/kellenschmidt/GroceryQuest",
      description: "",
    },
    {
      id: "wikibooks",
      link: "",
      router_link: "",
      image_version: "1500603809",
      title: "Wikibooks Search Engine",
      caption: "A search engine for Wikibooks, a library of more than 200,000 pages of educational reference documents.",
      theme_color: "#398BFF",
      github_link: "https://github.com/kellenschmidt/Wikibooks-Search-Engine",
      description: "",
    },
    {
      id: "material-tip-calculator",
      link: "https://play.google.com/store/apps/details?id=com.kellenschmidt.materialtipcalculator",
      router_link: "",
      image_version: "1500603809",
      title: "Material Tip Calculator",
      caption: "Tip calculator app for Android featuring Material Design. Published to the Google Play Store.",
      theme_color: "#25DFB1",
      github_link: "https://github.com/kellenschmidt/MaterialTipCalculator",
      description: "",
    },
    {
      id: "robot-competition",
      link: "",
      router_link: "",
      image_version: "1500603809",
      title: "Engineering Design Robot Competition",
      caption: "Semester-long immersive design challenge to collaborate with a team of 6 engineers to build and program a robot from scratch to autonomously navigate an obstacle course while competing against 15 other teams.",
      theme_color: "#35A608",
      github_link: "https://github.com/kellenschmidt/Engineering-Robot-Competition",
      description: "",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
