import { test, expect } from '@playwright/test';

test('API test should make a GET call and validate the response', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    // Assert the response code
    expect(response.status()).toBe(200);

    // Assert the response body
    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);
    expect(responseBody.userId).toBe(1);
    expect(responseBody.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    expect(responseBody.body).toBe('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
});
