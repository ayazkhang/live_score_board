import { get } from "../../modals/matches";
import { pool } from '../../database/db';

jest.mock('pg');

describe('get', () => {
  it('should return a matches', async () => {
    const mockRows = [
      {
        id: 1,
        name: 'Category1',
        parent_id: null,
      },
      {
        id: 2,
        name: 'Subcategory1',
        parent_id: 1,
      },
    ];

    require('pg').Pool.prototype.query.mockResolvedValueOnce({ rows: mockRows });
    const result = await get();
    expect(Array.isArray(result)).toBe(true);

  });


});


