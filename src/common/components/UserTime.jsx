import PropTypes from "prop-types";

import { getTimezone, getDateTime } from "@/common/utils/dayjs";

const UserTime = ({ ts }) => (
  <div className="flex w-full flex-col items-center justify-between">
    <div className="py-3 text-2xl font-semibold text-primary-light">
      Your time is
    </div>
    <div className="flex w-full flex-col items-center justify-center">
      <div className="text-6xl font-bold">{getDateTime(ts)}</div>
      <div className="py-4 text-xs font-semibold uppercase tracking-wide text-primary-light">
        {getTimezone()}
      </div>
    </div>
  </div>
);

UserTime.propTypes = {
  ts: PropTypes.number.isRequired,
};

export default UserTime;
