import Vue from 'vue';
import ListView from '@/components/base/ListView';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ListView);
    const vm = new Constructor().$mount();
    expect(vm.$el.textContent)
      .to.equal('list view');
  });
});
