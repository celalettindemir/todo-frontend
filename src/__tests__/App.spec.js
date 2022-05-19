import {shallowMount} from '@vue/test-utils'
import App from "../App";

describe("VideoPost.vue", () => {
    it('sanity test', () => {
        return
    })
    it("should component exists", () => {
        const wrapper = mountComponent();
        expect(wrapper.exists()).toBeTruthy()
    })
    it("should component item list", async () => {
        const wrapper = mountComponent();
        const list=wrapper.findAll("li");
        expect(list.at(0).text()).toBe("buy some milk");
        expect(wrapper.vm.$store.dispatch).toBeCalledTimes(1);
    })
    it("should component add item", async () => {
        const wrapper = mountComponent();
        const textInput=wrapper.find("#text-box")
        await textInput.setValue("buy some milk");
        textInput.trigger('input')
        await wrapper.find("#add-button").trigger("click");
        expect(wrapper.vm.$store.dispatch).toBeCalledTimes(2);
    })
})
function mountComponent() {
    return shallowMount(App,{
        mocks:{
            $store: {
                dispatch:jest.fn(),
                state:{
                    ToDoList: [
                        {
                            "id": 1,
                            "task": "buy some milk",
                        },
                    ]
                }
            },

        }
    });
}