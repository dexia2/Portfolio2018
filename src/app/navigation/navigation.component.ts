import { Component, OnInit } from '@angular/core';

/**
 * ナビゲーション
 */
@Component({
  selector: 'pf-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  /** モーダルダイアローグが開いているかどうか */
  isOpen = false;

  /**
   * コンストラクタ
   */
  constructor() { }

  /**
   * 初期化
   */
  ngOnInit() {
  }

}