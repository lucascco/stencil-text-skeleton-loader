import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'text-skeleton-loader',
  styleUrl: 'text-skeleton-loader.scss',
  shadow: true
})
export class TextSkeletonLoader {

  @Prop({mutable: true}) loading: boolean;

  render() {
    return (
      <span class={`text-skeleton-loader ${this.loading ? '-is-loading' : ''}`}>
        <slot />
      </span>
    );
  }
}
