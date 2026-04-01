import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-resources',
  imports: [],
  templateUrl: './resources.html',
})
export class Resources {
  //Dynamic component loading
  @ViewChild('resources', { read: ViewContainerRef })
  resources!: ViewContainerRef;

  async loadResources() {
    this.resources.clear(); // This is necessary to clear the component else a new component will be added to existing components
    const { SingleResource } = await import('./single-resource/single-resource');
    this.resources.createComponent(SingleResource);
  }
}
