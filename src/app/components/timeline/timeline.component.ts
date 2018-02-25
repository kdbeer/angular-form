import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  projects: any;

  constructor() {
    this.projects = [
      {
        id: "PJ001",
        project_name: 'awesome-project',
        date: '2017 July',
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eveniet! Nulla minima obcaecati recusandae, unde voluptatibus voluptas impedit quae ducimus minus ipsa fuga vitae. Saepe tempore tempora labore aspernatur soluta.",
        image: "b000001.jpg"
      },
      {
        id: "PJ002",
        project_name: 'Kasha (folklore)',
        date: '2017 December',
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eveniet! Nulla minima obcaecati recusandae, unde voluptatibus voluptas impedit quae ducimus minus ipsa fuga vitae. Saepe tempore tempora labore aspernatur soluta.",
        image: "b000002.jpg"
      },
      {
        id: "PJ003",
        project_name: 'What is buckwheat?',
        date: '2018 January',
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eveniet! Nulla minima obcaecati recusandae, unde voluptatibus voluptas impedit quae ducimus minus ipsa fuga vitae. Saepe tempore tempora labore aspernatur soluta.",
        image: "b000003.jpg"
      },
      {
        id: "PJ003",
        project_name: `Russia's Military`,
        date: '2018 January',
        decription: "The Ground Forces of the Russian Federation are the land forces of the Russian Armed Forces, formed from parts of the collapsing Soviet Army in 1992. ",
        image: "b000004.jpg"
      },
      {
        id: "PJ003",
        project_name: `Russian Armed Forces`,
        date: '2018 January',
        decription: "The Armed Forces of the Russian Federation are the military service of the Russian Federation, established after the dissolution of the Soviet Union. On 7 May 1992, Boris Yeltsin signed a presidential decree establishing the Russian Ministry of Defence and placing all Soviet Armed Forces.",
        image: "b000005.jpg"
      },
      {
        id: "PJ004",
        project_name: `Russian Armed Forces`,
        date: '2018 January',
        decription: "The Armed Forces of the Russian Federation are the military service of the Russian Federation, established after the dissolution of the Soviet Union. On 7 May 1992, Boris Yeltsin signed a presidential decree establishing the Russian Ministry of Defence and placing all Soviet Armed Forces.",
        image: "b000005.jpg"
      },

    ]
   }

  ngOnInit() {
  }

}
