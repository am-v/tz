import PropTypes from 'prop-types';
import { MinusCircleIcon } from '@heroicons/react/outline';

import { getDateTime } from 'common/utils/dayjs';

const TimeCard = ({ tz, handleDelete, ts }) => (
  <div className="w-full px-2 py-4 sm:w-1/2 md:w-1/3">
    <div className="h-full rounded-md border border-grey bg-card px-4 py-6 shadow-sm">
      <div className="flex items-center justify-between text-xs uppercase tracking-wider text-primary-light">
        <div className="font-semibold text-brand">{tz.code}</div>
        <button
          onClick={() => handleDelete(tz.id)}
          type="button"
          className="text-primary-light transition-all hover:text-danger"
        >
          <MinusCircleIcon className="h-5" />
        </button>
      </div>
      <div className="py-4">
        <div className="font-semibold text-primary-light">
          {getDateTime(ts, 'DD MMMM YYYY', tz.code)}
        </div>
        <div className="pt-2 text-3xl font-bold">
          {getDateTime(ts, 'LTS', tz.code)}
        </div>
      </div>
      <div className="flex justify-between text-xs text-primary-light">
        <div>{tz.name}</div>
        <div className="font-semibold text-brand">
          {getDateTime(ts, 'Z', tz.code)}
        </div>
      </div>
    </div>
  </div>
);

TimeCard.defaultProps = {
  tz: '',
  handleDelete: () => {},
};

TimeCard.propTypes = {
  tz: PropTypes.shape({
    id: PropTypes.string,
    code: PropTypes.string,
    tag: PropTypes.string,
    offset: PropTypes.number,
    text: PropTypes.string,
    name: PropTypes.string,
  }),
  handleDelete: PropTypes.func,
  ts: PropTypes.number.isRequired,
};

export default TimeCard;
