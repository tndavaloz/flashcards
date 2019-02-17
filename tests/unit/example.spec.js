import { shallowMount } from '@vue/test-utils';
describe('Flashcards.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = '';
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg },
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
//# sourceMappingURL=example.spec.js.map