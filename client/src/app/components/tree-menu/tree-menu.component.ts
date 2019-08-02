import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatNode} from './../../interfaces/tree-menu/flat-node';
import {MenuNode} from '../../interfaces/tree-menu/menu-node';


@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {
  @Input() treeData: MenuNode[];
  @Output() optionSelected = new EventEmitter();
  @Input() typeTree: string;
  
  public activeNode: any;
  constructor() {
  }
  ngOnInit() {
    this.dataSource.data = this.treeData;

  }

  isActive(node){
  }

  activeOption(node){
    this.activeNode = node;
    this.optionSelected.emit(this.activeNode.name);

  }

  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatNode) => node.expandable;
}
