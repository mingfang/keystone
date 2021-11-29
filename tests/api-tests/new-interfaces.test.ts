import { list } from '@keystone-6/keystone';
import { text } from '@keystone-6/keystone/fields';
import { setupTestRunner } from '@keystone-6/keystone/testing';
import { apiTestConfig } from './utils';

const runner = setupTestRunner({
  config: apiTestConfig({
    lists: {
      User: list({ fields: { name: text() } }),
    },
  }),
});

test(
  'Smoke test',
  runner(async ({ context }) => {
    const users = await context.db.User.findMany({});
    expect(users).toEqual([]);
  })
);
