import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

/**
 * スキル
 */
@Component({
  selector: 'pf-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements AfterViewInit {

  /** バックエンドのcanvas */
  @ViewChild('backend') backend: ElementRef;

  /** フロントエンドのcanvas */
  @ViewChild('frontend') frontend: ElementRef;

  /** フロントエンドのスキル */
  private backendSkills = {
    labels: ['SQL', 'C#', 'ASP.NET Core', 'Node.js', 'Azure'],
    datasets: [{
      data: [90, 80, 80, 60, 50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ]
    }]
  };

  /** フロントエンドのスキル */
  private frontendSkills = {
    labels: ['TypeScript', 'HTML / SCSS ', 'Angular', 'Gulp / Webpack', 'jQuery'],
    datasets: [{
      data: [80, 80, 70, 70, 60],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ]
    }]
  };

  /** Char作成オプション */
  private options = {
    title: {
      display: true,
      fontSize: 18,
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100
        },
      }],
    },
    legend: {
      display: false,
    },

  };

  /**
   * コンストラクタ
   */
  constructor() {
  }

  /**
   * ビュー初期化後
   */
  ngAfterViewInit() {
    this.createChart(this.backend.nativeElement, this.backendSkills, 'Backend');
    this.createChart(this.frontend.nativeElement, this.frontendSkills, 'Frontend');
  }

  /**
   * Chartの作成
   * @param canvas キャンバス
   * @param skills スキル一覧
   * @param title Chartのタイトル
   * @returns Chartオブジェクト
   */
  private createChart(canvas: any, skills: any, title: string) {
    const context = canvas.getContext('2d');
    return new Chart(context, {
      type: 'horizontalBar',
      data: skills,
      options: Object.assign(
        {},
        this.options,
        {
          title: Object.assign(this.options.title, { text: title })
        }
      )
    });
  }

}
