import basePick from './internal/basePick';
import { Key } from './internal/interfaces';
import isNil from './isNil';

function pick(object: unknown, includes: Key[]) {
  return isNil(object) || !includes?.length ? {} : basePick(object, includes)
}

export default pick
