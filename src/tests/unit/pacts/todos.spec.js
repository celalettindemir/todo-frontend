import { pactWith } from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
const { eachLike, like } = Matchers
import { API } from "@/api";


pactWith({
    consumer: "Frontend",
    provider: "Backend",
}, provider => {
    describe("todos", () => {
        let api
        beforeEach(() => {
            console.log(provider.mockService.baseUrl)
            api = new API(provider.mockService.baseUrl)
        })

        test('save todo', async () => {
            await provider.addInteraction({
                state: 'save todo successfully',
                uponReceiving: 'a request save for todo',
                withRequest: {
                    method: 'POST',
                    path: '/api',
                    body: {
                        task: like("Buy car"),
                    }
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: like({
                        id: like(1),
                        task: like("Buy car"),
                    })
                }
            })
            const res = await api.postToDoList({ "task": "Buy car" });
            expect(res.id).toEqual(1);
        })
        test('get todo list', async () => {

            await provider.addInteraction({
                state: 'get todo list successfully',
                uponReceiving: 'a request not empty for video list',
                withRequest: {
                    method: 'GET',
                    path: '/api',
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: eachLike({
                        id: like(1),
                        task: like("Buy car"),
                    })
                }
            })
            const res = await api.getToDoList();
            expect(res[0].id).toEqual(1);
        });
    })
})
