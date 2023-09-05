import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent {
  constructor() {}
  show: boolean = false;

  showGraph() {
    this.show = true;
  }
  showList() {
    this.show = false;
  }

  chartOptions = {
    theme: 'light2',
    animationEnabled: true,
    exportEnabled: true,
    axisY: {
      includeZero: true,
      valueFormatString: '$#,##0k',
    },
    dataPointWidth: 20,
    data: [
      {
        type: 'column', //change type to bar, line, area, pie, etc
        yValueFormatString: '$#,##0k',
        color: '#FF7F5C',
        dataPoints: [
          { label: 'Station Name Dummy 1', y: 160 },
          { label: 'Station Name Dummy 1', y: 67 },
          { label: 'Station Name Dummy 1', y: 113 },
          { label: 'Station Name Dummy 1', y: 138 },
          { label: 'Station Name Dummy 1', y: 67 },
        ],
      },
    ],
  };
}
